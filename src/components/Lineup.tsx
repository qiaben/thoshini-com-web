import Link from '@docusaurus/Link';
import Device from '@site/src/components/Device';
import {fitLabel, modelMatrix, priceNote, tiers, type Tier} from '@site/src/data/company';

export const toneOf: Record<Tier['id'], 'silver' | 'graphite' | 'midnight' | 'titanium'> = {
  basic: 'silver',
  pro: 'graphite',
  max: 'midnight',
  ultra: 'titanium',
};
const sizeOf: Record<Tier['id'], number> = {basic: 150, pro: 168, max: 186, ultra: 204};

// Sticky product bar under the site navbar, like a product page sub-navigation.
export function ProductNav({current}: {current: 'overview' | 'compare'}) {
  return (
    <nav className="product-nav">
      <div className="container product-nav__inner">
        <Link to="/" className="product-nav__title">AI Box</Link>
        <div className="product-nav__links">
          <Link to="/" className={current === 'overview' ? 'active' : undefined}>Overview</Link>
          <Link to="/ai-box" className={current === 'compare' ? 'active' : undefined}>Compare</Link>
          <Link to="/ai-box#models">Models</Link>
          <Link className="pill" to="/reserve">Reserve</Link>
        </div>
      </div>
    </nav>
  );
}

function priceText(t: Tier) {
  return t.price ? `From ${t.price}` : 'Price on request';
}

// Columns of the lineup, Apple-compare style: product, name, price, buttons, then spec rows.
export function Lineup({detailed = false}: {detailed?: boolean}) {
  const rows: [string, (t: Tier) => string][] = [
    ['Memory', (t) => t.memory],
    ['Largest AI model', (t) => t.largestModel.replace('Up to ', '')],
    ['People using it at once', (t) => t.users],
  ];
  if (detailed) rows.push(['AI performance', (t) => t.ai], ['Power', (t) => t.power]);
  return (
    <div className="lineup-x">
      {tiers.map((t) => (
        <div key={t.id} className="lineup-x__col">
          <div className="lineup-x__img">
            <Device width={sizeOf[t.id]} tone={toneOf[t.id]} />
          </div>
          <div className="swatches" aria-hidden>
            <span className={`swatch ${toneOf[t.id]}`} />
          </div>
          <h3>{t.name}</h3>
          <p className="lineup-x__tag">{t.tagline}</p>
          <p className="lineup-x__price">{priceText(t)}</p>
          <div className="lineup-x__cta">
            <Link className="btn-x small" to={`/reserve?box=${t.id}`}>{t.price ? 'Reserve' : 'Get a quote'}</Link>
            {!detailed && <Link className="link-more" to="/ai-box">Learn more</Link>}
          </div>
          <dl className="lineup-x__specs">
            {rows.map(([label, get]) => (
              <div key={label}>
                <dt>{get(t)}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
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
  const rows: [string, (t: Tier) => string][] = [
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
