import Link from '@docusaurus/Link';
import {Page, Card} from '@site/src/components/Page';
import {company} from '@site/src/data/company';

const services = [
  {
    title: 'Facility Maintenance',
    tone: undefined,
    items: ['Facilities support and building operations', 'Preventive maintenance programs', 'Pressure washing, gutters and exterior care', 'Building condition checks'],
  },
  {
    title: 'Grounds & Landscaping',
    tone: 'teal' as const,
    items: ['Grounds and landscape maintenance', 'Planting, mulching and irrigation checks', 'Snow removal and de-icing', 'Site preparation and clearing'],
  },
  {
    title: 'Repairs & Renovation',
    tone: 'blue' as const,
    items: ['Finish carpentry and trim', 'Drywall, painting and building finishes', 'Masonry and minor concrete repair', 'Remodeling and tenant improvements'],
  },
  {
    title: 'Building Systems',
    tone: 'amber' as const,
    items: ['Electrical, plumbing and HVAC (licensed partners)', 'Roofing repair and replacement (licensed partners)', 'Building equipment installation', 'Service calls and work orders'],
  },
  {
    title: 'Equipment & Appliance Repair',
    tone: 'slate' as const,
    items: ['Appliance repair and maintenance', 'Commercial equipment repair', 'Electronic equipment repair', 'Grounds and garden equipment repair'],
  },
  {
    title: 'Materials & Equipment Supply',
    tone: undefined,
    items: ['Building materials and hardware', 'HVAC, plumbing and electrical supplies', 'Appliances and electronics', 'Furniture and furnishings'],
  },
];

export default function Home() {
  return (
    <Page
      title="Building maintenance, repair and supply"
      description="Thoshini LLC is a small business providing building maintenance, repair, grounds and materials supply services to federal, state, local and commercial clients."
      eyebrow="Small Business · Women-Owned · SAM Registered"
      heading="Building maintenance, repair and supply from one dependable partner"
      intro="Thoshini LLC keeps facilities running: maintenance, grounds, repairs and renovation, plus the building materials, equipment and supplies behind them. One point of contact from quote to close-out."
      actions={
        <>
          <Link className="btn-x" to="/contact">Request a quote</Link>
          <Link className="btn-x ghost" to="/government">Government buyers</Link>
        </>
      }>
      <section className="section">
        <h2>What we do</h2>
        <div className="grid">
          {services.map((s) => (
            <Card key={s.title} title={s.title} tone={s.tone}>
              <ul>
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p style={{marginTop: '1rem'}}>
          <Link to="/services">See all services →</Link> · <Link to="/supply">Supply catalog →</Link>
        </p>
      </section>

      <section className="section">
        <div className="grid-2">
          <Card title="How we work">
            <ul>
              <li><strong>Service plus supply</strong>: we perform the work and source the materials, so there is one vendor to manage.</li>
              <li><strong>Vetted partner network</strong>: licensed and insured specialists for regulated trades.</li>
              <li><strong>Documented quality control</strong>: checklists, photo close-out and prompt response to issues.</li>
              <li><strong>Straightforward pricing</strong>: firm-fixed-price quotes with clear inclusions.</li>
            </ul>
          </Card>
          <Card title="Contracting at a glance" tone="blue">
            <table className="facts">
              <tbody>
                <tr><th>Legal name</th><td>{company.legalName}</td></tr>
                <tr><th>UEI</th><td>{company.uei}</td></tr>
                <tr><th>CAGE</th><td>{company.cage}</td></tr>
                <tr><th>SAM.gov status</th><td>{company.samStatus}</td></tr>
                <tr><th>Business type</th><td>Small Business, Women-Owned</td></tr>
                <tr><th>Payment</th><td>GPC card, EFT, Net 30</td></tr>
              </tbody>
            </table>
            <p style={{marginTop: '0.8rem'}}>
              <Link to="/government">Capabilities, NAICS and ordering details →</Link>
            </p>
          </Card>
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <Card title="Service providers & suppliers" tone="teal">
            <p>
              We work with reliable trades and distributors: landscapers, carpenters, painters, masons, roofers,
              licensed electricians, plumbers and HVAC technicians, and building-material suppliers. Join our network
              to receive work and supply opportunities.
            </p>
            <Link className="btn-x navy" to="/partners">Become a partner</Link>
          </Card>
          <Card title="Stay in touch by text" tone="slate">
            <p>
              Customers and partners can opt in to receive quote, scheduling and order updates by SMS. Verify your
              mobile number in under a minute.
            </p>
            <Link className="btn-x navy" to="/sms-consent">Opt in to text updates</Link>
          </Card>
        </div>
      </section>
    </Page>
  );
}
