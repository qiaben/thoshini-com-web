import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Device from '@site/src/components/Device';
import Carousel from '@site/src/components/Carousel';
import {Icon, type IconName} from '@site/src/components/Icons';
import {DeskScene} from '@site/src/components/Scenes';
import {ModelGrid, ProductNav, toneOf} from '@site/src/components/Lineup';
import {company, tiers, type Tier} from '@site/src/data/company';

const finishName = {silver: 'Silver', graphite: 'Graphite', midnight: 'Midnight', titanium: 'Titanium'} as const;

const heroCopy: Record<Tier['id'], {headline: string; theme: 'dark' | 'light'}> = {
  basic: {headline: 'Private AI. Right on your desk.', theme: 'light'},
  pro: {headline: 'Twice the memory. Smarter answers.', theme: 'dark'},
  max: {headline: 'Near cloud-class AI. Fully on site.', theme: 'light'},
  ultra: {headline: 'Our most powerful AI Box. Ever.', theme: 'dark'},
};

/* ---------- chapter nav: every model with a small picture ---------- */
function ChapterNav() {
  return (
    <nav className="chapter-nav" aria-label="AI Box models">
      <div className="chapter-nav__inner">
        {tiers.map((t) => (
          <Link key={t.id} to={`#${t.id}`} className="chapter-nav__item">
            <Device width={64} tone={toneOf[t.id]} />
            <span>{t.name}</span>
            {(t.id === 'basic' || t.id === 'pro') && <em>New</em>}
          </Link>
        ))}
        <Link to="/ai-box" className="chapter-nav__item">
          <span className="chapter-nav__icon"><Icon name="compare" size={34} /></span>
          <span>Compare</span>
        </Link>
        <Link to="/ai-box#models" className="chapter-nav__item">
          <span className="chapter-nav__icon"><Icon name="chat" size={34} /></span>
          <span>AI models</span>
        </Link>
        <Link to="/reserve" className="chapter-nav__item">
          <span className="chapter-nav__icon"><Icon name="bag" size={34} /></span>
          <span>Reserve</span>
        </Link>
      </div>
    </nav>
  );
}

/* ---------- hero gallery: one slide per model ---------- */
function Slide({t}: {t: Tier}) {
  const c = heroCopy[t.id];
  return (
    <section id={t.id} className={`slide ${c.theme}`}>
      <div className="slide__text">
        <h2 className={`slide__name ${t.id === 'ultra' || t.id === 'pro' ? 'gradient' : ''}`}>{t.name}</h2>
        <p className="slide__headline">{c.headline}</p>
        <div className="btn-row">
          <Link className="btn-x" to={`/reserve?box=${t.id}`}>{t.price ? 'Reserve' : 'Get a quote'}</Link>
          <Link className="btn-x ghost" to="/ai-box">Learn more</Link>
        </div>
      </div>
      <div className="slide__img">
        <Device width={440} tone={toneOf[t.id]} glow={c.theme === 'dark'} />
      </div>
      <p className="slide__price">{t.price ? `From ${t.price}, setup included` : 'Built to order · price on request'}</p>
    </section>
  );
}

/* ---------- "Get to know" feature cards ---------- */
const features: {icon: IconName; eyebrow: string; title: string; theme: 'dark' | 'light' | 'blue' | 'purple'}[] = [
  {icon: 'lock', eyebrow: 'Privacy', title: 'Your data never has to leave the building.', theme: 'dark'},
  {icon: 'doc', eyebrow: 'Your documents', title: 'Ask your files anything. Get the answer and the source.', theme: 'light'},
  {icon: 'chat', eyebrow: 'Writing', title: 'Draft, summarize and rewrite in seconds.', theme: 'blue'},
  {icon: 'mic', eyebrow: 'Voice', title: 'Dictate. Listen. All on the box.', theme: 'light'},
  {icon: 'offline', eyebrow: 'Offline', title: 'Internet down? It keeps working.', theme: 'purple'},
  {icon: 'users', eyebrow: 'Teams', title: 'Everyone gets a login. Nobody pays per seat.', theme: 'light'},
];

/* ---------- "Why buy" cards ---------- */
const whyBuy: {icon: IconName; title: string; text: string; color: string}[] = [
  {icon: 'tag', title: 'Free reservation.', text: 'Reserve with no payment and no obligation.', color: '#0071e3'},
  {icon: 'help', title: 'Help choosing.', text: 'A short call to find the right size for your team.', color: '#a259ff'},
  {icon: 'shield', title: 'Pay on acceptance.', text: 'You pay only when you accept the written quote.', color: '#1a7f37'},
  {icon: 'calendar', title: 'Personal setup.', text: 'We load your documents and train your team.', color: '#e3008c'},
  {icon: 'truck', title: 'Arrives ready.', text: 'Delivered configured. Plug it in and sign in.', color: '#b25000'},
  {icon: 'refresh', title: 'Updates.', text: 'Software and AI model updates included.', color: '#0071e3'},
  {icon: 'wrench', title: 'Support plans.', text: 'Ongoing help when you need it. Ask us.', color: '#6e6e73'},
];

/* ---------- essentials (add-ons on request) ---------- */
const essentials: {icon: IconName; title: string; text: string}[] = [
  {icon: 'mic', title: 'Voice kit', text: 'Microphone and speaker for dictation and spoken answers.'},
  {icon: 'bolt', title: 'Battery backup', text: 'Keeps the box running through short power cuts.'},
  {icon: 'folder', title: 'Extra storage', text: 'More space for large document libraries.'},
  {icon: 'wrench', title: 'Support plan', text: 'Priority help and remote check-ups.'},
];

export default function Home() {
  return (
    <Layout
      title="AI Box – private AI in a box"
      description="The Thoshini AI Box runs AI models on a small device in your office or home. Four models, from $1,500. Your documents and questions never leave the building.">
      <ProductNav current="overview" />
      <main className="apple">
        <ChapterNav />

        <section className="intro">
          <h1 className="display">AI Box</h1>
        </section>

        <Carousel className="hero-gallery" dots count={tiers.length} autoplay={5000}>
          {tiers.map((t) => <Slide key={t.id} t={t} />)}
        </Carousel>

        <section className="band">
          <div className="container">
            <div className="row-head">
              <h2 className="headline left">Explore the lineup.</h2>
              <Link className="link-more" to="/ai-box">Compare all models</Link>
            </div>
          </div>
          <Carousel className="cards">
            {tiers.map((t) => (
              <div key={t.id} className="lineup-card">
                <div className="lineup-card__img"><Device width={250} tone={toneOf[t.id]} /></div>
                <div className="swatches"><span className={`swatch ${toneOf[t.id]}`} /></div>
                <p className="lineup-card__finish">{finishName[toneOf[t.id]]}</p>
                <p className="new-tag">{t.id === 'basic' || t.id === 'pro' ? 'New' : ''}</p>
                <h3>{t.name}</h3>
                <p className="lineup-card__tag">{t.tagline} {t.memory} memory, {t.largestModel.replace('Up to ', 'models up to ').replace(' parameters', '')}.</p>
                <p className="lineup-card__price">{t.price ? `From ${t.price}` : 'Price on request'}</p>
                <div className="lineup-card__cta">
                  <Link className="btn-x small" to={`/reserve?box=${t.id}`}>{t.price ? 'Reserve' : 'Get a quote'}</Link>
                  <Link className="link-more" to="/ai-box">Learn more</Link>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        <section className="band gray">
          <div className="container">
            <h2 className="headline left">Get to know AI Box.</h2>
          </div>
          <Carousel className="cards">
            {features.map((f) => (
              <div key={f.title} className={`feature-card ${f.theme}`}>
                <p className="feature-card__eyebrow">{f.eyebrow}</p>
                <h3>{f.title}</h3>
                <div className="feature-card__art"><Icon name={f.icon} size={150} /></div>
              </div>
            ))}
          </Carousel>
        </section>

        <section className="band">
          <div className="container">
            <h2 className="headline left">Why Thoshini is the best place to get AI Box.</h2>
          </div>
          <Carousel className="cards">
            {whyBuy.map((w) => (
              <div key={w.title} className="why-card">
                <span style={{color: w.color}}><Icon name={w.icon} size={44} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </Carousel>
        </section>

        <section className="lifestyle">
          <div className="container lifestyle__text">
            <h2 className="headline left">Fits right into your office.</h2>
            <p className="subhead left">Small enough for a desk or a shelf. Quiet, low power, and reachable from every computer on your network.</p>
            <Link className="link-more" to="/reserve">Reserve yours</Link>
          </div>
          <DeskScene />
        </section>

        <section className="band gray">
          <div className="container">
            <h2 className="headline left">AI Box essentials.</h2>
            <p className="subhead left">Add-ons, available on request.</p>
            <div className="essentials">
              {essentials.map((e) => (
                <div key={e.title} className="essential">
                  <div className="essential__art"><Icon name={e.icon} size={64} /></div>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                  <Link className="link-more" to="/contact">Ask us</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container">
            <h2 className="headline left">Works with what you have.</h2>
            <div className="pairs">
              <div className="pair">
                <div className="pair__art"><Icon name="laptop" size={80} /><span className="plus">+</span><Device width={110} tone="silver" /></div>
                <h3>AI Box and your computers</h3>
                <p>Windows, Mac or Chromebook. Open it in any web browser on your network, with no software to install.</p>
              </div>
              <div className="pair">
                <div className="pair__art"><Icon name="phone" size={80} /><span className="plus">+</span><Device width={110} tone="graphite" /></div>
                <h3>AI Box and your phone</h3>
                <p>Ask questions from your phone's browser while you're in the office.</p>
              </div>
              <div className="pair">
                <div className="pair__art"><Icon name="folder" size={80} /><span className="plus">+</span><Device width={110} tone="midnight" /></div>
                <h3>AI Box and your files</h3>
                <p>PDFs, Word documents and spreadsheets you choose are indexed so the AI can answer from them.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="band gray" id="models">
          <div className="container">
            <h2 className="headline left">The models they run.</h2>
            <p className="subhead left">
              Leading open models from Meta, Google, Microsoft, Alibaba, Mistral and DeepSeek, chosen and tuned for your work.
            </p>
            <ModelGrid />
          </div>
        </section>

        <section className="band dark">
          <div className="container">
            <h2 className="headline">Which AI Box is right for you?</h2>
            <p className="subhead">
              Open models are excellent at drafting, summarizing and answering from your documents, but not as capable as the
              largest cloud models for complex reasoning or coding. We will tell you before you buy whether a box fits your work.
            </p>
            <div className="btn-row">
              <Link className="btn-x" to="/reserve">Reserve</Link>
              <Link className="btn-x ghost" to="/ai-box">Compare all models</Link>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container">
            <p className="fine" style={{marginTop: 0}}>
              Reservations are free and carry no obligation. Prices include setup; the final price is confirmed in a written
              quote. Add-ons and support plans are quoted separately. Healthcare customers: keeping data on site helps, but
              compliance with HIPAA and similar rules also depends on your own policies and agreements. Questions:{' '}
              <a href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
