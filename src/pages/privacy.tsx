import Link from '@docusaurus/Link';
import {Page} from '@site/src/components/Page';
import {company} from '@site/src/data/company';

export default function Privacy() {
  return (
    <Page title="Privacy Policy" description="How Thoshini LLC collects, uses and protects personal information." eyebrow="Legal" heading="Privacy Policy">
      <article className="legal">
        <p className="updated">Last updated: November 22, 2026</p>
        <p>
          This Privacy Policy explains how {company.legalName} ("Thoshini", "we", "us") collects, uses and protects
          information when you visit thoshini.com, submit a form, or communicate with us by email, phone or text message.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li><strong>Information you provide</strong>: name, organization, email address, mobile phone number, location and the details of your request or reservation.</li>
          <li><strong>SMS consent records</strong>: the phone number verified, the date and time of consent, the consent language shown, the page used and the IP address of the request.</li>
          <li><strong>Technical information</strong>: basic server and security logs (such as IP address and browser type) kept by our hosting providers.</li>
        </ul>
        <p>We do not use advertising cookies or sell personal information.</p>

        <h2>How we use information</h2>
        <ul>
          <li>To respond to inquiries and reservations, prepare quotes, deliver AI Boxes and provide setup and support.</li>
          <li>To send text messages you have opted in to receive, and to honor opt-out requests.</li>
          <li>To meet legal, contractual, tax and government reporting obligations.</li>
          <li>To protect the security of our website and systems.</li>
        </ul>

        <h2>Text messaging (SMS)</h2>
        <p>
          If you opt in, we use your mobile number to send messages about reservations, quotes, orders and deliveries, setup scheduling, support
          and account notices. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP
          for help. See our <Link to="/sms-terms">SMS Terms</Link>.
        </p>
        <p>
          <strong>
            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
            Text messaging originator opt-in data and consent are excluded from all information-sharing categories
            described in this policy and will not be shared with any third parties.
          </strong>
        </p>

        <h2>How we share information</h2>
        <p>We share personal information only as needed to operate our business:</p>
        <ul>
          <li>With service providers that host our website, deliver email and text messages, or store records on our behalf, under confidentiality obligations and only to provide those services.</li>
          <li>With shipping carriers, limited to what they need to deliver your order (name and delivery address). This never includes SMS opt-in data or consent.</li>
          <li>When required by law, subpoena or to protect rights and safety.</li>
        </ul>

        <h2>Data on your AI Box</h2>
        <p>
          Documents, questions and answers you process on an AI Box stay on the device. We do not collect or access them,
          except during remote support that you have allowed, and only for as long as needed to fix the issue. If you
          turn on optional web search or cloud features, the content needed for those features is sent to the services
          that provide them; the box shows when these features are on.
        </p>

        <h2>Data retention</h2>
        <p>
          We keep inquiry and business records for as long as needed for the purposes above and to meet record-keeping
          requirements. SMS consent and opt-out records are kept for at least four years after your last message, as
          proof of consent.
        </p>

        <h2>Security</h2>
        <p>We use reasonable administrative, technical and physical safeguards, including encrypted connections (HTTPS) and access controls. No method of transmission or storage is completely secure.</p>

        <h2>Your choices and rights</h2>
        <ul>
          <li>Opt out of texts at any time by replying STOP.</li>
          <li>Ask to access, correct or delete your personal information by emailing <a href={`mailto:${company.email}`}>{company.email}</a>.</li>
          <li>Unsubscribe from emails using the link in the message or by contacting us.</li>
        </ul>

        <h2>Children</h2>
        <p>Our website and services are intended for businesses and adults. We do not knowingly collect information from children under 13.</p>

        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time. The "Last updated" date shows when it last changed.</p>

        <h2>Contact us</h2>
        <p>
          {company.legalName}
          {company.address.map((l) => <span key={l}><br />{l}</span>)}
          <br /><a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </article>
    </Page>
  );
}
