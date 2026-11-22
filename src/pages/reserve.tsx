import {useEffect, useState} from 'react';
import {Page, Card} from '@site/src/components/Page';
import LeadForm from '@site/src/components/LeadForm';
import {company, priceNote, tiers} from '@site/src/data/company';

const label = (t: (typeof tiers)[number]) => `${t.name} – ${t.price || 'price on request'}`;

export default function Reserve() {
  // Read ?box= after the page loads: the static HTML is built without a query string.
  const [box, setBox] = useState<string | null>(null);
  useEffect(() => setBox(new URLSearchParams(window.location.search).get('box')), []);
  const chosen = tiers.find((t) => t.id === box);

  return (
    <Page
      title="Reserve an AI Box"
      description="Reserve a Thoshini AI Box. Free, no payment and no obligation."
      eyebrow="Reserve"
      heading="Reserve your AI Box."
      intro="Free, with no payment and no obligation. We contact you within one business day to confirm what you need, the price and a delivery date.">
      <div className="grid-2" style={{alignItems: 'start'}}>
        <Card title="Reservation">
          <LeadForm
            key={chosen?.id ?? 'none'}
            kind="contact"
            submitLabel="Reserve"
            initial={chosen ? {model: label(chosen)} : {}}
            fields={[
              {name: 'model', label: 'AI Box model', type: 'select', required: true, options: [...tiers.map(label), 'Not sure, help me choose']},
              {name: 'name', label: 'Full name', required: true, half: true},
              {name: 'organization', label: 'Business / organization', half: true},
              {name: 'email', label: 'Email', type: 'email', required: true, half: true},
              {name: 'quantity', label: 'How many boxes', type: 'select', required: true, half: true, options: ['1', '2', '3–5', '6 or more']},
              {
                name: 'useCase',
                label: 'Main use',
                type: 'select',
                half: true,
                options: ['Ask our documents', 'Office assistant (drafting, summaries)', 'Healthcare / dental office', 'Legal / accounting', 'Voice / dictation', 'Home use', 'Other'],
              },
              {name: 'users', label: 'People who will use it', type: 'select', half: true, options: ['1', '2–3', '4–10', 'More than 10']},
              {name: 'location', label: 'City, state'},
              {name: 'message', label: 'Anything we should know (documents, software you use, timeline)', type: 'textarea'},
            ]}
          />
        </Card>
        <div style={{display: 'grid', gap: '1.25rem'}}>
          <Card title="What happens next">
            <ol>
              <li>We reply within one business day.</li>
              <li>A short call to confirm your use, documents and number of users.</li>
              <li>You receive a written quote and delivery date.</li>
              <li>You pay only when you accept the quote.</li>
            </ol>
          </Card>
          <Card title="Prices">
            <table className="facts">
              <tbody>
                {tiers.map((t) => (
                  <tr key={t.id}><th>{t.name}</th><td>{t.price || 'On request'}</td></tr>
                ))}
              </tbody>
            </table>
            <p style={{marginTop: '0.8rem'}}>{priceNote}</p>
          </Card>
          <Card title="Questions">
            <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
          </Card>
        </div>
      </div>
    </Page>
  );
}
