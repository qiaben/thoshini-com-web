import {useState} from 'react';
import {postJson, toE164, useFormsApi} from './api';

export type Verified = {phone: string; token: string};

// Two-step mobile verification: send a one-time code by SMS, then confirm it.
// On success the worker returns a signed token that later submissions carry as proof.
export default function PhoneVerify({
  value,
  onChange,
  verified,
  onVerified,
  required,
  canSend = true,
  label = 'Mobile number',
}: {
  value: string;
  onChange: (v: string) => void;
  verified: Verified | null;
  onVerified: (v: Verified | null) => void;
  required?: boolean;
  canSend?: boolean;
  label?: string;
}) {
  const api = useFormsApi();
  const [code, setCode] = useState('');
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{kind: 'ok' | 'err' | 'info'; text: string} | null>(null);

  const e164 = toE164(value);

  async function send() {
    if (!e164) {
      setMsg({kind: 'err', text: 'Enter a 10-digit US mobile number.'});
      return;
    }
    if (!api) {
      setMsg({kind: 'info', text: 'Text verification is temporarily unavailable. Please email info@thoshini.com with your mobile number and "SMS opt-in".'});
      return;
    }
    setBusy(true);
    setMsg(null);
    const r = await postJson(api, '/sms/start', {phone: e164});
    setBusy(false);
    if (r.ok) {
      setSentTo(e164);
      setMsg({kind: 'info', text: `We sent a 6-digit code to ${value}. It expires in 10 minutes.`});
    } else {
      setMsg({kind: 'err', text: r.error || 'Could not send a code.'});
    }
  }

  async function check() {
    if (!sentTo) return;
    setBusy(true);
    setMsg(null);
    const r = await postJson<{token?: string}>(api, '/sms/check', {phone: sentTo, code: code.trim()});
    setBusy(false);
    if (r.ok && r.token) {
      onVerified({phone: sentTo, token: r.token});
      setMsg({kind: 'ok', text: 'Mobile number verified.'});
    } else {
      setMsg({kind: 'err', text: r.error || 'That code did not match. Try again.'});
    }
  }

  return (
    <div>
      <label htmlFor="phone">{label}{required ? ' *' : ''}</label>
      <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(555) 555-0100"
          value={value}
          required={required}
          style={{flex: '1 1 200px'}}
          onChange={(e) => {
            onChange(e.target.value);
            if (verified) onVerified(null);
            setSentTo(null);
            setMsg(null);
          }}
        />
        {!verified && (
          <button type="button" onClick={send} disabled={busy || !value || !canSend}>
            {sentTo ? 'Resend code' : 'Send code'}
          </button>
        )}
      </div>
      {sentTo && !verified && (
        <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.6rem'}}>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            placeholder="6-digit code"
            maxLength={6}
            value={code}
            style={{flex: '1 1 160px'}}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
          />
          <button type="button" onClick={check} disabled={busy || code.length < 4}>
            Verify
          </button>
        </div>
      )}
      {msg && (
        <div className={`form-msg ${msg.kind}`} style={{marginTop: '0.6rem'}} role="status">
          {msg.text}
        </div>
      )}
    </div>
  );
}
