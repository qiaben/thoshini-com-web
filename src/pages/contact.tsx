import Link from '@docusaurus/Link';
import {Page, Card} from '@site/src/components/Page';
import LeadForm from '@site/src/components/LeadForm';
import {company} from '@site/src/data/company';

export default function Contact() {
  return (
    <Page
      title="Contact"
      description="Questions about the Thoshini AI Box, support or orders."
      eyebrow="Contact"
      heading="Talk to us about private AI"
      intro="Questions about the AI Box, an existing order or support. We reply within one business day.">
      <div className="grid-2" style={{alignItems: 'start'}}>
        <Card title="Send us a message">
          <LeadForm
            kind="contact"
            submitLabel="Send message"
            fields={[
              {name: 'name', label: 'Full name', required: true, half: true},
              {name: 'organization', label: 'Business / organization', half: true},
              {name: 'email', label: 'Email', type: 'email', required: true, half: true},
              {
                name: 'topic',
                label: 'Topic',
                type: 'select',
                half: true,
                options: ['AI Box question', 'Pricing / quote', 'Multiple boxes or larger models', 'Support for my box', 'Partnership / reseller', 'Other'],
              },
              {name: 'message', label: 'Message', type: 'textarea', required: true},
            ]}
          />
        </Card>
        <div style={{display: 'grid', gap: '1.25rem'}}>
          <Card title="Ready to order?" tone="teal">
            <p>Reservations are free and carry no obligation.</p>
            <Link className="btn-x navy" to="/reserve">Reserve a box</Link>
          </Card>
          <Card title="Email" tone="blue">
            <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
          </Card>
          <Card title="Mailing address" tone="slate">
            <p>
              {company.legalName}
              {company.address.map((l) => <span key={l}><br />{l}</span>)}
            </p>
          </Card>
        </div>
      </div>
    </Page>
  );
}
