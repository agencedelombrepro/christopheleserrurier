import { Link } from 'react-router-dom'
import { CITIES } from '../../data/cities'
import { useSEO } from '../../hooks/useSEO'
import { useReveal } from '../../hooks/useReveal'
import Footer from '../Footer'
import TrustStrip from '../TrustStrip'

export default function ZonesHub() {
  useReveal()
  useSEO({
    title: 'Zone d\'intervention serrurier — Ain, Jura, Saône-et-Loire · Christophe',
    description: 'Serrurier artisan intervenant dans 90 km autour de Montrevel-en-Bresse : Ain, Jura, Saône-et-Loire. Urgence 7J/7. Consultez votre ville. ☎ 06 98 95 64 23',
    canonical: 'https://christophe-serrurier-ain.fr/zones-intervention/',
  })

  const tier1 = CITIES.filter((c) => c.tier === 1)
  const tier2 = CITIES.filter((c) => c.tier === 2)
  const tier3 = CITIES.filter((c) => c.tier === 3)

  return (
    <>
      <section style={{ background: 'var(--navy)', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="label-tag" style={{ color: 'rgba(255,255,255,.45)' }}>Zone de couverture</div>
          <h1 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Serrurier dans<br /><span style={{ color: 'var(--orange)' }}>toute la région</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '2rem' }}>
            Christophe intervient dans un rayon de <strong style={{ color: '#fff' }}>90 km autour de Montrevel-en-Bresse</strong>,
            couvrant l'Ain, le Jura et la Saône-et-Loire. Sélectionnez votre ville pour plus d'informations.
          </p>
          <a href="tel:+33698956423" className="btn-phone-xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.18 19.79 19.79 0 016.07 3.52 2 2 0 018.05 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L12.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            06 98 95 64 23
          </a>
        </div>
      </section>

      <TrustStrip />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          {[
            { label: 'Zone principale', cities: tier1 },
            { label: 'Zone élargie', cities: tier2 },
            { label: 'Zone périphérique', cities: tier3 },
          ].map(({ label, cities }) => (
            <div key={label} className="reveal" style={{ marginBottom: '3rem' }}>
              <div className="label-tag">{label}</div>
              <div className="other-cities-grid" style={{ marginTop: '1rem' }}>
                {cities.map((c) => (
                  <Link key={c.slug} className="occ" to={`/zones-intervention/serrurier-${c.slug}`}>
                    <div className="occ-name">{c.name}</div>
                    <div className="occ-dist">{c.km === 0 ? 'Base · ' : c.km + ' km · '}{c.dept}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
