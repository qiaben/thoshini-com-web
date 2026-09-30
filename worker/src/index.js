// Forms API for thoshini.com: SMS verification (Twilio Verify), SMS consent
// records (KV) and form notifications (SendGrid).

const TOKEN_TTL_MS = 30 * 60 * 1000;
const E164 = /^\+1\d{10}$/;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowed = env.ALLOWED_ORIGINS.split(',').map((s) => s.trim());
    const cors = {
      'Access-Control-Allow-Origin': allowed.includes(origin) ? origin : allowed[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    };
    const json = (body, status = 200) =>
      new Response(JSON.stringify(body), {status, headers: {...cors, 'Content-Type': 'application/json'}});

    if (request.method === 'OPTIONS') return new Response(null, {headers: cors});
    if (request.method !== 'POST') return json({error: 'Not found'}, 404);
    if (!allowed.includes(origin)) return json({error: 'Origin not allowed'}, 403);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({error: 'Invalid JSON'}, 400);
    }
    const ip = request.headers.get('CF-Connecting-IP') || '';
    const path = new URL(request.url).pathname;

    try {
      if (path === '/sms/start') return json(...(await smsStart(env, body, ip)));
      if (path === '/sms/check') return json(...(await smsCheck(env, body)));
      if (path === '/submit') return json(...(await submit(env, body, request, ip)));
    } catch (e) {
      console.error(e);
      return json({error: 'Server error. Please email info@thoshini.com.'}, 500);
    }
    return json({error: 'Not found'}, 404);
  },
};

async function smsStart(env, {phone}, ip) {
  if (!E164.test(phone || '')) return [{error: 'Enter a valid US mobile number.'}, 400];
  // Simple abuse guard: at most 5 code requests per IP and per number per hour.
  for (const key of [`rl:ip:${ip}`, `rl:ph:${phone}`]) {
    const n = Number((await env.FORMS.get(key)) || 0);
    if (n >= 5) return [{error: 'Too many attempts. Please try again later.'}, 429];
    await env.FORMS.put(key, String(n + 1), {expirationTtl: 3600});
  }
  const r = await twilio(env, 'Verifications', {To: phone, Channel: 'sms'});
  if (!r.ok) return [{error: 'Could not send a code to that number.'}, 400];
  return [{ok: true}];
}

async function smsCheck(env, {phone, code}) {
  if (!E164.test(phone || '') || !/^\d{4,10}$/.test(code || '')) return [{error: 'Invalid code.'}, 400];
  const r = await twilio(env, 'VerificationCheck', {To: phone, Code: code});
  const data = await r.json().catch(() => ({}));
  if (!r.ok || data.status !== 'approved') return [{error: 'That code did not match or has expired.'}, 400];
  const exp = Date.now() + TOKEN_TTL_MS;
  return [{ok: true, token: `${exp}.${await sign(env, `${phone}|${exp}`)}`}];
}

async function submit(env, {form, fields, sms}, request, ip) {
  if (!['contact', 'partner', 'sms'].includes(form)) return [{error: 'Unknown form.'}, 400];
  const clean = {};
  for (const [k, v] of Object.entries(fields || {})) {
    if (typeof v === 'string' && k.length <= 40) clean[k] = v.slice(0, 5000);
  }

  let consent = null;
  if (sms?.consent) {
    const [exp, sig] = String(sms.token || '').split('.');
    const valid =
      E164.test(sms.phone || '') &&
      Number(exp) > Date.now() &&
      sig === (await sign(env, `${sms.phone}|${exp}`));
    if (!valid) return [{error: 'Mobile verification expired. Please verify your number again.'}, 400];
    consent = {
      phone: sms.phone,
      consentText: String(sms.consentText || '').slice(0, 2000),
      page: String(sms.page || '').slice(0, 500),
      verifiedBy: 'twilio-verify-otp',
    };
  } else if (form === 'sms') {
    return [{error: 'Consent is required to subscribe.'}, 400];
  }

  const at = new Date().toISOString();
  const record = {form, at, ip, userAgent: request.headers.get('User-Agent') || '', fields: clean, sms: consent};
  const id = `${at}-${crypto.randomUUID().slice(0, 8)}`;
  await env.FORMS.put(`submission:${id}`, JSON.stringify(record));
  if (consent) await env.FORMS.put(`consent:${consent.phone}:${at}`, JSON.stringify(record));

  if (env.SENDGRID_API_KEY) {
    const lines = Object.entries(clean).map(([k, v]) => `${k}: ${v}`);
    if (consent) lines.push('', `SMS opt-in: ${consent.phone} (verified ${at})`);
    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {Authorization: `Bearer ${env.SENDGRID_API_KEY}`, 'Content-Type': 'application/json'},
      body: JSON.stringify({
        personalizations: [{to: [{email: env.NOTIFY_TO}]}],
        from: {email: env.NOTIFY_FROM, name: 'thoshini.com'},
        reply_to: clean.email ? {email: clean.email} : undefined,
        subject: `Website ${form} form: ${clean.name || clean.company || clean.contact || 'new submission'}`,
        content: [{type: 'text/plain', value: lines.join('\n')}],
      }),
    }).catch((e) => console.error('sendgrid', e));
  }
  return [{ok: true}];
}

function twilio(env, resource, params) {
  return fetch(`https://verify.twilio.com/v2/Services/${env.TWILIO_VERIFY_SID}/${resource}`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(params),
  });
}

async function sign(env, message) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.TOKEN_SECRET), {name: 'HMAC', hash: 'SHA-256'}, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return btoa(String.fromCharCode(...new Uint8Array(mac))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
