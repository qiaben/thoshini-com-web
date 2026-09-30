import Link from '@docusaurus/Link';
import {Page, Card} from '@site/src/components/Page';

const categories = [
  {title: 'Building Materials', tone: undefined, items: ['Brick, stone, block and pavers', 'Lumber, trim and millwork', 'Drywall, insulation and roofing materials', 'Concrete, mortar and patching products']},
  {title: 'Hardware & Tools', tone: 'blue' as const, items: ['Fasteners, locks and door hardware', 'Hand and power tools', 'Safety equipment and PPE', 'Paint, coatings and sundries']},
  {title: 'HVAC & Plumbing Supplies', tone: 'teal' as const, items: ['Heating and air-conditioning equipment', 'Filters, parts and refrigerant accessories', 'Pipe, valves and fittings', 'Water heaters and fixtures']},
  {title: 'Appliances & Electronics', tone: 'amber' as const, items: ['Refrigerators, ranges and laundry', 'Breakroom and small appliances', 'TVs, displays and consumer electronics', 'Batteries and accessories']},
  {title: 'Furniture & Furnishings', tone: 'slate' as const, items: ['Office, lounge and residential furniture', 'Window treatments and rugs', 'Mattresses and bedding', 'Delivery, assembly and installation']},
  {title: 'Grounds & General Merchandise', tone: undefined, items: ['Nursery stock, soil and mulch', 'Garden and grounds supplies', 'Sporting and recreation goods', 'Other general merchandise on request']},
];

export default function Supply() {
  return (
    <Page
      title="Materials & Supply"
      description="Building materials, hardware, HVAC and plumbing supplies, appliances, furniture and general merchandise from Thoshini LLC."
      eyebrow="Supply"
      heading="Building materials, equipment and supplies, delivered"
      intro="We source commercial products from established manufacturers and distributors, quote them firm-fixed-price, and deliver to your site or install them."
      actions={<Link className="btn-x" to="/contact">Send a bill of materials</Link>}>
      <section className="section">
        <div className="grid">
          {categories.map((c) => (
            <Card key={c.title} title={c.title} tone={c.tone}>
              <ul>
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="grid-2">
          <Card title="How ordering works" tone="blue">
            <ol>
              <li>Send your list, specifications or solicitation.</li>
              <li>We confirm brand, part numbers, "or equal" options and lead times.</li>
              <li>You receive a firm-fixed-price quote including delivery.</li>
              <li>We deliver, and install where requested, with documentation for acceptance.</li>
            </ol>
          </Card>
          <Card title="Sourcing standards" tone="teal">
            <ul>
              <li>New, genuine products from authorized channels</li>
              <li>Buy American Act / TAA country-of-origin information on request</li>
              <li>Manufacturer warranties passed through to the customer</li>
              <li>Purchase card orders accepted</li>
            </ul>
          </Card>
        </div>
      </section>
    </Page>
  );
}
