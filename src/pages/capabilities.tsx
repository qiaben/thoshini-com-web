import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './_stub.module.css';

type Capability = {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
  reverse?: boolean;
  alt?: boolean;
};

const capabilities: Capability[] = [
  {
    eyebrow: 'Architecture',
    title: 'Specification and architecture',
    desc:
      'A spec is more than a feature list. We work the spec until block partitioning, process node, IP strategy, and tape-out plan all line up with budget and schedule.',
    image: '/img/stock/code-2.jpg',
    bullets: [
      'Product spec and architecture document',
      'Block partitioning and floorplan',
      'Node and foundry selection',
      'IP licensing strategy',
      'Tape-out plan and budget',
      'Risk register against first silicon',
    ],
  },
  {
    eyebrow: 'RTL design',
    title: 'Verilog and SystemVerilog',
    desc:
      'Clean, synthesisable RTL. Each block is built to be verified, not just to compile. Coding standards enforced from day one.',
    image: '/img/stock/code-1.jpg',
    reverse: true,
    alt: true,
    bullets: [
      'SystemVerilog RTL design',
      'Reusable parameterised IP blocks',
      'Clock domain crossing handling',
      'Low-power and clock-gating discipline',
      'Linting and CDC sign-off',
      'Synthesis-aware coding',
    ],
  },
  {
    eyebrow: 'Verification',
    title: 'UVM, coverage-driven, sign-off clean',
    desc:
      'Constrained-random verification with UVM testbenches and explicit coverage goals. We close coverage before we close timing.',
    image: '/img/stock/code-2.jpg',
    bullets: [
      'UVM testbench architecture',
      'Functional and code coverage',
      'Constrained-random stimulus',
      'Assertion-based verification (SVA)',
      'Formal property verification (selected blocks)',
      'Regression infrastructure and triage',
    ],
  },
  {
    eyebrow: 'Analog & mixed-signal',
    title: 'Layout, simulation, integration',
    desc:
      'Where matching, noise, and parasitics dominate. Analog work that respects what the silicon can actually do.',
    image: '/img/stock/chip-2.jpg',
    reverse: true,
    alt: true,
    bullets: [
      'Schematic capture and simulation',
      'Analog and mixed-signal layout',
      'Post-layout simulation (PEX, MC, corners)',
      'AMS verification (Verilog-AMS)',
      'ESD and latch-up review',
      'Analog IP integration',
    ],
  },
  {
    eyebrow: 'Physical design',
    title: 'Floorplan to GDSII',
    desc:
      'Place-and-route, timing closure, IR drop, and physical sign-off for mature nodes from 180nm down to 28nm. No exotic node heroics.',
    image: '/img/stock/chip-1.jpg',
    bullets: [
      'Floorplan and power planning',
      'Place-and-route',
      'Multi-corner multi-mode STA',
      'IR drop and EM analysis',
      'DRC, LVS, ERC sign-off',
      'Formal equivalence (LEC)',
    ],
  },
  {
    eyebrow: 'DFT',
    title: 'Design for test',
    desc:
      'Production test gets designed in, not bolted on. ATPG coverage targets agreed before RTL freeze.',
    image: '/img/stock/code-1.jpg',
    reverse: true,
    alt: true,
    bullets: [
      'Scan insertion and stitching',
      'ATPG (stuck-at, transition)',
      'MBIST for embedded memories',
      'JTAG boundary scan',
      'IEEE 1500 / IJTAG wrappers',
      'Test program development',
    ],
  },
  {
    eyebrow: 'Tape-out & bring-up',
    title: 'Foundry, package, first silicon',
    desc:
      'GDSII through wafers, packaged parts, and characterised silicon ready to ship. Multi-project shuttle and full-reticle.',
    image: '/img/stock/wafer-1.jpg',
    bullets: [
      'Tape-out coordination with foundry',
      'OSAT package selection and qualification',
      'Wafer probe and final test programs',
      'Silicon bring-up and characterisation',
      'Reference board and demo firmware',
      'Production transfer to customer',
    ],
  },
];

const tools = [
  {name: 'Cadence', meta: 'Virtuoso, Innovus, Genus, Xcelium'},
  {name: 'Synopsys', meta: 'Design Compiler, VCS, IC Compiler II, PrimeTime'},
  {name: 'Siemens EDA', meta: 'Questa, Calibre, Tessent'},
  {name: 'Verific', meta: 'Parsers and linting platforms'},
  {name: 'GitHub / GitLab', meta: 'Source control, CI, regression dashboards'},
  {name: 'Python / TCL', meta: 'Flow automation and scripting'},
];

const nodes = [
  {label: 'Mature digital', value: '180 / 130 / 65 nm', desc: 'Workhorse digital and mixed-signal — our default starting point.'},
  {label: 'Sub-100 advanced', value: '40 / 28 nm', desc: 'Where performance matters and the budget allows a tighter shuttle.'},
  {label: 'Analog / BCD', value: '180 / 130 nm BCD', desc: 'Power management, drivers, sensor front-ends.'},
  {label: 'FPGA prototyping', value: 'Xilinx / Intel', desc: 'Early customer demos, software bring-up before tape-out.'},
  {label: 'Multi-project shuttle', value: 'Europractice, MOSIS, foundry direct', desc: 'Low-cost first-silicon for prototypes and small volumes.'},
  {label: 'Foundries', value: 'TSMC, GF, UMC, Tower, SMIC', desc: 'Selected per node, capacity, and IP availability.'},
];

export default function Capabilities(): ReactNode {
  return (
    <Layout
      title="Capabilities — Thoshini Electronics"
      description="Thoshini's full-flow capabilities: architecture, RTL, verification, analog/mixed-signal, physical design, DFT, tape-out, and silicon bring-up.">
      <section className={styles.stub} style={{paddingBottom: 40}}>
        <div
          className={styles.heroBanner}
          style={{backgroundImage: 'url(/img/stock/code-1.jpg)'}}
          aria-hidden="true"
        />
        <p className={styles.eyebrow}>Capabilities</p>
        <h1 className={styles.title}>Architecture to silicon, under one roof.</h1>
        <p className={styles.subtitle}>
          Specification, RTL, verification, analog, physical design, DFT, and
          bring-up &mdash; seven disciplines that have to agree for a chip to
          actually work. One team owns all of them.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>

      <section className={styles.processSection} style={{paddingTop: 40, paddingBottom: 80}}>
        <div className={styles.capRows}>
          {capabilities.map((c) => (
            <article
              key={c.title}
              className={[
                styles.capRow,
                c.reverse ? styles.reverse : '',
                c.alt ? styles.alt : '',
              ]
                .filter(Boolean)
                .join(' ')}>
              <div
                className={styles.capImage}
                style={{backgroundImage: `url(${c.image})`}}
                aria-hidden="true"
              />
              <div className={styles.capContent}>
                <p className={styles.capEyebrow}>{c.eyebrow}</p>
                <h2 className={styles.capTitle}>{c.title}</h2>
                <p className={styles.capDesc}>{c.desc}</p>
                <ul className={styles.capList}>
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.materialsSection}>
        <p className={styles.eyebrow}>EDA &amp; tooling</p>
        <h2 className={styles.title} style={{fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)'}}>
          The flows we actually use.
        </h2>
        <p className={styles.subtitle}>
          Licensed via startup and partner programs from the big three EDA
          vendors, plus the open tooling that lets us move fast on
          experiments.
        </p>
        <div className={styles.materialsGrid}>
          {tools.map((t) => (
            <div key={t.name} className={styles.materialCard}>
              <h4 className={styles.materialName}>{t.name}</h4>
              <p className={styles.materialMeta}>{t.meta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.standards}>
        <div className={styles.standardsHead}>
          <p className={styles.eyebrow}>Nodes &amp; foundries</p>
          <h2 className={styles.title} style={{fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)'}}>
            Mature nodes, not heroics.
          </h2>
        </div>
        <div className={styles.standardsGrid}>
          {nodes.map((n) => (
            <div key={n.label} className={styles.standardCard}>
              <p className={styles.standardLabel}>{n.label}</p>
              <p className={styles.standardValue}>{n.value}</p>
              <p className={styles.standardDesc}>{n.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.stub} style={{paddingTop: 80, paddingBottom: 100}}>
        <h2 className={styles.title}>Have a chip in mind?</h2>
        <p className={styles.subtitle}>
          Send a spec or a sketch. We will tell you what is feasible, what
          we&apos;d change, and what it costs.
        </p>
        <Link className={styles.cta} to="/schedule">Book a call</Link>
      </section>
    </Layout>
  );
}
