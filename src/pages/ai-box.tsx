import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {Lineup, ModelGrid, SpecTable} from '@site/src/components/Lineup';

export default function AiBox() {
  return (
    <Layout
      title="Compare AI Box models"
      description="Compare the Thoshini AI Box, Pro, Max and Ultra: prices, NVIDIA Jetson hardware, memory and the AI models each one runs.">
      <main>
        <section className="band">
          <div className="container">
            <h1 className="headline">Compare AI Box models.</h1>
            <p className="subhead">Every AI Box is set up for you, keeps your data on site and runs without a subscription.</p>
            <Lineup detailed />
          </div>
        </section>

        <section className="band gray">
          <div className="container">
            <h2 className="headline">Which AI models each box runs.</h2>
            <p className="subhead">More memory means bigger models, and bigger models give better answers.</p>
            <ModelGrid />
          </div>
        </section>

        <section className="band">
          <div className="container">
            <h2 className="headline">Tech specs.</h2>
            <SpecTable />
          </div>
        </section>

        <section className="band gray">
          <div className="container">
            <h2 className="headline">Private by design.</h2>
            <div className="tiles four">
              <div className="tile">
                <h3>On the box.</h3>
                <p>AI processing runs on the device. Web search is off until you turn it on.</p>
              </div>
              <div className="tile">
                <h3>Web search, your choice.</h3>
                <p>Turn it on for current information. When it is on, search terms go to the internet, and the box shows it clearly.</p>
              </div>
              <div className="tile">
                <h3>Cloud boost, per question.</h3>
                <p>Send a hard question to a large cloud model only when you choose to.</p>
              </div>
              <div className="tile">
                <h3>Support with permission.</h3>
                <p>Remote help only when you allow it, and you can switch it off.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container">
            <h2 className="headline">What's included.</h2>
            <div className="tiles">
              <div className="tile"><h3>Configured box.</h3><p>AI models chosen and installed for your work.</p></div>
              <div className="tile"><h3>Your documents.</h3><p>Loaded and indexed so the AI can answer from them.</p></div>
              <div className="tile"><h3>Team accounts.</h3><p>A login for each person, opened in any web browser.</p></div>
              <div className="tile"><h3>Setup and training.</h3><p>Remote setup and a training session for your team.</p></div>
              <div className="tile"><h3>Updates.</h3><p>Software and model updates.</p></div>
              <div className="tile"><h3>Support plans.</h3><p>Ongoing support and multi-box orders: <Link to="/contact">ask us</Link>.</p></div>
            </div>
            <p className="fine">
              Healthcare and regulated data: keeping data on site helps, but compliance with HIPAA and similar rules also depends on
              your own policies, access controls and agreements. We do not represent the box alone as making a practice compliant.
            </p>
            <div className="btn-row">
              <Link className="btn-x" to="/reserve">Reserve</Link>
              <Link className="link-more" to="/contact">Ask a question</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
