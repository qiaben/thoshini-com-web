import Link from '@docusaurus/Link';
import {Page, Card} from '@site/src/components/Page';

const groups = [
  {
    title: 'Facility Maintenance',
    tone: undefined,
    body: 'Routine and preventive maintenance that keeps buildings safe, functional and presentable.',
    items: ['Facilities support and building operations', 'Preventive maintenance schedules', 'Pressure washing, gutter and exterior cleaning', 'Door, lock, fixture and hardware repair', 'Building condition checks and reporting'],
  },
  {
    title: 'Grounds & Landscaping',
    tone: 'teal' as const,
    body: 'Seasonal exterior care for campuses, lots and properties.',
    items: ['Mowing, trimming, edging and clean-ups', 'Planting, mulching and irrigation checks', 'Snow plowing, shoveling and de-icing', 'Site preparation, clearing and grading', 'Landscape design through licensed partners'],
  },
  {
    title: 'Repairs & Renovation',
    tone: 'blue' as const,
    body: 'Interior and exterior repair and improvement work.',
    items: ['Finish carpentry, trim, doors and cabinets', 'Drywall, painting and building finishes', 'Masonry, brick and minor concrete repair', 'Residential and commercial remodeling', 'Tenant improvements and punch-list work'],
  },
  {
    title: 'Building Systems',
    tone: 'amber' as const,
    body: 'Regulated building-system work delivered by licensed partners under our management.',
    items: ['Electrical repairs and installations', 'Plumbing, heating and air-conditioning', 'Roofing repair and replacement', 'Building equipment installation', 'Building inspection coordination'],
  },
  {
    title: 'Equipment & Appliance Repair',
    tone: 'slate' as const,
    body: 'Repair and maintenance to extend equipment life.',
    items: ['Commercial and household appliances', 'Commercial and industrial equipment', 'Electronic and precision equipment', 'Lawn, garden and grounds equipment'],
  },
];

export default function Services() {
  return (
    <Page
      title="Services"
      description="Facility maintenance, grounds, repairs, renovation, building systems and equipment repair from Thoshini LLC."
      eyebrow="Services"
      heading="Maintenance and repair services for every building"
      intro="We self-perform general maintenance and repair work and manage licensed specialist partners, so customers get one accountable contractor for the whole requirement."
      actions={
        <>
          <Link className="btn-x" to="/contact">Request a quote</Link>
          <Link className="btn-x ghost" to="/supply">Materials & supply</Link>
        </>
      }>
      <section className="section">
        <div className="grid">
          {groups.map((g) => (
            <Card key={g.title} title={g.title} tone={g.tone}>
              <p>{g.body}</p>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="notice">
          <strong>Licensed work.</strong> Services that require a state or local license (for example electrical,
          plumbing, HVAC, roofing and landscape architecture) are performed by appropriately licensed and insured
          partners under Thoshini LLC's management and quality control.
        </div>
      </section>
    </Page>
  );
}
