import Link from '@docusaurus/Link';
import {Page, Card} from '@site/src/components/Page';
import {box, company} from '@site/src/data/company';

const useCases = [
  {
    title: 'Ask your own documents',
    tone: undefined,
    items: ['Load policies, manuals, contracts and SOPs', 'Ask questions in plain English', 'Answers point back to the source file', 'Nothing is uploaded to the cloud'],
  },
  {
    title: 'Private office assistant',
    tone: 'teal' as const,
    items: ['Draft emails, letters and replies', 'Summarize long documents and notes', 'Rewrite and proofread', 'ChatGPT-style chat in any browser on your network'],
  },
  {
    title: 'Healthcare & dental offices',
    tone: 'blue' as const,
    items: ['Summarize visit notes and correspondence', 'Draft patient and insurance letters', 'Front-desk and billing help', 'Patient information stays on site'],
  },
  {
    title: 'Legal, accounting & small business',
    tone: 'amber' as const,
    items: ['Review and summarize client files', 'Search past work and templates', 'Keep client data off third-party AI services', 'No per-user AI subscriptions'],
  },
  {
    title: 'Voice & dictation',
    tone: 'slate' as const,
    items: ['Speech-to-text dictation', 'Spoken answers with text-to-speech', 'Works without an internet connection', 'Optional add-on'],
  },
  {
    title: 'Home & family',
    tone: undefined,
    items: ['A private assistant for the household', 'Homework and learning help', 'Organize household documents', 'No account or subscription required'],
  },
];

export default function Home() {
  return (
    <Page
      title="Private AI in a box"
      description="The Thoshini AI Box runs AI models on a small device in your office or home. Your documents and questions never leave the building."
      eyebrow="Private · Offline · No subscription"
      heading="Your own private AI, running in a box on your desk"
      intro="The Thoshini AI Box runs AI models locally. Chat with it, ask questions about your own documents and draft letters, while your data stays in your office. We set it up, load your files and support it."
      actions={
        <>
          <Link className="btn-x" to="/reserve">Reserve a box</Link>
          <Link className="btn-x ghost" to="/ai-box">See specs &amp; pricing</Link>
        </>
      }>
      <section className="section">
        <h2>What it does</h2>
        <div className="grid">
          {useCases.map((s) => (
            <Card key={s.title} title={s.title} tone={s.tone}>
              <ul>
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <Card title="Why a box instead of a cloud AI service">
            <ul>
              <li><strong>Your data stays with you</strong>: questions, documents and answers are processed on the box, not on someone else's servers.</li>
              <li><strong>No per-user subscriptions</strong>: one purchase, everyone on your network can use it.</li>
              <li><strong>Works offline</strong>: keeps running when the internet is down.</li>
              <li><strong>Done for you</strong>: we install it, load your documents and show your team how to use it.</li>
            </ul>
          </Card>
          <Card title="At a glance" tone="blue">
            <table className="facts">
              <tbody>
                <tr><th>Price</th><td>{box.price}, setup included</td></tr>
                <tr><th>Compute</th><td>{box.module}</td></tr>
                <tr><th>AI performance</th><td>{box.aiPerformance}</td></tr>
                <tr><th>Storage</th><td>{box.storage}</td></tr>
                <tr><th>Users</th><td>{box.users}</td></tr>
                <tr><th>Internet</th><td>Not required. Optional web search, off by default</td></tr>
              </tbody>
            </table>
            <p style={{marginTop: '0.8rem'}}>
              <Link to="/ai-box">Full specs, models and what is included →</Link>
            </p>
          </Card>
        </div>
      </section>

      <section className="section">
        <h2>How it works</h2>
        <div className="grid">
          <Card title="1. Tell us what you need" tone="slate">
            <p>A short call about your team, your documents and the jobs you want AI to help with.</p>
          </Card>
          <Card title="2. We set it up" tone="teal">
            <p>We configure the box, choose the right AI models and load your documents before it ships or on site.</p>
          </Card>
          <Card title="3. Plug it in and use it" tone="blue">
            <p>Connect it to your network. Your team opens it in a web browser, with their own logins.</p>
          </Card>
          <Card title="4. We keep it running" tone="amber">
            <p>Software and model updates, and help when you need it.</p>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <Card title="What to expect" tone="slate">
            <p>
              The AI Box runs compact open models (up to about 8 billion parameters). They are very good at drafting,
              summarizing and answering from your own documents, but they are not as capable as the largest cloud
              models for complex reasoning or coding. We will tell you before you buy whether it fits your use.
            </p>
          </Card>
          <Card title="Reserve one" tone="teal">
            <p>
              Reservations are free and carry no obligation. We will contact you to confirm your needs, the price and a
              delivery date.
            </p>
            <Link className="btn-x navy" to="/reserve">Reserve a box</Link>
          </Card>
        </div>
      </section>

      <p className="lead">
        Questions? Email <a href={`mailto:${company.email}`}>{company.email}</a> or use the <Link to="/contact">contact form</Link>.
      </p>
    </Page>
  );
}
