import {useState, type FormEvent} from 'react';
import Link from '@docusaurus/Link';
import PhoneVerify, {type Verified} from './PhoneVerify';
import {postJson, SMS_CONSENT_TEXT, useFormsApi} from './api';

export type Field = {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea' | 'select';
  options?: string[];
  required?: boolean;
  half?: boolean;
};

// A form that submits to the forms worker, with optional SMS opt-in. Opting in
// requires verifying the mobile number, which gives proof of consent for that number.
export default function LeadForm({
  kind,
  fields,
  submitLabel,
  smsRequired = false,
}: {
  kind: 'contact' | 'partner' | 'sms';
  fields: Field[];
  submitLabel: string;
  smsRequired?: boolean;
}) {
  const api = useFormsApi();
  const [values, setValues] = useState<Record<string, string>>({});
  const [smsConsent, setSmsConsent] = useState(false);
  const [phone, setPhone] = useState('');
  const [verified, setVerified] = useState<Verified | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{kind: 'ok' | 'err'; text: string} | null>(null);

  const wantsSms = smsRequired || smsConsent;
  const smsReady = !wantsSms || (smsConsent && verified);

  const set = (k: string, v: string) => setValues((s) => ({...s, [k]: v}));

  async function submit(e: FormEvent) {
    e.preventDefault();
    setResult(null);
    if (!smsReady) {
      setResult({kind: 'err', text: smsConsent ? 'Please verify your mobile number first.' : 'Please check the consent box to opt in.'});
      return;
    }
    if (!api) {
      const body = fields.map((f) => `${f.label}: ${values[f.name] ?? ''}`).join('\n');
      window.location.href = `mailto:info@thoshini.com?subject=${encodeURIComponent(`Website ${kind} form`)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setBusy(true);
    const r = await postJson(api, '/submit', {
      form: kind,
      fields: values,
      sms: wantsSms && verified
        ? {consent: true, phone: verified.phone, token: verified.token, consentText: SMS_CONSENT_TEXT, page: window.location.href}
        : {consent: false},
    });
    setBusy(false);
    if (r.ok) {
      setResult({
        kind: 'ok',
        text: kind === 'sms'
          ? 'You are subscribed to Thoshini text updates. Reply STOP at any time to opt out.'
          : 'Thank you. We received your message and will reply within one business day.',
      });
      setValues({});
      setSmsConsent(false);
      setPhone('');
      setVerified(null);
    } else {
      setResult({kind: 'err', text: r.error || 'Something went wrong. Please email info@thoshini.com.'});
    }
  }

  const rows: Field[][] = [];
  for (const f of fields) {
    const last = rows[rows.length - 1];
    if (f.half && last && last.length === 1 && last[0].half) last.push(f);
    else rows.push([f]);
  }

  return (
    <form className="form-x" onSubmit={submit}>
      {rows.map((row) => (
        <div key={row[0].name} className={row.length > 1 ? 'row-2' : undefined}>
          {row.map((f) => (
            <div key={f.name}>
              <label htmlFor={f.name}>{f.label}{f.required ? ' *' : ''}</label>
              {f.type === 'textarea' ? (
                <textarea id={f.name} required={f.required} value={values[f.name] ?? ''} onChange={(e) => set(f.name, e.target.value)} />
              ) : f.type === 'select' ? (
                <select id={f.name} required={f.required} value={values[f.name] ?? ''} onChange={(e) => set(f.name, e.target.value)}>
                  <option value="">Select…</option>
                  {f.options?.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : (
                <input id={f.name} type={f.type ?? 'text'} required={f.required} value={values[f.name] ?? ''} onChange={(e) => set(f.name, e.target.value)} />
              )}
            </div>
          ))}
        </div>
      ))}

      <PhoneVerify
        value={phone}
        onChange={setPhone}
        verified={verified}
        onVerified={setVerified}
        required={wantsSms}
        canSend={smsConsent}
        label={smsRequired ? 'Mobile number' : 'Mobile number (optional, needed for text updates)'}
      />

      <label className="consent" htmlFor="sms-consent">
        <input id="sms-consent" type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} />
        <span>
          {SMS_CONSENT_TEXT} See our <Link to="/privacy">Privacy Policy</Link> and <Link to="/sms-terms">SMS Terms</Link>.
          {!smsRequired && ' (Optional)'}
        </span>
      </label>
      {smsConsent && !verified && (
        <div className="form-msg info" role="status">
          Enter your mobile number above and select Send code to verify it.
        </div>
      )}

      <button type="submit" disabled={busy || (smsRequired && !smsReady)}>
        {busy ? 'Sending…' : submitLabel}
      </button>
      {result && <div className={`form-msg ${result.kind}`} role="status">{result.text}</div>}
    </form>
  );
}
