import { Link } from 'react-router-dom'
import { ARTICLES } from '../../data/articles'
import { useSEO } from '../../hooks/useSEO'
import { useReveal } from '../../hooks/useReveal'
import Footer from '../Footer'

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPage() {
  useReveal()
  useSEO({
    title: 'Blog serrurier — Conseils sécurité & serrurerie · Christophe',
    description: 'Conseils d\'expert en serrurerie : choisir sa serrure, sécuriser son domicile, que faire en cas d\'urgence. Par Christophe Le Serrurier, Montrevel-en-Bresse.',
    canonical: 'https://christophe-leserrurier.fr/blog/',
  })

  return (
    <>
      {/* Hero */}
      <div style={{ background: 'var(--navy)', padding: '5rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,86,35,.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1160, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="label-tag" style={{ color: 'rgba(255,255,255,.5)' }}>Expertise & conseils</div>
          <h1 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: 'clamp(2.2rem,4.5vw,3.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.05, margin: '.5rem 0 1rem' }}>
            Blog <span style={{ color: 'var(--orange)' }}>& Conseils</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.6)', maxWidth: 520, lineHeight: 1.7 }}>
            Conseils pratiques, guides d'achat et réponses aux questions fréquentes — par un artisan serrurier de terrain.
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div style={{ background: 'var(--gray-50)', padding: '4rem 2.5rem 5rem' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.8rem' }} className="blog-grid">
            {ARTICLES.map((article, i) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className={`blog-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="blog-card-img">
                  <img src={article.photo} alt={article.photoAlt} className="blog-card-photo" loading="lazy" />
                  <div className="blog-card-overlay" />
                  <span className="blog-card-cat">{article.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{formatDate(article.date)}</span>
                    <span className="blog-meta-sep">·</span>
                    <span>{article.readTime} min de lecture</span>
                  </div>
                  <h2 className="blog-card-title">{article.title}</h2>
                  <p className="blog-card-excerpt">{article.excerpt}</p>
                  <span className="blog-card-link">Lire l'article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
