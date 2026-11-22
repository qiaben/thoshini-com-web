import Link from '@docusaurus/Link';
import {Page} from '@site/src/components/Page';
import {company} from '@site/src/data/company';

export default function SmsTerms() {
  return (
    <Page title="SMS Terms" description="Terms and conditions for the Thoshini LLC text message program." eyebrow="Legal" heading="SMS Terms & Conditions">
      <article className="legal">
        <p className="updated">Last updated: November 22, 2026</p>

        <h2>1. Program description</h2>
        <p>
          The <strong>Thoshini Customer Updates</strong> program sends text messages from {company.legalName} to
          customers and prospective customers about reservations, quotes, orders and deliveries, setup scheduling, support
          and account notices. We do not send marketing messages through this program.
        </p>

        <h2>2. How you opt in</h2>
        <p>
          You opt in by checking the unchecked SMS consent box on our <Link to="/sms-consent">SMS opt-in page</Link>,{' '}
          <Link to="/contact">contact form</Link> or <Link to="/reserve">reservation form</Link>, and confirming your mobile
          number with a one-time verification code. Consent is not a condition of any purchase or service.
        </p>

        <h2>3. Message frequency</h2>
        <p>Message frequency varies based on your activity, typically 1–10 messages per month.</p>

        <h2>4. Cost</h2>
        <p>Message and data rates may apply. Check your mobile plan for details.</p>

        <h2>5. Opt out</h2>
        <p>
          Reply <strong>STOP</strong> to any message to cancel. You will receive one confirmation message and no further messages
          unless you opt in again. You may also email <a href={`mailto:${company.email}`}>{company.email}</a> to opt out.
        </p>

        <h2>6. Help</h2>
        <p>Reply <strong>HELP</strong> for help, or email <a href={`mailto:${company.email}`}>{company.email}</a>.</p>

        <h2>7. Carriers</h2>
        <p>Supported on major U.S. carriers. Carriers are not liable for delayed or undelivered messages.</p>

        <h2>8. Privacy</h2>
        <p>
          We do not sell, rent or share your mobile number or SMS consent with third parties or affiliates for marketing
          or promotional purposes. See our <Link to="/privacy">Privacy Policy</Link>.
        </p>

        <h2>9. Changes</h2>
        <p>We may change these terms or end the program at any time. Changes take effect when posted on this page.</p>

        <h2>Sample messages</h2>
        <ul>
          <li>"Thoshini: Your AI Box quote #1042 is ready. Reply with questions. Reply STOP to opt out."</li>
          <li>"Thoshini: Your AI Box shipped and arrives Thursday. Setup call is Friday 10am. Reply HELP for help, STOP to opt out."</li>
        </ul>
      </article>
    </Page>
  );
}
