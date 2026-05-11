import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HeroVisual(): ReactNode {
  return (
    <div className={styles.heroVisual} aria-hidden="true">
      <div className={styles.blueprint}>
        <div className={styles.blueprintMain}>
          <div className={styles.blueprintHeader}>
            <div className={styles.blueprintTitle}>TSV-01 · Mixed-Signal SoC</div>
            <div className={styles.blueprintMeta}>Node: 65nm · Package: QFN-48</div>
          </div>
          <div className={styles.blueprintCanvas}>
            <span className={styles.dimensionLabel}>5.6 × 5.6 mm</span>
            <span className={styles.shapeCircle} />
            <span className={styles.shapeBracket} />
            <span className={styles.shapeSquare} />
            <span className={styles.dimensionLabel}>1.2M gates</span>
          </div>
        </div>
        <aside className={styles.specs}>
          <div className={styles.specsTitle}>Tape-out spec</div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>Process</span>
            <span className={styles.specVal}>65nm mixed-signal</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>Verification</span>
            <span className={styles.specVal}>UVM, 98% cov.</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>Methodology</span>
            <span className={styles.specVal}>Sign-off STA</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>Foundry</span>
            <span className={styles.specVal}>Multi-project shuttle</span>
          </div>
          <div className={styles.specRow}>
            <span className={styles.specKey}>Origin</span>
            <span className={styles.specVal}>Coimbatore, India</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Hero(): ReactNode {
  return (
    <section className={styles.hero}>
      <span className={styles.heroBadge}>Fabless · VLSI · Mixed-signal</span>
      <h1 className={styles.heroTitle}>
        We design chips.{' '}
        <span className={styles.gradientText}>Foundries build them.</span>
      </h1>
      <p className={styles.heroSubtitle}>
        Thoshini is a fabless semiconductor company. We architect, design, and
        verify integrated circuits in Coimbatore, then tape out to global
        foundries. No fab. No factory. Just silicon, done right.
      </p>
      <div className={styles.heroCtas}>
        <Link className={styles.primaryCta} to="/schedule">
          Book a call
        </Link>
        <Link className={styles.linkCta} to="/what-we-build">
          See what we build ›
        </Link>
      </div>
      <HeroVisual />
    </section>
  );
}

type Tile = {
  eyebrow: string;
  title: string;
  subtitle: string;
  link: string;
  linkLabel: string;
  image: string;
  full?: boolean;
};

function ProductTile({tile}: {tile: Tile}): ReactNode {
  const className = [styles.tile, styles.tileLight, tile.full ? styles.tileFull : '']
    .filter(Boolean)
    .join(' ');
  return (
    <article className={className}>
      <div
        className={styles.tileImage}
        style={{backgroundImage: `url(${tile.image})`}}
      />
      <div className={styles.tileScrim} />
      <span className={styles.tileEyebrow}>{tile.eyebrow}</span>
      <h2 className={styles.tileTitle}>{tile.title}</h2>
      <p className={styles.tileSubtitle}>{tile.subtitle}</p>
      <div className={styles.tileSpacer} />
      <Link className={styles.tileLink} to={tile.link}>
        {tile.linkLabel} ›
      </Link>
    </article>
  );
}

function ProductTiles(): ReactNode {
  const tiles: Tile[] = [
    {
      eyebrow: 'Architecture',
      title: 'From product idea to tape-out plan.',
      subtitle:
        'Spec, partitioning, node selection, IP strategy, and a build plan that respects budget, schedule, and silicon reality.',
      link: '/capabilities',
      linkLabel: 'Learn more',
      image: '/img/stock/code-2.jpg',
    },
    {
      eyebrow: 'RTL & Verification',
      title: 'Verilog, SystemVerilog, UVM.',
      subtitle:
        'RTL design and constrained-random verification with UVM. Coverage-driven sign-off, not bug-hunting in silicon.',
      link: '/capabilities',
      linkLabel: 'Learn more',
      image: '/img/stock/code-1.jpg',
    },
    {
      eyebrow: 'End to end',
      title: 'Architecture to packaged part, one team.',
      subtitle:
        'Specification, RTL, verification, physical design, DFT, foundry tape-out, OSAT packaging, and silicon bring-up. No handoffs lost in translation.',
      link: '/what-we-build',
      linkLabel: 'See what we build',
      image: '/img/stock/wafer-1.jpg',
      full: true,
    },
    {
      eyebrow: 'Physical design',
      title: 'Floorplan, place, route, sign-off.',
      subtitle:
        'Timing closure, power, IR drop, and DRC/LVS sign-off for mature nodes from 180nm down to 28nm.',
      link: '/capabilities',
      linkLabel: 'Learn more',
      image: '/img/stock/chip-1.jpg',
    },
    {
      eyebrow: 'Bring-up',
      title: 'First silicon, first boot, first sale.',
      subtitle:
        'Post-silicon validation, characterisation, and reference boards so the customer can integrate on day one.',
      link: '/capabilities',
      linkLabel: 'Learn more',
      image: '/img/stock/lab-1.jpg',
    },
  ];

  return (
    <section className={styles.tileSection}>
      <div className={styles.tileGrid}>
        {tiles.map((t) => (
          <ProductTile key={t.title} tile={t} />
        ))}
      </div>
    </section>
  );
}

function HeroStrip(): ReactNode {
  return (
    <section
      className={styles.heroStrip}
      style={{backgroundImage: 'url(/img/stock/pcb-1.jpg)'}}
      aria-label="Silicon, designed in Coimbatore.">
      <div className={styles.heroStripCaption}>
        <h3 className={styles.heroStripTitle}>
          Indian engineering talent. Global semiconductor customers.
        </h3>
        <span className={styles.heroStripMeta}>The design house</span>
      </div>
    </section>
  );
}

function Gallery(): ReactNode {
  const items = [
    {src: '/img/stock/chip-2.jpg', caption: 'Die microscopy', cls: 'tall'},
    {src: '/img/stock/pcb-2.jpg', caption: 'Reference board'},
    {src: '/img/stock/lab-2.jpg', caption: 'Bring-up bench'},
    {src: '/img/stock/code-1.jpg', caption: 'RTL & verification'},
    {src: '/img/stock/wafer-1.jpg', caption: 'Wafer-level test', cls: 'wide'},
    {src: '/img/stock/workspace-1.jpg', caption: 'Design workspace'},
  ];
  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryHead}>
        <p className={styles.sectionEyebrow}>Inside the design house</p>
        <h2 className={styles.sectionTitle}>
          Real silicon.{' '}
          <span className={styles.gradientText}>Real engineers.</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          A look at the work — the screens where RTL gets written, the benches
          where first silicon gets characterised, and the boards that prove it
          all works.
        </p>
      </div>
      <div className={styles.galleryGrid}>
        {items.map((it) => (
          <div
            key={it.src}
            className={`${styles.galleryItem} ${it.cls ? styles[it.cls] : ''}`}
            style={{backgroundImage: `url(${it.src})`}}
            role="img"
            aria-label={it.caption}>
            <span className={styles.galleryCaption}>{it.caption}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Capabilities(): ReactNode {
  const items = [
    {
      image: '/img/stock/code-2.jpg',
      title: 'Architecture & spec',
      desc: 'Product spec, block partitioning, node and process selection, IP strategy.',
    },
    {
      image: '/img/stock/code-1.jpg',
      title: 'RTL design',
      desc: 'Verilog and SystemVerilog for digital and mixed-signal blocks.',
    },
    {
      image: '/img/stock/chip-1.jpg',
      title: 'Functional verification',
      desc: 'UVM, constrained-random, coverage-driven. Verification you can sign off on.',
    },
    {
      image: '/img/stock/lab-1.jpg',
      title: 'Analog & mixed-signal',
      desc: 'Analog layout, mixed-signal integration, and post-layout simulation.',
    },
    {
      image: '/img/stock/chip-2.jpg',
      title: 'Physical design',
      desc: 'Floorplan, place-and-route, timing closure, IR drop, DRC/LVS sign-off.',
    },
    {
      image: '/img/stock/code-1.jpg',
      title: 'DFT',
      desc: 'Scan insertion, ATPG, BIST, and boundary scan for production test.',
    },
    {
      image: '/img/stock/wafer-1.jpg',
      title: 'Tape-out & shuttle',
      desc: 'GDSII sign-off, mask preparation, and shuttle or full-reticle tape-out coordination.',
    },
    {
      image: '/img/stock/pcb-2.jpg',
      title: 'Packaging & test',
      desc: 'OSAT package selection, test program development, and qualification.',
    },
    {
      image: '/img/stock/lab-2.jpg',
      title: 'Silicon bring-up',
      desc: 'First-silicon validation, characterisation, and reference board development.',
    },
  ];

  return (
    <section className={styles.modulesSection}>
      <p className={styles.sectionEyebrow}>What we do</p>
      <h2 className={styles.sectionTitle}>
        One design house.{' '}
        <span className={styles.gradientText}>Every step covered.</span>
      </h2>
      <p className={styles.sectionSubtitle}>
        We own the chip end to end, architecture through bring-up. A single
        team carries the part from spec to packaged silicon, with no handoffs
        lost between vendors.
      </p>
      <div className={styles.moduleGrid}>
        {items.map((m) => (
          <div key={m.title} className={styles.module}>
            <div
              className={styles.moduleImage}
              style={{backgroundImage: `url(${m.image})`}}
            />
            <div className={styles.moduleBody}>
              <h3 className={styles.moduleTitle}>{m.title}</h3>
              <p className={styles.moduleDesc}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Closing(): ReactNode {
  return (
    <section className={styles.closingSection}>
      <h2 className={styles.closingTitle}>
        Got a chip idea?{' '}
        <span className={styles.gradientText}>Let&apos;s build it.</span>
      </h2>
      <p className={styles.closingSubtitle}>
        Send us a product spec, an architecture sketch, or just a description
        of what the silicon needs to do. We&apos;ll come back with a
        feasibility note and an honest plan.
      </p>
      <div className={styles.closingCtas}>
        <Link className={styles.primaryCta} to="/schedule">
          Book a call
        </Link>
        <Link className={styles.linkCta} to="/contact">
          Email a spec ›
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Thoshini VLSI — Fabless semiconductor design"
      description="Thoshini VLSI Pvt Ltd is a fabless semiconductor company in Coimbatore. We design chips end to end: architecture, RTL, verification, physical design, tape-out, and bring-up.">
      <div className={styles.page}>
        <Hero />
        <HeroStrip />
        <ProductTiles />
        <Capabilities />
        <Gallery />
        <Closing />
      </div>
    </Layout>
  );
}
