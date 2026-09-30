import Link from '@docusaurus/Link';
import {Page, Card} from '@site/src/components/Page';
import {company, naicsGroups, pscCodes} from '@site/src/data/company';

export default function Government() {
  return (
    <Page
      title="Government Contracting"
      description="Thoshini LLC capability statement: UEI, CAGE, NAICS codes, PSC codes and ordering information for government buyers."
      eyebrow="Capability Statement"
      heading="For contracting officers and government buyers"
      intro="Thoshini LLC is an active SAM.gov registrant and small business, ready to support simplified acquisitions, purchase card orders, subcontracts and set-aside requirements."
      actions={
        <>
          <a className="btn-x" href={`mailto:${company.email}?subject=Government%20requirement`}>Email a requirement</a>
          <Link className="btn-x ghost" to="/contact">Contact form</Link>
        </>
      }>
      <section className="section">
        <div className="grid-2">
          <Card title="Company data">
            <table className="facts">
              <tbody>
                <tr><th>Legal name</th><td>{company.legalName}</td></tr>
                <tr><th>UEI</th><td>{company.uei}</td></tr>
                <tr><th>CAGE code</th><td>{company.cage}</td></tr>
                <tr><th>SAM.gov registration</th><td>{company.samStatus} through {company.samExpires}</td></tr>
                <tr><th>Incorporated</th><td>{company.stateOfIncorporation}</td></tr>
                <tr><th>Business types</th><td>{company.businessTypes.join(', ')}</td></tr>
                <tr>
                  <th>Mailing address</th>
                  <td>{company.address.map((l) => <div key={l}>{l}</div>)}</td>
                </tr>
                <tr><th>Email</th><td><a href={`mailto:${company.email}`}>{company.email}</a></td></tr>
              </tbody>
            </table>
          </Card>
          <Card title="Core capabilities" tone="blue">
            <ul>
              <li>Facilities support and preventive building maintenance</li>
              <li>Grounds, landscaping and snow removal</li>
              <li>Repairs, finish carpentry, painting, masonry and remodeling</li>
              <li>Electrical, plumbing, HVAC and roofing through licensed partners</li>
              <li>Appliance, equipment and electronics repair</li>
              <li>Building materials, hardware, HVAC/plumbing supplies, appliances and furniture</li>
            </ul>
            <h4 style={{marginTop: '1rem'}}>Differentiators</h4>
            <ul>
              <li>Service and supply from one vendor: we do the work and source the materials</li>
              <li>Fast quote turnaround on RFQs and simplified acquisitions</li>
              <li>Documented quality control with photo close-out</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="section">
        <h2>Ordering & payment</h2>
        <div className="grid">
          <Card title="Ways to buy" tone="teal">
            <ul>
              <li>Open-market RFQs and simplified acquisitions</li>
              <li>Micro-purchases on the Government Purchase Card</li>
              <li>Subcontracts and teaming with prime contractors</li>
              <li>Commercial purchase orders</li>
            </ul>
          </Card>
          <Card title="Payment" tone="amber">
            <ul>
              {company.payment.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Card>
          <Card title="Common PSC codes" tone="slate">
            <ul className="code-list">
              {pscCodes.map((p) => (
                <li key={p.code}><code>{p.code}</code><span>{p.title}</span></li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="section">
        <h2>NAICS codes</h2>
        <p className="lead">Registered in SAM.gov; Thoshini LLC is a small business under each code listed.</p>
        <div className="grid-2">
          {naicsGroups.map((g, i) => (
            <Card key={g.group} title={g.group} tone={(['blue', 'teal', 'amber', 'slate', undefined] as const)[i % 5]}>
              <ul className="code-list">
                {g.codes.map((n) => (
                  <li key={n.code}><code>{n.code}</code><span>{n.title}</span></li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="notice" style={{marginTop: '1.25rem'}}>
          Services under codes that require a state or local license (such as electrical, plumbing, HVAC, roofing
          and landscape architecture) are delivered through appropriately licensed partners.
        </div>
      </section>
    </Page>
  );
}
