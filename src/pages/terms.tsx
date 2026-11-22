import Link from '@docusaurus/Link';
import {Page} from '@site/src/components/Page';
import {company} from '@site/src/data/company';

export default function Terms() {
  return (
    <Page title="Terms of Use" description="Terms of use for the thoshini.com website." eyebrow="Legal" heading="Terms of Use">
      <article className="legal">
        <p className="updated">Last updated: November 22, 2026</p>
        <p>By using thoshini.com you agree to these terms. If you do not agree, please do not use the site.</p>

        <h2>Website content</h2>
        <p>
          Content on this site describes the products and services {company.legalName} offers and is provided for general information.
          It is not an offer or a binding quote. Products, pricing and availability are set only in a written quote,
          purchase order or contract.
        </p>

        <h2>Reservations</h2>
        <p>
          A reservation is free and is not a purchase. It does not obligate you to buy or {company.legalName} to sell. An
          order is placed only when you accept a written quote.
        </p>

        <h2>AI output</h2>
        <p>
          The AI Box generates text with AI models that can be wrong or incomplete. Review important output before you
          rely on it. It is not a substitute for professional medical, legal, financial or other advice.
        </p>

        <h2>Submissions</h2>
        <p>
          You agree that information you submit is accurate and that you are authorized to provide it. We use submissions as
          described in our <Link to="/privacy">Privacy Policy</Link>. Text messaging is governed by our{' '}
          <Link to="/sms-terms">SMS Terms</Link>.
        </p>

        <h2>Acceptable use</h2>
        <p>Do not misuse the site, attempt unauthorized access, submit false information or use automated means to submit forms.</p>

        <h2>Disclaimer and limitation of liability</h2>
        <p>
          The site is provided "as is" without warranties of any kind. To the fullest extent permitted by law, {company.legalName}{' '}
          is not liable for indirect or consequential damages arising from use of the site.
        </p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the State of Wyoming.</p>

        <h2>Contact</h2>
        <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
      </article>
    </Page>
  );
}
