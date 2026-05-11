import {useEffect, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './_stub.module.css';

const CALENDLY_URL = 'https://calendly.com/thoshini/30min';

function CalendlyWidget(): ReactNode {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{minWidth: 320, height: 700, width: '100%'}}
    />
  );
}

export default function Schedule(): ReactNode {
  return (
    <Layout
      title="Book a call — Thoshini VLSI"
      description="Pick a 30-minute slot to talk to Thoshini about your chip. Bring a spec or just a description.">
      <section className={styles.stub} style={{paddingTop: 120, paddingBottom: 32}}>
        <p className={styles.eyebrow}>Schedule</p>
        <h1 className={styles.title}>Book a 30-minute call.</h1>
        <p className={styles.subtitle}>
          Pick a time that works for you. We&apos;ll spend the call talking
          about what the chip needs to do, the process node, volume, and
          timeline, and what makes sense as a first build. No prep required,
          but a spec helps.
        </p>
      </section>

      <section className={styles.scheduleSection}>
        <div className={styles.scheduleWrap}>
          <BrowserOnly fallback={<div style={{height: 700}} aria-hidden="true" />}>
            {() => <CalendlyWidget />}
          </BrowserOnly>
        </div>
      </section>

      <section className={styles.stub} style={{paddingTop: 60, paddingBottom: 100}}>
        <h2 className={styles.title} style={{fontSize: 'clamp(1.6rem, 3vw, 2.2rem)'}}>
          Prefer email?
        </h2>
        <p className={styles.subtitle}>
          Send your spec or description to{' '}
          <a href="mailto:info@thoshini.com">info@thoshini.com</a>{' '}
          and we&apos;ll come back with a feasibility note and a plan.
        </p>
      </section>
    </Layout>
  );
}
