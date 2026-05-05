import { useSEO } from '../../hooks/useSEO'
import { serviceSchema } from '../../utils/schema'
import { useReveal } from '../../hooks/useReveal'
import ContactSection from '../ContactSection'
import Footer from '../Footer'
import TrustStrip from '../TrustStrip'

export default function ServiceSecurisation() {
  useReveal()
  useSEO({
    title: 'Sécurisation après cambriolage — Serrurier Ain · Christophe',
    description: 'Sécurisation urgente après effraction ou cambriolage. Remplacement serrure, blindage, intervention immédiate 7J/7 · Ain, Jura, Saône-et-Loire. ☎ 06 98 95 64 23',
    canonical: 'https://christophe-serrurier-ain.fr/securisation-cambriolage/',
    jsonLd: serviceSchema('Sécurisation après cambriolage', 'Intervention d\'urgence pour sécuriser votre domicile après effraction. Remplacement de serrure, blindage, mise en sécurité immédiate.', '/securisation-cambriolage/'),
  })

  return (
    <>
      <section style={{ background: 'linear-gradient(135deg,#3d0000 0%,#7a1a1a 60%,#2d0808 100%)', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="label-tag" style={{ color: 'rgba(255,255,255,.5)' }}>Après effraction</div>
          <h1 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.2rem' }}>
            Sécurisation après<br /><span style={{ color: 'var(--orange)' }}>cambriolage</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.7, maxWidth: '560px', marginBottom: '2rem' }}>
            Votre domicile a été forcé. Vous avez besoin de le sécuriser <strong>ce soir même</strong>.
            Christophe intervient en urgence pour remplacer la serrure endommagée et renforcer les points d'entrée.
          </p>
          <a href="tel:+33698956423" className="btn-phone-xl">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.18 19.79 19.79 0 016.07 3.52 2 2 0 018.05 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L12.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Urgence : 06 98 95 64 23
          </a>
        </div>
      </section>

      <TrustStrip />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '760px' }}>
            <h2 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: '1.75rem', color: 'var(--navy)', marginBottom: '.9rem' }}>
              Que faire après un cambriolage ?
            </h2>
            <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.95rem' }}>
              Après une effraction, la porte ou la fenêtre forcée ne ferme plus correctement. C'est une urgence sécuritaire. Christophe intervient <strong>le soir même si nécessaire</strong> pour remettre votre domicile en sécurité.
            </p>

            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              {[
                { step: '1', title: 'Appelez le 06 98 95 64 23', text: 'Christophe évalue la situation par téléphone et vous donne une estimation de délai.' },
                { step: '2', title: 'Intervention sur place', text: 'Remplacement de la serrure endommagée, sécurisation provisoire si nécessaire, consolidation du point d\'entrée.' },
                { step: '3', title: 'Renforcement optionnel', text: 'Sur devis : blindage de porte, serrure haute sécurité, protection des autres accès.' },
              ].map((item) => (
                <div key={item.step} style={{ display: 'flex', gap: '1rem', marginBottom: '1.3rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '36px', height: '36px', background: 'var(--orange)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Clear Sans',sans-serif", fontWeight: 800, flexShrink: 0 }}>{item.step}</div>
                  <div>
                    <div style={{ fontFamily: "'Clear Sans',sans-serif", fontWeight: 700, color: 'var(--navy)', marginBottom: '.25rem' }}>{item.title}</div>
                    <div style={{ fontSize: '.88rem', color: 'var(--text-soft)', lineHeight: 1.6 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: '1.2rem 1.5rem', background: 'rgba(233,86,35,.05)', borderRadius: '12px', border: '1.5px solid rgba(233,86,35,.15)', fontSize: '.9rem', color: 'var(--text-soft)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--navy)' }}>Bon à savoir :</strong> Signalez le cambriolage à la gendarmerie ou au commissariat avant de toucher quoi que ce soit. Conservez le justificatif de dépôt de plainte. Votre assurance peut prendre en charge tout ou partie des frais de sécurisation.
            </div>
          </div>
        </div>
      </section>

      <ContactSection title="Sécurisation urgente après effraction" />
      <Footer />
    </>
  )
}
