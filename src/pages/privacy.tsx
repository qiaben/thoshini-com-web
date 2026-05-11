import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './_stub.module.css';

export default function Privacy(): ReactNode {
  return (
    <Layout
      title="Privacy Policy — Thoshini VLSI"
      description="Thoshini VLSI Privacy Policy. How we collect and protect personal and technical information from website visitors and customers.">
      <main className={styles.legalContainer}>
        <article className={styles.legal}>
          <Heading as="h1">Privacy Policy</Heading>
          <p className={styles.legalMeta}>
            <strong>Effective Date:</strong> May 11, 2026 &nbsp;|&nbsp;{' '}
            <strong>Last Updated:</strong> May 11, 2026
          </p>

          <p>
            Thoshini VLSI Pvt Ltd (&ldquo;Thoshini,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects the privacy of
            visitors to{' '}
            <a href="https://thoshini.com">thoshini.com</a> and of our
            customers. This Privacy Policy describes the personal and
            technical information we collect and how we use it.
          </p>

          <Heading as="h2">1. Information We Collect</Heading>
          <ul>
            <li>
              <strong>Contact information you provide:</strong> name,
              company, email, phone number, and any details you share when
              you request a feasibility note, send a spec, or otherwise
              contact us.
            </li>
            <li>
              <strong>Project information:</strong> specifications,
              architecture documents, RTL fragments, schematics, layouts,
              and other technical material you send for the purpose of a
              feasibility evaluation or design engagement.
            </li>
            <li>
              <strong>Website usage data:</strong> standard server logs
              including IP address, browser type, pages visited, and
              timestamps. We use cookies only as needed for basic site
              functionality.
            </li>
          </ul>

          <Heading as="h2">2. How We Use Information</Heading>
          <ul>
            <li>To respond to enquiries and prepare feasibility notes and proposals.</li>
            <li>To design, verify, tape out, and deliver silicon you commission.</li>
            <li>To send invoices and operational communications.</li>
            <li>To comply with applicable Indian law and tax requirements.</li>
            <li>To improve our website and services.</li>
          </ul>
          <p>We do not sell personal information.</p>

          <Heading as="h2">3. Confidentiality of Specs, RTL, and Designs</Heading>
          <p>
            Specifications, RTL, schematics, layouts, and any other technical
            material you share with us are treated as confidential. We use
            this material only to evaluate, quote, and execute your work, and
            we restrict access to engineers who need it. We are happy to sign
            a Non-Disclosure Agreement on request before reviewing sensitive
            designs.
          </p>

          <Heading as="h2">4. Sharing of Information</Heading>
          <p>We may share information with:</p>
          <ul>
            <li>
              <strong>EDA, IP, and tooling vendors</strong> only as needed
              to license tools and IP required for your engagement.
            </li>
            <li>
              <strong>Foundries and OSAT partners</strong> for tape-out,
              wafer fabrication, packaging, and test.
            </li>
            <li>
              <strong>Logistics providers</strong> for shipment of samples
              and packaged silicon.
            </li>
            <li>
              <strong>Government and tax authorities</strong> as required
              by law.
            </li>
          </ul>

          <Heading as="h2">5. Data Retention</Heading>
          <p>
            We retain customer records, design databases, and correspondence
            for as long as needed to fulfil our contractual obligations and
            to comply with statutory record-keeping requirements under Indian
            law.
          </p>

          <Heading as="h2">6. Security</Heading>
          <p>
            We use reasonable physical, administrative, and technical
            safeguards to protect personal and project information,
            including access-controlled design repositories. No method of
            transmission or storage is fully secure, and we cannot guarantee
            absolute security.
          </p>

          <Heading as="h2">7. Your Rights</Heading>
          <p>
            You may request access to, correction of, or deletion of the
            personal information we hold about you, subject to applicable
            law. To make a request, write to{' '}
            <a href="mailto:info@thoshini.com">info@thoshini.com</a>.
          </p>

          <Heading as="h2">8. Changes to This Policy</Heading>
          <p>
            We may update this policy from time to time. The
            &ldquo;Last Updated&rdquo; date at the top reflects the most
            recent revision.
          </p>

          <Heading as="h2">9. Contact</Heading>
          <ul style={{listStyle: 'none', paddingLeft: 0}}>
            <li><strong>Thoshini VLSI Pvt Ltd</strong></li>
            <li>1/39, Veerappanur, Coimbatore, Tamil Nadu 641105, India</li>
            <li>
              Email:{' '}
              <a href="mailto:info@thoshini.com">info@thoshini.com</a>
            </li>
          </ul>
        </article>
      </main>
    </Layout>
  );
}
