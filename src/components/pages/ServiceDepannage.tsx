import { Link } from 'react-router-dom'
import { useSEO } from '../../hooks/useSEO'
import { serviceSchema } from '../../utils/schema'
import { useReveal } from '../../hooks/useReveal'
import ContactSection from '../ContactSection'
import Footer from '../Footer'
import TrustStrip from '../TrustStrip'

export default function ServiceDepannage() {
  useReveal()
  useSEO({
    title: 'Dépannage urgence serrurier — Christophe, Ain 7J/7',
    description: 'Serrurier en urgence 7J/7 dans l\'Ain, Jura et Saône-et-Loire. Porte claquée, serrure bloquée, après effraction. Artisan CAP. ☎ 06 98 95 64 23',
    canonical: 'https://christophe-leserrurier.fr/depannage-urgence/',
    jsonLd: serviceSchema('Dépannage serrurier urgence 7J/7', 'Intervention d\'urgence pour ouverture de porte, serrure bloquée, après cambriolage. Artisan serrurier CAP, Compagnons du Tour de France.', '/depannage-urgence/'),
  })

  return (
    <>
      {/* Hero service */}
      <section style={{ background: 'linear-gradient(135deg,var(--navy) 0%,#1a2a7a 100%)', padding: '5rem 2.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="label-tag" style={{ color: 'rgba(255,255,255,.45)' }}>Intervention express</div>
          <h1 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Dépannage serrurier<br /><span style={{ color: 'var(--orange)' }}>urgence 7J/7</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '2rem' }}>
            Vous êtes bloqué dehors, votre serrure ne fonctionne plus, vous venez d'être victime d'une effraction ?
            Christophe répond en direct et se déplace 7 jours sur 7, jours fériés inclus, dans un rayon de 90 km autour de Montrevel-en-Bresse.
          </p>
          <a href="tel:+33698956423" className="btn-phone-xl">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.18 19.79 19.79 0 016.07 3.52 2 2 0 018.05 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L12.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            06 98 95 64 23
          </a>
        </div>
      </section>

      <TrustStrip />

      {/* Contenu SEO */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '4rem', alignItems: 'start' }}>
            <div className="reveal">
              <h2 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: '1.75rem', color: 'var(--navy)', marginBottom: '.9rem' }}>
                Un serrurier qui répond vraiment, même la nuit
              </h2>
              <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.95rem' }}>
                Les plateformes de serruriers font des promesses d'intervention rapide, mais envoient un sous-traitant inconnu, parfois de très loin. Chez Christophe, <strong>vous appelez l'artisan directement</strong>. Pas de centrale téléphonique, pas d'intermédiaire, pas de surprise sur la facture.
              </p>
              <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.95rem' }}>
                Formé chez les <strong>Compagnons du Tour de France</strong> et titulaire d'un <strong>CAP Serrurier Métallier</strong>, Christophe pratique l'ouverture <strong>sans casse</strong> lorsque la serrure le permet. Le tarif est annoncé avant toute intervention.
              </p>
              <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, fontSize: '.95rem' }}>
                Zone d'intervention : <strong>Ain (01), Jura (39), Saône-et-Loire (71)</strong>, dans un rayon de 90 km autour de Montrevel-en-Bresse. Consultez{' '}
                <Link to="/zones-intervention" style={{ color: 'var(--orange)' }}>les villes couvertes</Link>.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                {[
                  {
                    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
                    title: 'Porte claquée', text: 'Ouverture sans casse si possible. Intervention rapide.'
                  },
                  {
                    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                    title: 'Après effraction', text: 'Sécurisation immédiate. Remplacement serrure.'
                  },
                  {
                    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="9" r="4" /><path d="M13 9h8M17 7v4" /><path d="M13 13l-3 8" /></svg>,
                    title: 'Clé perdue', text: 'Ouverture + changement de cylindre sur place.'
                  },
                  {
                    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
                    title: 'Serrure bloquée', text: 'Diagnostic et remplacement si nécessaire.'
                  },
                ].map((item) => (
                  <div key={item.title} style={{ background: 'var(--gray-50)', borderRadius: '12px', padding: '1.2rem', border: '1px solid var(--gray-200)' }}>
                    <div style={{ width: 36, height: 36, background: 'rgba(233,86,35,.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '.6rem' }}>{item.svg}</div>
                    <div style={{ fontFamily: "'Clear Sans',sans-serif", fontWeight: 700, fontSize: '.9rem', color: 'var(--navy)', marginBottom: '.3rem' }}>{item.title}</div>
                    <div style={{ fontSize: '.8rem', color: 'var(--text-soft)', lineHeight: 1.6 }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="city-info-card">
                <div className="city-info-title">Dépannage urgence</div>
                {[
                  { label: 'Disponibilité', val: '7J/7 · 365 jours/an' },
                  { label: 'Zone', val: '90 km · Ain, Jura, Saône-et-Loire' },
                  { label: 'Devis', val: 'Gratuit avant intervention' },
                  { label: 'Artisan', val: 'CAP · Compagnons du Tour' },
                ].map((item) => (
                  <div key={item.label} className="city-info-item">
                    <div><div className="cit-label">{item.label}</div><div className="cit-val">{item.val}</div></div>
                  </div>
                ))}
                <a href="tel:+33698956423" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '.9rem', borderRadius: '10px', fontSize: '.88rem' }}>
                  06 98 95 64 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection title="Demande d'intervention urgente" />
      <Footer />
    </>
  )
}
