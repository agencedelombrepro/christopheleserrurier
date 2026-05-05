import { useState } from 'react'
import { REALISATIONS, CATEGORIES } from '../../data/realisations'
import { useSEO } from '../../hooks/useSEO'
import { useReveal } from '../../hooks/useReveal'
import Footer from '../Footer'

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Toutes')
  useReveal(activeCategory)

  useSEO({
    title: 'Réalisations — Travaux de serrurerie · Christophe Le Serrurier',
    description: 'Découvrez les réalisations de Christophe Le Serrurier : blindages, ouvertures, installations serrures multipoints, sécurisations dans l\'Ain, le Jura et la Saône-et-Loire.',
    canonical: 'https://christophe-serrurier-ain.fr/realisations/',
  })

  const filtered = activeCategory === 'Toutes'
    ? REALISATIONS
    : REALISATIONS.filter((r) => r.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <div style={{ background: 'var(--navy)', padding: '5rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(64,110,183,.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="label-tag" style={{ color: 'rgba(255,255,255,.5)' }}>Mes interventions</div>
          <h1 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: 'clamp(2.2rem,4.5vw,3.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.05, margin: '.5rem 0 1rem' }}>
            Mes <span style={{ color: 'var(--orange)' }}>Réalisations</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.6)', maxWidth: 540, lineHeight: 1.7 }}>
            Blindages, ouvertures d'urgence, installations, sécurisations. Chaque chantier est une mission de confiance.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: 'var(--orange)', padding: '1.6rem 2.5rem' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { val: '+200', label: 'Interventions par an' },
            { val: '7J/7', label: 'Disponibilité' },
            { val: '90 km', label: 'Rayon d\'action' },
            { val: '100%', label: 'Devis gratuit' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.75)', marginTop: '.2rem', letterSpacing: '.04em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter + Grid */}
      <div style={{ background: 'var(--gray-50)', padding: '4rem 2.5rem 5rem' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>

          {/* Category filter */}
          <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '2.8rem' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '.45rem 1.1rem',
                  borderRadius: '50px',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat ? 'var(--orange)' : 'var(--gray-200)',
                  background: activeCategory === cat ? 'var(--orange)' : '#fff',
                  color: activeCategory === cat ? '#fff' : 'var(--text-soft)',
                  fontSize: '.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all .2s',
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.4rem' }} className="real-grid">
            {filtered.map((r, i) => (
              <div key={r.id} className={`real-card reveal${i > 0 ? ` reveal-delay-${Math.min(i % 4, 3)}` : ''}`}>
                <div className="real-card-img">
                  <img src={r.after} alt={r.title} className="real-card-photo" loading="lazy" />
                  <div className="real-card-overlay" />
                  <span className="real-card-cat">{r.category}</span>
                </div>
                <div className="real-card-body">
                  <div className="real-card-location">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {r.location}
                  </div>
                  <h3 className="real-card-title">{r.title}</h3>
                  <p className="real-card-desc">{r.description}</p>
                  <div className="real-card-tags">
                    {r.tags.map((tag) => (
                      <span key={tag} className="real-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-soft)' }}>
              Aucune réalisation dans cette catégorie pour le moment.
            </div>
          )}

          {/* CTA */}
          <div style={{ marginTop: '4rem', background: 'var(--navy)', borderRadius: 22, padding: '3rem 2.5rem', textAlign: 'center' }}>
            <div className="label-tag" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.4)' }}>Votre projet</div>
            <h2 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 800, color: '#fff', margin: '.6rem 0 1rem' }}>
              Un projet de <span style={{ color: 'var(--orange)' }}>serrurerie</span> ?
            </h2>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '.97rem', marginBottom: '2rem', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
              Devis gratuit, sans engagement. Christophe se déplace dans un rayon de 90 km autour de Montrevel-en-Bresse.
            </p>
            <a href="tel:+33698956423" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.2rem' }}>
              06 98 95 64 23
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
