import { useParams, Link, Navigate } from 'react-router-dom'
import { CITY_BY_SLUG, CITIES } from '../data/cities'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import { citySchema } from '../utils/schema'
import TrustStrip from './TrustStrip'
import ContactSection from './ContactSection'
import Footer from './Footer'

export default function CityPage() {
  const { slug: rawSlug } = useParams<{ slug: string }>()
  // Route is /zones-intervention/:slug where slug = "serrurier-polliat"
  const slug = rawSlug?.startsWith('serrurier-') ? rawSlug.slice('serrurier-'.length) : rawSlug
  const city = slug ? CITY_BY_SLUG.get(slug) : undefined

  useReveal(slug)

  const schema = city ? citySchema(city) : undefined

  useSEO(city ? {
    title: `Serrurier à ${city.name} — Intervention rapide 7J/7`,
    description: `Serrurier à ${city.name} — Christophe intervient en urgence 7J/7. CAP, Compagnons du Tour de France. Devis gratuit. ☎ 06 98 95 64 23`,
    canonical: `https://christophe-serrurier-ain.fr/zones-intervention/serrurier-${city.slug}/`,
    jsonLd: schema,
  } : { title: 'Serrurier — Page introuvable', description: '' })

  if (!city) return <Navigate to="/zones-intervention" replace />

  const others = CITIES.filter((c) => c.slug !== city.slug && c.tier <= 2).slice(0, 8)

  const faq = [
    {
      q: `Combien de temps pour qu'un serrurier arrive à ${city.name} ?`,
      a: `Christophe est basé à Montrevel-en-Bresse, à ${city.km} km de ${city.name}. Il se déplace 7J/7 y compris jours fériés. Appelez le 06 98 95 64 23 pour connaître le délai exact selon sa disponibilité du moment.`,
    },
    {
      q: `Ouvre-t-il les portes sans abîmer la serrure à ${city.name} ?`,
      a: `Oui, Christophe privilégie systématiquement l'ouverture sans casse si la serrure le permet. Formé chez les Compagnons du Tour de France, il maîtrise les techniques non destructives. Si le remplacement est inévitable, le tarif est annoncé avant intervention.`,
    },
    {
      q: `Quel est le tarif d'un serrurier à ${city.name} ?`,
      a: `Christophe pratique des tarifs transparents avec devis gratuit avant intervention. Pas de surprise : le prix est fixé avant de commencer. Pas de sur-facturation liée à une plateforme ou centrale téléphonique. Vous appelez l'artisan directement.`,
    },
  ]

  return (
    <>
      {/* Hero */}
      <div className="city-hero">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg,rgba(13,24,70,.97) 50%,rgba(13,24,70,.6))' }} />
        <div className="city-hero-inner">
          <div>
            <div className="city-breadcrumb">
              <Link to="/">Accueil</Link> ›{' '}
              <Link to="/zones-intervention">Zones d'intervention</Link> ›{' '}
              <span>{city.name}</span>
            </div>
            <h1 className="city-title">
              Serrurier à<br /><span>{city.name}</span>
            </h1>
            <p className="city-subtitle">
              Serrurier diplômé intervenant à {city.name} et ses alentours — à {city.km === 0 ? 'votre' : city.km + ' km de'} {city.km === 0 ? 'domicile' : 'Montrevel-en-Bresse'}. Urgence 7J/7, devis gratuit.
            </p>
            <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
              <a href="tel:+33698956423" className="btn-phone-xl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.18 19.79 19.79 0 016.07 3.52 2 2 0 018.05 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L12.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                06 98 95 64 23
              </a>
              <a href="#contact" className="btn-outline" style={{ color: 'rgba(255,255,255,.7)', borderColor: 'rgba(255,255,255,.2)' }}>
                Devis gratuit
              </a>
            </div>
          </div>

          <div className="city-hero-vis" style={{ animation: 'lockPulse 4s ease-in-out infinite' }}>
            <svg width="220" height="260" viewBox="0 0 220 260" fill="none">
              <path d="M72 118 L72 80 Q72 28 110 28 Q148 28 148 80 L148 118" stroke="rgba(233,86,35,.65)" strokeWidth="16" strokeLinecap="round" fill="none" />
              <rect x="34" y="110" width="152" height="128" rx="18" fill="rgba(64,110,183,.1)" stroke="rgba(64,110,183,.35)" strokeWidth="2" />
              <circle cx="110" cy="168" r="22" fill="rgba(233,86,35,.1)" stroke="rgba(233,86,35,.5)" strokeWidth="2" />
              <circle cx="110" cy="163" r="10" fill="rgba(13,24,70,.8)" stroke="rgba(233,86,35,.7)" strokeWidth="1.5" />
              <path d="M104 170 L116 170 L113 195 L107 195 Z" fill="rgba(13,24,70,.8)" stroke="rgba(233,86,35,.7)" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="52" cy="128" r="5" fill="rgba(64,110,183,.3)" stroke="rgba(64,110,183,.5)" />
              <circle cx="168" cy="128" r="5" fill="rgba(64,110,183,.3)" stroke="rgba(64,110,183,.5)" />
              <circle cx="52" cy="222" r="5" fill="rgba(64,110,183,.3)" stroke="rgba(64,110,183,.5)" />
              <circle cx="168" cy="222" r="5" fill="rgba(64,110,183,.3)" stroke="rgba(64,110,183,.5)" />
            </svg>
          </div>
        </div>
      </div>

      <TrustStrip />

      {/* Contenu SEO + info card */}
      <div className="city-seo">
        <div className="city-seo-grid">
          <div className="city-seo-text reveal">
            <h2>Serrurier à {city.name} — Intervention rapide</h2>
            <p>
              Vous recherchez un <strong>serrurier à {city.name}</strong> disponible rapidement ?
              Christophe intervient régulièrement dans le secteur de {city.name} ({city.dept}),
              {city.km > 0 && <> à seulement <strong>{city.km} km de sa base à Montrevel-en-Bresse</strong></>}.
            </p>
            <p>
              Artisan indépendant formé chez les <strong>Compagnons du Tour de France</strong>,
              titulaire d'un <strong>CAP Serrurier Métallier</strong>, il garantit un travail soigné avec
              tarif transparent avant intervention et disponibilité <strong>7 jours sur 7</strong>, jours fériés inclus.
            </p>
            <p>
              Porte claquée, serrure bloquée, clé perdue, cambriolage ? Appelez directement au{' '}
              <strong><a href="tel:+33698956423" style={{ color: 'var(--orange)' }}>06 98 95 64 23</a></strong>.
              Devis gratuit, sans engagement.
            </p>
            <p>
              <strong>Zone couverte :</strong> {city.name} et toutes les communes dans un rayon de 90 km
              autour de Montrevel-en-Bresse (Ain, Jura, Saône-et-Loire).
            </p>

            {/* FAQ locale */}
            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: '1.2rem', color: 'var(--navy)', marginBottom: '1.2rem' }}>
                Questions fréquentes
              </h3>
              {faq.map((item, i) => (
                <details key={i} style={{ marginBottom: '1rem', background: 'var(--gray-50)', borderRadius: '10px', padding: '1rem 1.2rem', border: '1px solid var(--gray-200)' }}>
                  <summary style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--navy)', cursor: 'pointer', listStyle: 'none' }}>
                    ▸ {item.q}
                  </summary>
                  <p style={{ marginTop: '.75rem', fontSize: '.87rem', color: 'var(--text-soft)', lineHeight: '1.7' }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="city-info-card">
              <div className="city-info-title">Informations pratiques</div>
              {city.km > 0 && (
                <div className="city-info-item">
                  <div className="cit-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="cit-label">Distance</div>
                    <div className="cit-val">{city.km} km de Montrevel-en-Bresse</div>
                  </div>
                </div>
              )}
              <div className="city-info-item">
                <div className="cit-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <div className="cit-label">Disponibilité</div>
                  <div className="cit-val">7J/7 · 365 jours/an</div>
                </div>
              </div>
              <div className="city-info-item">
                <div className="cit-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 8A6 6 0 006 12a6 6 0 0012 0" /><path d="M4 10h12M4 14h12" />
                  </svg>
                </div>
                <div>
                  <div className="cit-label">Devis</div>
                  <div className="cit-val">Gratuit &amp; sans engagement</div>
                </div>
              </div>
              <div className="city-info-item">
                <div className="cit-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div>
                  <div className="cit-label">Qualification</div>
                  <div className="cit-val">CAP · Compagnons du Tour de France</div>
                </div>
              </div>
              <a href="tel:+33698956423" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '.9rem', borderRadius: '10px', fontSize: '.88rem' }}>
                06 98 95 64 23
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Autres villes */}
      <div className="other-cities">
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="label-tag">Autres villes</div>
          <h2 className="section-title">Serrurier dans <em>toute la région</em></h2>
          <div className="other-cities-grid">
            {others.map((c) => (
              <Link key={c.slug} className="occ" to={`/zones-intervention/serrurier-${c.slug}`}>
                <div className="occ-name">{c.name}</div>
                <div className="occ-dist">{c.km} km · {c.dept}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ContactSection cityName={city.name} />
      <Footer />
    </>
  )
}
