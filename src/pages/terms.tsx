import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './_stub.module.css';

export default function Terms(): ReactNode {
  return (
    <Layout
      title="Terms of Service — Thoshini VLSI"
      description="Thoshini VLSI Terms of Service governing the use of thoshini.com and the supply of semiconductor design and engineering services.">
      <main className={styles.legalContainer}>
        <article className={styles.legal}>
          <Heading as="h1">Terms of Service</Heading>
          <p className={styles.legalMeta}>
            <strong>Effective Date:</strong> May 11, 2026 &nbsp;|&nbsp;{' '}
            <strong>Last Updated:</strong> May 11, 2026
          </p>

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
            the website at <a href="https://thoshini.com">thoshini.com</a>{' '}
            (the &ldquo;Site&rdquo;) and your engagement with Thoshini VLSI
            Pvt Ltd (&ldquo;Thoshini,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) for semiconductor design,
            verification, and related engineering services. By using the Site
            or engaging us for services, you agree to these Terms.
          </p>

          <Heading as="h2">1. Use of the Site</Heading>
          <p>
            You may use the Site for lawful purposes only. Content on the
            Site is provided for general information and does not constitute
            an offer or commitment to supply goods or services on the terms
            shown.
          </p>

          <Heading as="h2">2. Proposals and Orders</Heading>
          <p>
            Any proposal or quotation we issue is valid for the period stated
            on it (and otherwise for 30 days). A binding contract is formed
            only when we acknowledge an engagement in writing or both parties
            sign a Statement of Work. The terms of our written acknowledgement
            or the Statement of Work, along with these Terms, govern the
            engagement.
          </p>

          <Heading as="h2">3. Specifications, RTL, and Designs</Heading>
          <p>
            You are responsible for the accuracy and completeness of any
            specifications, RTL, schematics, layouts, and other technical
            material you provide. We perform a reasonable feasibility review
            and may flag concerns; however, our work in accordance with the
            agreed specification is taken as conforming. Any change to scope
            after order confirmation may affect price and schedule.
          </p>

          <Heading as="h2">4. Payment</Heading>
          <p>
            Payment terms are set out in the relevant proposal or Statement
            of Work. Unless otherwise agreed, milestone-based invoicing applies,
            with an advance required before engineering work begins. Late
            payments may attract interest at the rate permitted by law.
          </p>

          <Heading as="h2">5. Schedule and Delivery</Heading>
          <p>
            Schedules are estimates given in good faith based on information
            available at the time of proposal. We are not liable for delays
            caused by force majeure, third-party tool or IP licensing,
            foundry or OSAT capacity, supplier delays, or scope changes you
            request after order confirmation.
          </p>

          <Heading as="h2">6. Quality and Acceptance</Heading>
          <p>
            We deliver work products to the criteria agreed in the Statement
            of Work, including coverage thresholds, sign-off reports, and
            sample silicon where applicable. You must review deliverables on
            receipt and notify us of any non-conformance within 14 days. We
            will, at our discretion, rework or replace non-conforming
            deliverables. Save for fraud and gross negligence, this is your
            sole remedy for defects in our engineering deliverables.
          </p>

          <Heading as="h2">7. Confidentiality</Heading>
          <p>
            Each party will keep the other&apos;s confidential information
            confidential and use it only for the purposes of the engagement.
            We are willing to sign a separate Non-Disclosure Agreement on
            request before review of sensitive material.
          </p>

          <Heading as="h2">8. Intellectual Property</Heading>
          <p>
            You retain ownership of intellectual property in specifications
            and designs you provide and, subject to full payment, in the
            customer-funded deliverables produced under a Statement of Work.
            We retain ownership of our background know-how, internal tooling,
            test infrastructure, and any reusable building blocks not funded
            by the engagement. Licensed third-party IP and EDA tools remain
            subject to their respective vendor terms.
          </p>

          <Heading as="h2">9. Warranty</Heading>
          <p>
            We warrant that engineering deliverables will substantially
            conform to the agreed specification and be performed with
            reasonable skill and care. Foundry, OSAT, and third-party IP
            output carries only the warranty offered by the relevant
            supplier; we will reasonably assist in pursuing those warranties.
          </p>

          <Heading as="h2">10. Limitation of Liability</Heading>
          <p>
            To the maximum extent permitted by law, our liability arising
            out of or in connection with any engagement is limited to the
            fees paid for the deliverable giving rise to the claim. We are
            not liable for indirect, incidental, special, or consequential
            losses, including loss of profit, loss of production, lost
            tape-out windows, or loss of opportunity.
          </p>

          <Heading as="h2">11. Force Majeure</Heading>
          <p>
            We are not liable for any failure or delay caused by events
            beyond our reasonable control, including acts of God, strikes,
            transport disruption, supply-chain failures, foundry or OSAT
            outages, sanctions, or government action.
          </p>

          <Heading as="h2">12. Governing Law</Heading>
          <p>
            These Terms and any contract formed under them are governed by
            the laws of India. The courts of Coimbatore, Tamil Nadu have
            exclusive jurisdiction over any dispute, except that we may
            seek injunctive relief in any court of competent jurisdiction.
          </p>

          <Heading as="h2">13. Changes to Terms</Heading>
          <p>
            We may update these Terms from time to time. The version in
            effect at the time your engagement is acknowledged will apply to
            that engagement.
          </p>

          <Heading as="h2">14. Contact</Heading>
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
