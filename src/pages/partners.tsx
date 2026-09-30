import {Page, Card} from '@site/src/components/Page';
import LeadForm from '@site/src/components/LeadForm';

export default function Partners() {
  return (
    <Page
      title="Become a Partner"
      description="Join the Thoshini LLC service provider and subcontractor network."
      eyebrow="Partner Network"
      heading="Work with us as a service provider or subcontractor"
      intro="We team with reliable trades and distributors to deliver maintenance, repair and supply work for government and commercial clients.">
      <div className="grid-2" style={{alignItems: 'start'}}>
        <div style={{display: 'grid', gap: '1.25rem'}}>
          <Card title="Trades we team with" tone="teal">
            <ul>
              <li>Landscaping, snow removal and tree care</li>
              <li>Carpentry, drywall, painting and general repair</li>
              <li>Masonry, concrete and roofing</li>
              <li>Licensed electrical, plumbing and HVAC</li>
              <li>Appliance and equipment repair technicians</li>
              <li>Building-material, hardware and HVAC/plumbing distributors</li>
              <li>Appliance, furniture and electronics suppliers</li>
            </ul>
          </Card>
          <Card title="What we look for" tone="blue">
            <ul>
              <li>Active business registration; license where the trade requires one</li>
              <li>General liability insurance (and workers' comp where required)</li>
              <li>Clear pricing and reliable response times</li>
              <li>SAM.gov registration is a plus, not a requirement</li>
            </ul>
          </Card>
        </div>
        <Card title="Partner sign-up">
          <LeadForm
            kind="partner"
            submitLabel="Join the network"
            fields={[
              {name: 'company', label: 'Company name', required: true, half: true},
              {name: 'contact', label: 'Contact name', required: true, half: true},
              {name: 'email', label: 'Email', type: 'email', required: true, half: true},
              {name: 'website', label: 'Website', half: true},
              {
                name: 'trade',
                label: 'Primary trade',
                type: 'select',
                required: true,
                half: true,
                options: ['Landscaping / snow', 'Carpentry / painting / repair', 'Masonry / concrete', 'Roofing', 'Electrical', 'Plumbing', 'HVAC', 'Appliance / equipment repair', 'Building materials / hardware supplier', 'Appliance / furniture / electronics supplier', 'Other'],
              },
              {name: 'area', label: 'Service area', half: true},
              {name: 'licenses', label: 'Licenses, insurance and certifications'},
              {name: 'notes', label: 'Anything else we should know', type: 'textarea'},
            ]}
          />
        </Card>
      </div>
    </Page>
  );
}
