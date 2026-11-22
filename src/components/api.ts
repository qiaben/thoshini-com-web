import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function useFormsApi(): string {
  const {siteConfig} = useDocusaurusContext();
  return ((siteConfig.customFields?.formsApiUrl as string) || '').replace(/\/$/, '');
}

export async function postJson<T = {ok: boolean; error?: string}>(
  base: string,
  path: string,
  body: unknown,
): Promise<T & {ok: boolean; error?: string}> {
  try {
    const res = await fetch(`${base}${path}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return {...data, ok: false, error: data.error || `Request failed (${res.status})`};
    return {...data, ok: true};
  } catch {
    return {ok: false, error: 'Network error. Please try again or email info@thoshini.com.'} as T & {ok: boolean; error?: string};
  }
}

// Normalises a US phone number to E.164, or returns null.
export function toE164(raw: string): string | null {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return null;
}

export const SMS_CONSENT_TEXT =
  'By checking this box, I agree to receive text messages from Thoshini LLC at the mobile number provided about my inquiry, ' +
  'reservations, quotes, orders and deliveries, setup scheduling, support and account notifications. Message frequency varies. Message and data rates may apply. ' +
  'Reply STOP to opt out at any time or HELP for help. Consent is not a condition of any purchase or service.';
