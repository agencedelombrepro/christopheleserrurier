import { useSEO } from '../../hooks/useSEO'
import Footer from '../Footer'

export default function MentionsLegales() {
  useSEO({
    title: 'Mentions légales — Christophe Le Serrurier',
    description: 'Mentions légales du site christophe-leserrurier.fr — Christophe Le Serrurier, 255 rue des Luyers, 01340 Montrevel-en-Bresse.',
    canonical: 'https://christophe-leserrurier.fr/mentions-legales/',
  })

  return (
    <>
      <section className="section" style={{ background: '#fff', minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: '2rem', color: 'var(--navy)', marginBottom: '2rem' }}>Mentions légales</h1>

          {[
            {
              title: 'Éditeur du site',
              content: [
                'Nom commercial : Christophe Le Serrurier',
                'Adresse : 255 rue des Luyers, Domaine St Roch Bata, 01340 Montrevel-en-Bresse',
                'Téléphone : 06 98 95 64 23',
                'Email : christopheleserrurier@outlook.fr',
                'Activité : Serrurier artisan indépendant',
                'SIRET : en cours d\'enregistrement',
              ],
            },
            {
              title: 'Hébergement',
              content: ['Le site est hébergé par Cloudflare Pages — Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA.'],
            },
            {
              title: 'Propriété intellectuelle',
              content: ['L\'ensemble des contenus de ce site (textes, visuels, design) est la propriété de Christophe Le Serrurier ou de l\'Agence de l\'Ombre. Toute reproduction sans autorisation est interdite.'],
            },
            {
              title: 'Données personnelles',
              content: ['Les données collectées via le formulaire de contact (nom, téléphone, email) sont utilisées uniquement pour répondre à votre demande. Elles ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification et de suppression.'],
            },
            {
              title: 'Cookies',
              content: ['Ce site n\'utilise pas de cookies de traçage ou publicitaires.'],
            },
          ].map((section) => (
            <div key={section.title} style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '.75rem', borderBottom: '2px solid var(--orange)', paddingBottom: '.4rem', display: 'inline-block' }}>
                {section.title}
              </h2>
              {section.content.map((line, i) => (
                <p key={i} style={{ fontSize: '.9rem', color: 'var(--text-soft)', lineHeight: 1.7, marginBottom: '.4rem' }}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
