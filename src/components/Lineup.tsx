import Link from '@docusaurus/Link';
import {fitLabel, modelMatrix, priceNote, tiers} from '@site/src/data/company';

export function Price({price, buildToOrder}: {price: string; buildToOrder?: boolean}) {
  if (!price) {
    return (
      <div className="price">
        Price on request
        <small>{buildToOrder ? 'Built to order' : ''}</small>
      </div>
    );
  }
  return (
    <div className="price">
      {price}
      <small>Setup included</small>
    </div>
  );
}

export function Lineup({detailed = false}: {detailed?: boolean}) {
  return (
    <div className="lineup">
      {tiers.map((t) => (
        <div key={t.id} className={`tier ${t.id}`}>
          <div className="mini-device" aria-hidden />
          <h3>{t.name}</h3>
          <p className="tagline">{t.tagline}</p>
          <Price price={t.price} buildToOrder={t.buildToOrder} />
          <div className="actions">
            <Link className="btn-x small" to={`/reserve?box=${t.id}`}>{t.price ? 'Reserve' : 'Get a quote'}</Link>
            {!detailed && <Link className="link-more" to="/ai-box">Learn more</Link>}
          </div>
          <ul>
            <li><strong>{t.memory}</strong>memory</li>
            <li><strong>{t.largestModel}</strong>largest AI model</li>
            <li><strong>{t.users}</strong>people using it</li>
            {detailed && <li><strong>{t.chip}</strong>{t.ai}</li>}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ModelGrid() {
  return (
    <>
      <div className="compare-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th>Model size</th>
              {tiers.map((t) => <th key={t.id}>{t.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {modelMatrix.map((row) => (
              <tr key={row.family}>
                <th>
                  {row.family}
                  <small>{row.examples}</small>
                </th>
                {tiers.map((t) => (
                  <td key={t.id}>
                    <span className={`fit ${row.fit[t.id]}`}>{fitLabel[row.fit[t.id]]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="fine">
        Models run compressed (4-bit) on the box. Bigger models give better answers but run slower. Model names belong to their
        publishers; availability and licenses can change. {priceNote}
      </p>
    </>
  );
}

export function SpecTable() {
  const rows: [string, (t: (typeof tiers)[number]) => string][] = [
    ['Price', (t) => t.price || 'On request'],
    ['Compute', (t) => t.chip],
    ['AI performance', (t) => t.ai],
    ['Memory', (t) => t.memory],
    ['Storage', (t) => t.storage],
    ['Power', (t) => t.power],
    ['People using it at once', (t) => t.users],
    ['Largest AI model', (t) => t.largestModel],
    ['Best for', (t) => t.bestFor],
  ];
  return (
    <div className="compare-wrap">
      <table className="compare">
        <thead>
          <tr>
            <th />
            {tiers.map((t) => <th key={t.id}>{t.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, get]) => (
            <tr key={label}>
              <th>{label}</th>
              {tiers.map((t) => <td key={t.id}>{get(t)}</td>)}
            </tr>
          ))}
          <tr>
            <th>Example models</th>
            {tiers.map((t) => (
              <td key={t.id}>
                {t.models.map((m) => <div key={m}>{m}</div>)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
