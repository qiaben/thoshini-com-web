import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact — Thoshini Electronics"
      description="Contact Thoshini Electronics. Email, address, and a direct calendar link to talk silicon.">
      <section className={styles.stub}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h1 className={styles.title}>Talk to a chip designer.</h1>
        <p className={styles.subtitle}>
          Send a product spec, an architecture sketch, or a question.
          We&apos;ll come back with a feasibility note and an honest plan. Or
          pick a time directly on our calendar.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Book a call</div>
            <Link className={styles.contactValue} to="/schedule">
              calendly.com/thoshini/30min
            </Link>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactLabel}>Email</div>
            <a className={styles.contactValue} href="mailto:info@thoshini.com">
              info@thoshini.com
            </a>
          </div>
          <div className={styles.contactCard} style={{gridColumn: '1 / -1'}}>
            <div className={styles.contactLabel}>India design house</div>
            <div className={styles.contactValue}>
              Thoshini Electronics Pvt Ltd
              <br />
              1/39, Veerappanur,
              <br />
              Coimbatore, Tamil Nadu 641105, India
            </div>
          </div>
        </div>

        <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link className={styles.cta} to="/schedule">
            Book a 30-min call
          </Link>
          <a
            className={styles.cta}
            style={{background: 'transparent', color: 'var(--d-accent)', border: '1px solid var(--d-border)'}}
            href="mailto:info@thoshini.com?subject=Chip%20design%20enquiry">
            Email us a spec
          </a>
        </div>
      </section>
    </Layout>
  );
}
