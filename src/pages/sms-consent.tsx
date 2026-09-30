import Link from '@docusaurus/Link';
import {Page, Card} from '@site/src/components/Page';
import LeadForm from '@site/src/components/LeadForm';

export default function SmsConsent() {
  return (
    <Page
      title="Text Message Opt-In"
      description="Opt in to receive text messages from Thoshini LLC. Verify your mobile number to subscribe."
      eyebrow="SMS Opt-In"
      heading="Get quote, order and service updates by text"
      intro="Subscribe to text messages from Thoshini LLC. We verify every mobile number with a one-time code before sending any updates.">
      <div className="grid-2" style={{alignItems: 'start'}}>
        <Card title="Subscribe">
          <LeadForm
            kind="sms"
            smsRequired
            submitLabel="Subscribe to texts"
            fields={[
              {name: 'name', label: 'Full name', required: true, half: true},
              {name: 'email', label: 'Email', type: 'email', half: true},
              {name: 'organization', label: 'Company / organization'},
            ]}
          />
        </Card>
        <div style={{display: 'grid', gap: '1.25rem'}}>
          <Card title="Program details" tone="blue">
            <table className="facts">
              <tbody>
                <tr><th>Program</th><td>Thoshini Customer &amp; Partner Updates</td></tr>
                <tr><th>Messages about</th><td>Quotes, orders and deliveries, scheduling, service status, work orders and account notices</td></tr>
                <tr><th>Frequency</th><td>Varies, typically 1–10 messages per month</td></tr>
                <tr><th>Cost</th><td>Message and data rates may apply</td></tr>
                <tr><th>Opt out</th><td>Reply <strong>STOP</strong> at any time</td></tr>
                <tr><th>Help</th><td>Reply <strong>HELP</strong> or email info@thoshini.com</td></tr>
              </tbody>
            </table>
          </Card>
          <Card title="Your privacy" tone="teal">
            <p>
              Mobile numbers and SMS consent are never sold, rented or shared with third parties or affiliates for
              marketing or promotional purposes. Carriers are not liable for delayed or undelivered messages.
            </p>
            <p>
              <Link to="/sms-terms">SMS Terms</Link> · <Link to="/privacy">Privacy Policy</Link>
            </p>
          </Card>
        </div>
      </div>
    </Page>
  );
}
