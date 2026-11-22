import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {Lineup, ModelGrid} from '@site/src/components/Lineup';
import {company} from '@site/src/data/company';

const uses = [
  {title: 'Ask your own documents.', text: 'Load policies, manuals and contracts. Ask in plain English and get answers that point back to the source file.'},
  {title: 'Draft and summarize.', text: 'Emails, letters, notes and long reports, written and condensed in seconds.'},
  {title: 'Built for healthcare and dental.', text: 'Summarize visit notes and draft patient and insurance letters, with patient information staying on site.'},
  {title: 'Legal, accounting, small business.', text: 'Review client files and search past work without sending client data to an outside AI service.'},
  {title: 'Talk to it.', text: 'Optional dictation and spoken answers, with speech models that run on the box.'},
  {title: 'For the home, too.', text: 'A private assistant for the household: homework help, documents and questions, with no account.'},
];

export default function Home() {
  return (
    <Layout
      title="Private AI in a box"
      description="The Thoshini AI Box runs AI models on a small device in your office or home. Your documents and questions never leave the building.">
      <main>
        <section className="band">
          <div className="container">
            <div className="eyebrow-x">New from Thoshini LLC</div>
            <h1 className="display">AI Box</h1>
            <p className="subhead">Private AI that lives on your desk, not in the cloud.</p>
            <div className="btn-row">
              <Link className="btn-x" to="/reserve">Reserve</Link>
              <Link className="link-more" to="/ai-box">Compare models</Link>
            </div>
            <div className="device-stage">
              <div className="device">
                <span className="device-label">THOSHINI</span>
              </div>
            </div>
          </div>
        </section>

        <section className="band gray">
          <div className="container">
            <h2 className="headline">Your data stays with you.</h2>
            <p className="subhead">
              Questions, documents and answers are processed on the box. No per-user subscriptions. It keeps working when the
              internet is down.
            </p>
            <div className="tiles">
              <div className="tile">
                <div className="big">Private</div>
                <h3>By default.</h3>
                <p>AI runs on the box. Web search and cloud help are optional switches you control.</p>
              </div>
              <div className="tile">
                <div className="big">$0</div>
                <h3>Monthly AI subscription.</h3>
                <p>One purchase. Everyone on your network can use it.</p>
              </div>
              <div className="tile">
                <div className="big">Done</div>
                <h3>For you.</h3>
                <p>We set it up, load your documents and show your team how to use it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container">
            <h2 className="headline">Which AI Box is right for you?</h2>
            <p className="subhead">Four sizes. The bigger the box, the bigger and smarter the AI models it can run.</p>
            <Lineup />
          </div>
        </section>

        <section className="band gray">
          <div className="container">
            <h2 className="headline">The models it runs.</h2>
            <p className="subhead">
              Leading open models from Meta, Google, Microsoft, Alibaba, Mistral and DeepSeek. We pick and tune them for your work.
            </p>
            <ModelGrid />
          </div>
        </section>

        <section className="band">
          <div className="container">
            <h2 className="headline">Made for real work.</h2>
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
            <h2 className="headline">Honest about what it does.</h2>
            <p className="subhead">
              Open models on a box are excellent at drafting, summarizing and answering from your own documents. They are not as
              capable as the largest cloud models for complex reasoning or coding. We will tell you before you buy whether it
              fits your work.
            </p>
            <div className="btn-row">
              <Link className="btn-x" to="/reserve">Reserve an AI Box</Link>
              <Link className="link-more" to="/contact">Ask a question</Link>
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
