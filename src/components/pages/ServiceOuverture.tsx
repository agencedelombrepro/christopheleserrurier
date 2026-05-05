import { useSEO } from '../../hooks/useSEO'
import { serviceSchema } from '../../utils/schema'
import { useReveal } from '../../hooks/useReveal'
import ContactSection from '../ContactSection'
import Footer from '../Footer'
import TrustStrip from '../TrustStrip'

export default function ServiceOuverture() {
  useReveal()
  useSEO({
    title: 'Ouverture porte claquée — Serrurier Ain 7J/7 · Christophe',
    description: 'Porte claquée ou bloquée ? Serrurier artisan intervient rapidement sans casse si possible. 7J/7 · Ain, Jura, Saône-et-Loire. Devis gratuit. ☎ 06 98 95 64 23',
    canonical: 'https://christophe-serrurier-ain.fr/ouverture-porte-claquee/',
    jsonLd: serviceSchema('Ouverture de porte claquée', 'Ouverture de porte sans casse si possible. Porte claquée, clé perdue, serrure bloquée. Intervention 7J/7.', '/ouverture-porte-claquee/'),
  })

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#0D1846 0%,#E95623 100%)', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="label-tag" style={{ color: 'rgba(255,255,255,.6)' }}>Urgence porte</div>
          <h1 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Ouverture de porte<br /><span style={{ color: '#fff', opacity: .85 }}>claquée ou bloquée</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.75)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '2rem' }}>
            Clé oubliée à l'intérieur, porte claquée, serrure qui bloque ?
            Christophe ouvre votre porte <strong>sans abîmer la serrure</strong> si possible, 7 jours sur 7.
            Tarif annoncé avant intervention, sans mauvaise surprise.
          </p>
          <a href="tel:+33698956423" className="btn-phone-xl" style={{ background: '#fff', color: 'var(--orange)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
            </svg>
            06 98 95 64 23
          </a>
        </div>
      </section>

      <TrustStrip />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '760px' }}>
            <h2 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: '1.75rem', color: 'var(--navy)', marginBottom: '.9rem' }}>
              Ouverture sans casse — comment ça marche ?
            </h2>
            <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.95rem' }}>
              Christophe évalue d'abord la serrure avant de forcer quoi que ce soit. La plupart des serrures standard peuvent être ouvertes sans dommage grâce à des techniques professionnelles (crochetage, décalage, etc.). Si la serrure est ancienne ou endommagée et que le remplacement est inévitable, il vous prévient et vous propose un devis sur place.
            </p>
            <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.95rem' }}>
              <strong>Ce que vous ne risquez pas :</strong> une facture gonflée par une plateforme, un artisan qui ne connaît pas votre secteur, ou une serrure inutilement détruite.
            </p>
            <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, fontSize: '.95rem' }}>
              <strong>Ce que vous avez :</strong> un artisan <strong>CAP Serrurier Métallier</strong>, formé chez les <strong>Compagnons du Tour de France</strong>, qui vous parle directement au téléphone et vous donne un prix avant de se déplacer.
            </p>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(233,86,35,.05)', borderRadius: '14px', border: '1.5px solid rgba(233,86,35,.15)' }}>
              <div style={{ fontFamily: "'Clear Sans',sans-serif", fontWeight: 700, color: 'var(--navy)', marginBottom: '.5rem' }}>Comment ça se passe concrètement</div>
              {['Vous appelez le 06 98 95 64 23', 'Christophe vous donne un tarif indicatif par téléphone', 'Il arrive sur place et confirme le devis', 'Il ouvre la porte, sans casse si possible', 'Paiement après intervention : chèque, espèces ou virement'].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start', marginBottom: '.6rem' }}>
                  <div style={{ width: '22px', height: '22px', background: 'var(--orange)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ fontSize: '.9rem', color: 'var(--text-soft)', paddingTop: '2px' }}>{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection title="Porte claquée ? Appelez maintenant" />
      <Footer />
    </>
  )
}
