import { Link } from 'react-router-dom'
import { useSEO } from '../../hooks/useSEO'
import Footer from '../Footer'

export default function NotFound() {
  useSEO({ title: 'Page introuvable — Christophe Le Serrurier', description: '' })

  return (
    <>
      <section style={{ background: 'var(--navy)', minHeight: '60vh', display: 'flex', alignItems: 'center', padding: '4rem 2.5rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '6rem', fontWeight: 800, color: 'var(--orange)', lineHeight: 1 }}>404</div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.8rem', color: '#fff', margin: '1rem 0' }}>Page introuvable</h1>
          <p style={{ color: 'rgba(255,255,255,.55)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Cette page n'existe pas. Si vous avez besoin d'un serrurier en urgence, appelez directement.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+33698956423" className="btn-primary">📞 06 98 95 64 23</a>
            <Link to="/" className="btn-outline" style={{ color: 'rgba(255,255,255,.7)', borderColor: 'rgba(255,255,255,.2)' }}>Retour à l'accueil</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
