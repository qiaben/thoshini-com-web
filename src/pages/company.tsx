import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

const values = [
  {
    n: '01',
    title: 'Spec before silicon',
    desc: 'Most chip failures are spec failures, not transistor failures. We pin down the spec, then we cut RTL.',
  },
  {
    n: '02',
    title: 'Verify like adults',
    desc: 'No silicon goes out without coverage closure and a documented sign-off. Bugs found in silicon are 100x more expensive than bugs found in simulation.',
  },
  {
    n: '03',
    title: 'Mature nodes, on purpose',
    desc: 'A part that works at 65nm beats a part that almost works at 7nm. We pick the node the product actually needs.',
  },
  {
    n: '04',
    title: 'Honest schedules',
    desc: 'First silicon takes 12 to 18 months. We say so up front, and we hit it.',
  },
  {
    n: '05',
    title: 'One team owns the part',
    desc: 'The architect, the verification lead, and the physical design lead all sit together. No handoffs across vendors.',
  },
  {
    n: '06',
    title: 'Plain language',
    desc: 'We tell you what is happening and why, in words that mean something. No buzzwords, no fog.',
  },
];

const principles = [
  {
    title: 'A real fabless company, not a services shop',
    desc:
      'There are dozens of Indian firms that sell hours of RTL or verification labour to global semiconductor R&D centres. We are not one of them. We build chips end to end — for our customers and, when the time is right, for our own product line.',
  },
  {
    title: 'Coimbatore is the point, not the apology',
    desc:
      'Engineering salaries here are 25 to 35 per cent below Bengaluru, the talent pipeline from PSG Tech, Amrita, CIT, and Kumaraguru is real, and the precision-engineering ecosystem maps neatly onto semiconductor supply chains. Coimbatore is where this is being built, deliberately.',
  },
  {
    title: 'Records that hold up at sign-off',
    desc:
      'Coverage reports, timing reports, DRC and LVS logs, lint and CDC runs, regression dashboards — all version-controlled and attached to the tape-out package. Nothing depends on a single engineer remembering what they did last quarter.',
  },
  {
    title: 'Small enough to care, set up to deliver',
    desc:
      'A small team that owns the part is faster than a large team that argues about it. The people who quote the project are the people who run it. Processes are documented enough that nothing depends on heroics.',
  },
];

export default function Company(): ReactNode {
  return (
    <Layout
      title="Company — Thoshini Electronics"
      description="About Thoshini Electronics Pvt Ltd — a fabless semiconductor design company based in Coimbatore, India.">
      <section className={styles.stub} style={{paddingBottom: 40}}>
        <div
          className={styles.heroBanner}
          style={{backgroundImage: 'url(/img/stock/workspace-1.jpg)'}}
          aria-hidden="true"
        />
        <p className={styles.eyebrow}>Company</p>
        <h1 className={styles.title}>
          A fabless semiconductor company &mdash; built deliberately, from Coimbatore.
        </h1>
        <p className={styles.subtitle}>
          We design chips for industrial, IoT, and OEM customers who need
          custom silicon and a team that will actually pick up the phone.
        </p>
      </section>

      <section className={styles.proseSection}>
        <div className={styles.prose}>
          <p className={styles.lead}>
            Thoshini Electronics Pvt Ltd is a fabless semiconductor company based in
            Coimbatore. We architect, design, verify, and tape out integrated
            circuits, and we deliver packaged silicon that works on day one.
          </p>
          <p>
            Fabless means we own the design and the IP; we do not own a
            fabrication plant. We send GDSII to foundries (TSMC, GlobalFoundries,
            UMC, Tower, SMIC) and packaged silicon comes back through an OSAT
            partner. That model is how Qualcomm, NVIDIA, Broadcom, MediaTek,
            and AMD were built, and at smaller scale, it is how a focused
            Indian team can ship a credible chip on a credible budget.
          </p>
          <p>
            Most of our work is custom. Mixed-signal SoCs, power management ICs,
            analog front-ends, and small digital accelerators for industrial
            and OEM customers. We are not chasing the leading node. We are
            building parts that do exactly what the product needs, at a cost
            and yield that closes the business case.
          </p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <p className={styles.eyebrow}>What we believe</p>
        <h2 className={styles.title} style={{fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)'}}>
          Six things we will not compromise on.
        </h2>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <p className={styles.valueNumber}>{v.n}</p>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.processSection} style={{paddingTop: 80, paddingBottom: 80}}>
        <div className={styles.processTimeline} style={{marginTop: 0}}>
          <p
            className={styles.eyebrow}
            style={{textAlign: 'center', marginBottom: 14}}>
            How we work
          </p>
          <h2
            className={styles.title}
            style={{textAlign: 'center', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)'}}>
            The four things that actually matter.
          </h2>
        </div>
        <div className={styles.capRows} style={{marginTop: 40}}>
          {principles.map((p, i) => (
            <article key={p.title} className={`${styles.capRow} ${i % 2 === 1 ? styles.alt : ''}`}>
              <div className={styles.capContent} style={{gridColumn: '1 / -1'}}>
                <p className={styles.capEyebrow}>0{i + 1}</p>
                <h3 className={styles.capTitle}>{p.title}</h3>
                <p className={styles.capDesc} style={{marginBottom: 0}}>
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.workshopSection}>
        <div className={styles.workshopSplit}>
          <div
            className={styles.workshopImage}
            style={{backgroundImage: 'url(/img/stock/workspace-1.jpg)'}}
            aria-hidden="true"
          />
          <div className={styles.workshopCard}>
            <p className={styles.workshopEyebrow}>The design house</p>
            <h2 className={styles.workshopTitle}>
              Where the silicon gets thought up.
            </h2>
            <p className={styles.workshopDesc}>
              Design office, verification cluster, analog bench, and bring-up
              lab &mdash; laid out so engineers move between blocks the same way
              the work flows.
            </p>
            <p className={styles.workshopAddress}>
              <strong>Thoshini Electronics Pvt Ltd</strong>
              <br />
              1/39, Veerappanur,
              <br />
              Coimbatore, Tamil Nadu 641105, India
            </p>
            <Link className={styles.cta} to="/schedule">
              Book a call
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.stub} style={{paddingTop: 80, paddingBottom: 100}}>
        <h2 className={styles.title}>Want to work with us?</h2>
        <p className={styles.subtitle}>
          Send a spec, an architecture sketch, or just a description.
          We&apos;ll come back with a feasibility note and an honest plan.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>
    </Layout>
  );
}
