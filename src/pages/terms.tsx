import Link from '@docusaurus/Link';
import {Page} from '@site/src/components/Page';
import {company} from '@site/src/data/company';

export default function Terms() {
  return (
    <Page title="Terms of Use" description="Terms of use for the thoshini.com website." eyebrow="Legal" heading="Terms of Use">
      <article className="legal">
        <p className="updated">Last updated: September 29, 2026</p>
        <p>By using thoshini.com you agree to these terms. If you do not agree, please do not use the site.</p>

        <h2>Website content</h2>
        <p>
          Content on this site describes the services {company.legalName} offers and is provided for general information.
          It is not an offer or a binding quote. Services, pricing and availability are set only in a written quote,
          purchase order or contract.
        </p>

        <h2>Licensed services</h2>
        <p>
          Services that require a state or local license (such as electrical, plumbing, HVAC, roofing and landscape
          architecture) are performed by appropriately licensed partners under {company.legalName}'s management.
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
