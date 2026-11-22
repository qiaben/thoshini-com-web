import Link from '@docusaurus/Link';
import {Page, Card} from '@site/src/components/Page';
import {box, models} from '@site/src/data/company';

export default function AiBox() {
  return (
    <Page
      title="AI Box specs and pricing"
      description="Specifications, AI models, privacy options and pricing for the Thoshini AI Box, a private AI appliance built on NVIDIA Jetson."
      eyebrow="Thoshini AI Box"
      heading="Specs, models and pricing"
      intro="A compact AI appliance built on NVIDIA Jetson. It boots straight into a private AI workspace your team opens in a web browser."
      actions={
        <>
          <Link className="btn-x" to="/reserve">Reserve a box</Link>
          <Link className="btn-x ghost" to="/contact">Ask a question</Link>
        </>
      }>
      <section className="section">
        <div className="grid-2">
          <Card title="Pricing" tone="blue">
            <p style={{fontSize: '2rem', fontWeight: 800, margin: '0.2rem 0 0.4rem'}}>{box.price}</p>
            <p>{box.priceNote}</p>
            <ul>
              <li>Configured box with AI models installed</li>
              <li>Your documents loaded and indexed</li>
              <li>User accounts for your team</li>
              <li>Remote setup and a training session</li>
              <li>Software and model updates</li>
            </ul>
            <p>Ongoing support plans and multi-box orders: <Link to="/contact">ask us</Link>.</p>
          </Card>
          <Card title="Hardware">
            <table className="facts">
              <tbody>
                <tr><th>Compute</th><td>{box.module}</td></tr>
                <tr><th>AI performance</th><td>{box.aiPerformance}</td></tr>
                <tr><th>Memory</th><td>{box.memory}</td></tr>
                <tr><th>Storage</th><td>{box.storage}</td></tr>
                <tr><th>Network</th><td>{box.network}</td></tr>
                <tr><th>Power</th><td>{box.power}</td></tr>
                <tr><th>Enclosure</th><td>{box.enclosure}</td></tr>
                <tr><th>Capacity</th><td>{box.users}</td></tr>
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      <section className="section">
        <h2>AI models it runs</h2>
        <p className="lead">
          Open-weight models run directly on the box. We choose and tune them for your work; you can switch models at any time.
        </p>
        <Card title="Model options" tone="teal">
          <table className="facts">
            <tbody>
              {models.map((m) => (
                <tr key={m.size}>
                  <th>{m.size}</th>
                  <td>
                    {m.examples}
                    <br />
                    <span style={{fontWeight: 400, color: 'var(--slate)'}}>{m.speed} · {m.bestFor}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>

      <section className="section">
        <div className="grid-2">
          <Card title="Privacy and internet access" tone="slate">
            <ul>
              <li><strong>Private by default</strong>: AI processing runs on the box. Web search is off.</li>
              <li><strong>Optional web search</strong>: turn it on for current information. When it is on, search terms are sent to the internet; the box shows a clear on/off switch.</li>
              <li><strong>Optional cloud boost</strong>: send a hard question to a large cloud model only when you choose to, for each question.</li>
              <li><strong>Remote support</strong> only with your permission, and you can switch it off.</li>
            </ul>
          </Card>
          <Card title="What it is good at, and what it is not" tone="amber">
            <ul>
              <li><strong>Strong</strong>: answering from your documents, drafting, summarizing, rewriting, dictation.</li>
              <li><strong>Fair</strong>: general questions and simple analysis.</li>
              <li><strong>Not a fit</strong>: complex multi-step reasoning, large coding projects, many users at once, or anything that needs today's news with web search off.</li>
              <li>Need more? Larger boxes with 16–64 GB of memory are available on request.</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="notice">
          <strong>Healthcare and regulated data.</strong> Keeping data on site helps, but compliance with HIPAA or other
          rules also depends on your own policies, access controls and agreements. We will walk through the setup with you;
          we do not represent the box alone as making your practice compliant.
        </div>
      </section>
    </Page>
  );
}
