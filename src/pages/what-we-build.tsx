import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

type Family = {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
  reverse?: boolean;
  alt?: boolean;
};

const families: Family[] = [
  {
    eyebrow: 'Mixed-signal SoCs',
    title: 'Digital + analog on one die',
    desc:
      'For products that need a small MCU core, an ADC or DAC, and a handful of analog peripherals on the same piece of silicon. Mature nodes, sensible cost, predictable yield.',
    image: '/img/stock/chip-1.jpg',
    bullets: [
      'Microcontroller-class digital subsystem',
      'On-chip ADC / DAC (8 to 16 bit)',
      'PMU, LDOs, references, bandgaps',
      'Standard interfaces (SPI, I2C, UART, GPIO)',
      'Mature nodes (180nm / 130nm / 65nm)',
      'QFN, LQFP, BGA packaging',
    ],
  },
  {
    eyebrow: 'Analog & power management',
    title: 'PMICs, drivers, sensor interfaces',
    desc:
      'Pure-analog or mostly-analog parts where layout, matching, and noise dominate the design. Built on BCD and mature analog flows.',
    image: '/img/stock/lab-1.jpg',
    reverse: true,
    alt: true,
    bullets: [
      'Power management ICs',
      'LED and motor drivers',
      'Sensor front-ends and AFEs',
      'Bandgap, references, oscillators',
      'Linear and switching regulators',
      'BCD-class processes',
    ],
  },
  {
    eyebrow: 'Custom digital ASICs',
    title: 'Glue logic to small accelerators',
    desc:
      'Custom digital chips that replace boards full of FPGAs or commodity parts. RTL-driven, verification-heavy, sign-off clean.',
    image: '/img/stock/code-1.jpg',
    bullets: [
      'Glue logic and protocol bridges',
      'Small RISC-V or ARM-class control SoCs',
      'Domain-specific accelerators (DSP, crypto)',
      'FPGA-to-ASIC conversion',
      'Standard memory and interface IP',
      'UVM-class verification sign-off',
    ],
  },
  {
    eyebrow: 'Reference IP & subsystems',
    title: 'Building blocks we reuse',
    desc:
      'Pre-validated blocks we drop into customer chips — saving time, taping out faster, lowering risk on a first part.',
    image: '/img/stock/chip-2.jpg',
    reverse: true,
    alt: true,
    bullets: [
      'PMU + supervisory subsystem',
      'SAR ADC (10 / 12 / 14 bit)',
      'Crystal-less RC oscillator',
      'UART / SPI / I2C controller stack',
      'Boot ROM and one-time-programmable',
      'Production test wrapper',
    ],
  },
];

export default function WhatWeBuild(): ReactNode {
  return (
    <Layout
      title="What we build — Thoshini VLSI"
      description="The kinds of chips Thoshini designs: mixed-signal SoCs, analog and power management ICs, custom digital ASICs, and reusable IP subsystems.">
      <section className={styles.stub} style={{paddingBottom: 40}}>
        <div
          className={styles.heroBanner}
          style={{backgroundImage: 'url(/img/stock/chip-1.jpg)'}}
          aria-hidden="true"
        />
        <p className={styles.eyebrow}>What we build</p>
        <h1 className={styles.title}>Chips, not slideware.</h1>
        <p className={styles.subtitle}>
          Four product families we build for our customers, with reusable
          subsystems underneath to shorten schedule and de-risk first silicon.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>

      <section className={styles.processSection} style={{paddingTop: 40, paddingBottom: 80}}>
        <div className={styles.capRows}>
          {families.map((f) => (
            <article
              key={f.title}
              className={[
                styles.capRow,
                f.reverse ? styles.reverse : '',
                f.alt ? styles.alt : '',
              ]
                .filter(Boolean)
                .join(' ')}>
              <div
                className={styles.capImage}
                style={{backgroundImage: `url(${f.image})`}}
                aria-hidden="true"
              />
              <div className={styles.capContent}>
                <p className={styles.capEyebrow}>{f.eyebrow}</p>
                <h2 className={styles.capTitle}>{f.title}</h2>
                <p className={styles.capDesc}>{f.desc}</p>
                <ul className={styles.capList}>
                  {f.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.stub} style={{paddingTop: 60, paddingBottom: 100}}>
        <h2 className={styles.title}>Looking for something else?</h2>
        <p className={styles.subtitle}>
          If your part doesn&apos;t map neatly to one of these families, talk
          to us anyway. We&apos;ll tell you honestly whether we&apos;re the
          right team for it.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>
    </Layout>
  );
}
