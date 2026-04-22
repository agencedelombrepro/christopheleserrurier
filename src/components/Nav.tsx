import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CITIES } from '../data/cities'

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // Anchor links work on home ; on other pages, redirect to /#section
  function anchorHref(id: string) {
    return isHome ? `#${id}` : `/#${id}`
  }

  return (
    <>
      <nav id="mainNav">
        <Link to="/" className="nav-logo">
          <img src="/logo-clair.png" alt="Christophe Le Serrurier" className="nav-logo-img" />
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><a href={anchorHref('urgence')}>Urgence</a></li>
          <li><a href={anchorHref('services')}>Services</a></li>
          <li className="has-sub">
            <a>Villes ▾</a>
            <div className="nav-dropdown">
              {CITIES.filter((c) => c.tier <= 2).map((c) => (
                <Link key={c.slug} to={`/zones-intervention/serrurier-${c.slug}`}>
                  {c.name}
                </Link>
              ))}
            </div>
          </li>
          <li><Link to="/realisations">Réalisations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>

        <a href="tel:+33698956423" className="nav-phone">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
          </svg>
          06 98 95 64 23
        </a>

        <button className="hamburger" onClick={() => setDrawerOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-overlay${drawerOpen ? ' open' : ''}`} onClick={() => setDrawerOpen(false)} />
      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="mobile-drawer-header">
          <span style={{ fontFamily: "'Clear Sans',sans-serif", fontWeight: 700, color: 'var(--navy)' }}>Menu</span>
          <button className="mobile-close" onClick={() => setDrawerOpen(false)}>✕</button>
        </div>
        <Link className="drawer-link" to="/" onClick={() => setDrawerOpen(false)}>Accueil</Link>
        <a className="drawer-link" href={anchorHref('urgence')} onClick={() => setDrawerOpen(false)}>Urgence</a>
        <a className="drawer-link" href={anchorHref('services')} onClick={() => setDrawerOpen(false)}>Services</a>
        <Link className="drawer-link" to="/realisations" onClick={() => setDrawerOpen(false)}>Réalisations</Link>
        <Link className="drawer-link" to="/contact" onClick={() => setDrawerOpen(false)}>Contact</Link>
        <Link className="drawer-link" to="/blog" onClick={() => setDrawerOpen(false)}>Blog</Link>
        <div className="drawer-link" style={{ cursor: 'default', color: 'var(--text-soft)', fontSize: '.78rem', padding: '.5rem 0' }}>VILLES :</div>
        <div className="drawer-cities">
          {CITIES.filter((c) => c.tier <= 2).map((c) => (
            <Link key={c.slug} to={`/zones-intervention/serrurier-${c.slug}`} onClick={() => setDrawerOpen(false)}>
              {c.name}
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '1.3rem' }}>
          <a href="tel:+33698956423" className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '11px' }}>
            06 98 95 64 23
          </a>
        </div>
      </div>
    </>
  )
}
