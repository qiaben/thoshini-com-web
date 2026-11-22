import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Device from '@site/src/components/Device';
import {Lineup, ModelGrid, ProductNav, toneOf} from '@site/src/components/Lineup';
import {company, tiers, type Tier} from '@site/src/data/company';

// One full-width "hero tile" per product, alternating dark and light, like a phone lineup page.
const heroCopy: Record<Tier['id'], {headline: string; theme: 'dark' | 'light'}> = {
  basic: {headline: 'Private AI. Right on your desk.', theme: 'light'},
  pro: {headline: 'Twice the memory. Smarter answers.', theme: 'dark'},
  max: {headline: 'Near cloud-class AI. Fully on site.', theme: 'light'},
  ultra: {headline: 'Our most powerful AI Box. Ever.', theme: 'dark'},
};

function ProductHero({t}: {t: Tier}) {
  const c = heroCopy[t.id];
  return (
    <section className={`hero-tile ${c.theme} ${t.id}`}>
      <div className="hero-tile__text">
        <h2 className={`hero-tile__name ${t.id === 'ultra' || t.id === 'pro' ? 'gradient' : ''}`}>{t.name}</h2>
        <p className="hero-tile__headline">{c.headline}</p>
        <div className="btn-row">
          <Link className="btn-x" to={`/reserve?box=${t.id}`}>{t.price ? 'Reserve' : 'Get a quote'}</Link>
          <Link className="btn-x ghost" to="/ai-box">Learn more</Link>
        </div>
        <p className="hero-tile__price">{t.price ? `From ${t.price}, setup included` : 'Built to order · price on request'}</p>
      </div>
      <div className="hero-tile__img">
        <Device width={t.id === 'ultra' ? 520 : t.id === 'max' ? 490 : t.id === 'pro' ? 460 : 430} tone={toneOf[t.id]} glow={c.theme === 'dark'} />
      </div>
      <ul className="hero-tile__facts">
        <li><strong>{t.memory}</strong>memory</li>
        <li><strong>{t.largestModel.replace('Up to ', '').replace(' parameters', '')}</strong>largest model</li>
        <li><strong>{t.users.replace(' at a time', '')}</strong>people at once</li>
      </ul>
    </section>
  );
}

const highlights = [
  {big: 'On site', title: 'Your data stays in the building.', text: 'Questions, documents and answers are processed on the box. Web search is off until you turn it on.', wide: true, dark: true},
  {big: '$0', title: 'Per month for AI.', text: 'One purchase. Everyone on your network can use it.'},
  {big: '4', title: 'Sizes, 8 to 128 GB.', text: 'From a small office to a busy clinic.'},
  {big: '70B', title: 'Class models on Ultra.', text: 'The largest open models you can run offline.'},
  {big: 'Done', title: 'For you.', text: 'We set it up, load your documents and train your team.'},
];

const uses = [
  {title: 'Ask your own documents.', text: 'Policies, manuals and contracts, answered in plain English with the source file.'},
  {title: 'Draft and summarize.', text: 'Emails, letters, notes and long reports in seconds.'},
  {title: 'Healthcare and dental.', text: 'Visit notes, patient and insurance letters, with patient data on site.'},
  {title: 'Legal and accounting.', text: 'Review client files without sending them to an outside AI service.'},
  {title: 'Talk to it.', text: 'Optional dictation and spoken answers, running on the box.'},
  {title: 'At home.', text: 'A private family assistant with no account or subscription.'},
];

export default function Home() {
  return (
    <Layout
      title="AI Box – private AI in a box"
      description="The Thoshini AI Box runs AI models on a small device in your office or home. Four sizes, from $1,500. Your documents and questions never leave the building.">
      <ProductNav current="overview" />
      <main className="apple">
        {tiers.map((t) => <ProductHero key={t.id} t={t} />)}

        <section className="band">
          <div className="container">
            <h2 className="headline left">Get the highlights.</h2>
            <div className="bento">
              {highlights.map((h) => (
                <div key={h.title} className={`bento__tile ${h.wide ? 'wide' : ''} ${h.dark ? 'dark' : ''}`}>
                  <div className="bento__big gradient">{h.big}</div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band gray">
          <div className="container">
            <h2 className="headline left">Explore the lineup.</h2>
            <Lineup />
          </div>
        </section>

        <section className="band" id="models">
          <div className="container">
            <h2 className="headline left">The models they run.</h2>
            <p className="subhead left">
              Leading open models from Meta, Google, Microsoft, Alibaba, Mistral and DeepSeek, chosen and tuned for your work.
            </p>
            <ModelGrid />
          </div>
        </section>

        <section className="band gray">
          <div className="container">
            <h2 className="headline left">Made for real work.</h2>
            <div className="tiles">
              {uses.map((u) => (
                <div className="tile" key={u.title}>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </div>
              ))}
            </div>
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
              quote. Healthcare customers: keeping data on site helps, but compliance with HIPAA and similar rules also depends
              on your own policies and agreements. Questions: <a href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
