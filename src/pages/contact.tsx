import {Page, Card} from '@site/src/components/Page';
import LeadForm from '@site/src/components/LeadForm';
import {company} from '@site/src/data/company';

export default function Contact() {
  return (
    <Page
      title="Contact"
      description="Request a quote or send a requirement to Thoshini LLC."
      eyebrow="Contact"
      heading="Request a quote or send a requirement"
      intro="Tell us about the facility, the scope and the timeline. We reply within one business day.">
      <div className="grid-2" style={{alignItems: 'start'}}>
        <Card title="Send us a message">
          <LeadForm
            kind="contact"
            submitLabel="Send message"
            fields={[
              {name: 'name', label: 'Full name', required: true, half: true},
              {name: 'organization', label: 'Organization / agency', half: true},
              {name: 'email', label: 'Email', type: 'email', required: true, half: true},
              {
                name: 'service',
                label: 'Service needed',
                type: 'select',
                half: true,
                options: ['Facility maintenance', 'Grounds / landscaping / snow', 'Repairs / renovation', 'Electrical / plumbing / HVAC', 'Roofing', 'Equipment / appliance repair', 'Materials / equipment supply', 'Government RFQ / solicitation', 'Other'],
              },
              {name: 'location', label: 'Service location (city, state)'},
              {name: 'message', label: 'Scope, quantities or bill of materials, and timeline', type: 'textarea', required: true},
            ]}
          />
        </Card>
        <div style={{display: 'grid', gap: '1.25rem'}}>
          <Card title="Email" tone="blue">
            <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
            <p>For solicitations, please include the notice or solicitation number and response due date.</p>
          </Card>
          <Card title="Mailing address" tone="teal">
            <p>
              {company.legalName}
              {company.address.map((l) => <span key={l}><br />{l}</span>)}
            </p>
          </Card>
          <Card title="Government identifiers" tone="slate">
            <table className="facts">
              <tbody>
                <tr><th>UEI</th><td>{company.uei}</td></tr>
                <tr><th>CAGE</th><td>{company.cage}</td></tr>
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </Page>
  );
}
