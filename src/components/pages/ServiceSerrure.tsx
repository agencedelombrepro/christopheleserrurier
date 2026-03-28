import { useSEO } from '../../hooks/useSEO'
import { serviceSchema } from '../../utils/schema'
import { useReveal } from '../../hooks/useReveal'
import ContactSection from '../ContactSection'
import Footer from '../Footer'
import TrustStrip from '../TrustStrip'

export default function ServiceSerrure() {
  useReveal()
  useSEO({
    title: 'Changement de serrure — Serrurier Ain · Christophe',
    description: 'Changement et installation de serrure haute sécurité, blindage, serrure multipoints. Artisan CAP · Ain, Jura, Saône-et-Loire · Devis gratuit. ☎ 06 98 95 64 23',
    canonical: 'https://christophe-leserrurier.fr/changement-serrure/',
    jsonLd: serviceSchema('Changement de serrure et installation', 'Remplacement de serrure, serrure haute sécurité, blindage de porte, serrure multipoints. Artisan CAP serrurier.', '/changement-serrure/'),
  })

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0f3460 0%,#1a4080 100%)', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="label-tag" style={{ color: 'rgba(255,255,255,.5)' }}>Installation & Sécurité</div>
          <h1 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Changement de serrure<br /><span style={{ color: 'var(--orange)' }}>& installation</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '2rem' }}>
            Serrure ancienne, clé perdue, emménagement, ou simplement envie de renforcer votre sécurité ?
            Christophe vous conseille le bon équipement selon votre porte et votre budget, pose incluse.
          </p>
          <a href="tel:+33698956423" className="btn-phone-xl">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.18 19.79 19.79 0 016.07 3.52 2 2 0 018.05 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L12.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Devis gratuit : 06 98 95 64 23
          </a>
        </div>
      </section>

      <TrustStrip />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '760px' }}>
            <h2 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: '1.75rem', color: 'var(--navy)', marginBottom: '.9rem' }}>
              Quelle serrure choisir ?
            </h2>
            <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.95rem' }}>
              Le marché des serrures est compliqué. Christophe vous guide sans jargon : il évalue votre porte, votre niveau de risque et vous propose une solution <strong>adaptée à votre réel besoin</strong> — pas la plus chère.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              {[
                { title: 'Serrure standard', text: 'Remplacement de cylindre ou de serrure entrée de gamme. Idéal pour locataires ou budget serré.' },
                { title: 'Serrure haute sécurité', text: 'Cylindres certifiés A2P, crochetage résistant, copie de clé protégée brevetée.' },
                { title: 'Serrure multipoints', text: '3 ou 5 points d\'ancrage. Recommandé pour les portes d\'entrée principales.' },
                { title: 'Blindage de porte', text: 'Coffre blindé + serrure A2P. Protection maximale contre l\'effraction.' },
              ].map((item) => (
                <div key={item.title} style={{ background: 'var(--gray-50)', borderRadius: '12px', padding: '1.2rem', border: '1px solid var(--gray-200)' }}>
                  <div style={{ fontFamily: "'Clear Sans',sans-serif", fontWeight: 700, fontSize: '.9rem', color: 'var(--navy)', marginBottom: '.4rem' }}>{item.title}</div>
                  <div style={{ fontSize: '.8rem', color: 'var(--text-soft)', lineHeight: 1.6 }}>{item.text}</div>
                </div>
              ))}
            </div>

            <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, fontSize: '.95rem' }}>
              Devis gratuit sur place. Christophe intervient dans un rayon de <strong>90 km autour de Montrevel-en-Bresse</strong> (Ain, Jura, Saône-et-Loire).
            </p>
          </div>
        </div>
      </section>

      <ContactSection title="Devis changement de serrure" />
      <Footer />
    </>
  )
}
