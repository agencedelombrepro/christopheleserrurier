import { useParams, Link, Navigate } from 'react-router-dom'
import { ARTICLE_BY_SLUG, ARTICLES } from '../../data/articles'
import { useSEO } from '../../hooks/useSEO'
import Footer from '../Footer'

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? ARTICLE_BY_SLUG.get(slug) : undefined

  useSEO(article ? {
    title: `${article.title} — Christophe Le Serrurier`,
    description: article.excerpt,
    canonical: `https://christophe-leserrurier.fr/blog/${article.slug}/`,
  } : { title: 'Article introuvable', description: '' })

  if (!article) return <Navigate to="/blog" replace />

  const related = ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <div style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
        <img src={article.photo} alt={article.photoAlt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .18 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,24,70,.7), rgba(13,24,70,.97))' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', padding: '5rem 2.5rem 4rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <Link to="/blog" style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>← Blog</Link>
            <span style={{ color: 'rgba(255,255,255,.2)', margin: '0 .6rem' }}>/</span>
            <span style={{ fontSize: '.8rem', color: 'var(--orange)' }}>{article.category}</span>
          </div>
          <h1 style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1.2rem' }}>{article.title}</h1>
          <div style={{ display: 'flex', gap: '1.2rem', fontSize: '.8rem', color: 'rgba(255,255,255,.45)', flexWrap: 'wrap' }}>
            <span>{formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readTime} min de lecture</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ background: '#fff', padding: '4rem 2.5rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-soft)', lineHeight: 1.8, marginBottom: '1.8rem', fontStyle: 'italic', borderLeft: '3px solid var(--orange)', paddingLeft: '1.2rem' }}>
            {article.excerpt}
          </p>
          {article.content.map((para, i) => (
            <p key={i} style={{ fontSize: '.97rem', color: 'var(--text-soft)', lineHeight: 1.9, marginBottom: '1.4rem' }}>{para}</p>
          ))}

          {/* CTA */}
          <div style={{ marginTop: '3rem', background: 'var(--navy)', borderRadius: 18, padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Clear Sans',sans-serif", fontWeight: 700, color: '#fff', fontSize: '1.1rem', marginBottom: '.4rem' }}>Besoin d'un serrurier ?</div>
              <div style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.6 }}>Christophe intervient 7J/7 dans l'Ain, le Jura et la Saône-et-Loire.</div>
            </div>
            <a href="tel:+33698956423" className="btn-primary">06 98 95 64 23</a>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div style={{ background: 'var(--gray-50)', padding: '4rem 2.5rem' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <div className="label-tag">Sur le même sujet</div>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Articles <em>similaires</em></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.4rem' }} className="blog-grid">
              {related.map((a) => (
                <Link key={a.slug} to={`/blog/${a.slug}`} className="blog-card" style={{ textDecoration: 'none' }}>
                  <div className="blog-card-img">
                    <img src={a.photo} alt={a.photoAlt} className="blog-card-photo" loading="lazy" />
                    <div className="blog-card-overlay" />
                    <span className="blog-card-cat">{a.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta"><span>{formatDate(a.date)}</span></div>
                    <h3 className="blog-card-title">{a.title}</h3>
                    <span className="blog-card-link">Lire →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
