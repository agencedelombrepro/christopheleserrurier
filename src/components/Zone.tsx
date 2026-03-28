import { Link } from 'react-router-dom'
import { CITIES } from '../data/cities'

export default function Zone() {
  const displayCities = CITIES.filter((c) => c.tier <= 2)

  return (
    <section className="section zone-section" id="zone">
      <div className="container">
        <div className="zone-grid">
          <div className="reveal">
            <div className="label-tag">Zone d'intervention</div>
            <h2 className="zone-title">Je me déplace<br />dans toute la région</h2>
            <p className="zone-desc">
              Basé à <strong>Montrevel-en-Bresse (01340)</strong>, j'interviens dans un rayon de 90 km
              couvrant l'Ain, le Jura et la Saône-et-Loire. Consultez la page dédiée à votre ville.
            </p>
            <div className="city-pills">
              <span className="city-pill main">Montrevel-en-Bresse</span>
              {displayCities.filter((c) => c.slug !== 'montrevel-en-bresse').map((c) => (
                <Link key={c.slug} className="city-pill" to={`/zones-intervention/serrurier-${c.slug}`}>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="zone-vis reveal reveal-delay-1">
            <div className="zone-rings">
              <div className="z-ring z-ring-1" />
              <div className="z-ring z-ring-2" />
              <div className="z-ring z-ring-3" />
              <div className="z-city-dot" style={{ top: '8%', left: '55%' }} title="Viriat" />
              <div className="z-city-dot" style={{ top: '22%', left: '78%' }} title="Pont-de-Vaux" />
              <div className="z-city-dot" style={{ top: '60%', left: '82%' }} title="Louhans" />
              <div className="z-city-dot" style={{ top: '78%', left: '60%' }} title="Lons-le-Saunier" />
              <div className="z-city-dot" style={{ top: '70%', left: '18%' }} title="Saint-Amour" />
              <div className="z-city-dot" style={{ top: '28%', left: '15%' }} title="Coligny" />
              <div className="z-center">
                <div className="z-km">90</div>
                <div className="z-km-label">km autour</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
