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
          <div className="nav-logo-icon">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
              <circle cx="9" cy="9" r="4.5" stroke="white" strokeWidth="2" />
              <path d="M13.5 9h7M17.5 6.5v5" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M13.5 13.5l-3.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <rect x="7" y="18" width="5" height="2.5" rx=".8" fill="white" />
              <rect x="7" y="15" width="4" height="2.5" rx=".8" fill="white" />
            </svg>
          </div>
          <div>
            <div className="nav-brand">Christophe Le Serrurier</div>
            <div className="nav-tagline">Montrevel-en-Bresse · 7J/7</div>
          </div>
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
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <a href="tel:+33698956423" className="nav-phone">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.18 19.79 19.79 0 016.07 3.52 2 2 0 018.05 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L12.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
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
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, color: 'var(--navy)' }}>Menu</span>
          <button className="mobile-close" onClick={() => setDrawerOpen(false)}>✕</button>
        </div>
        <Link className="drawer-link" to="/" onClick={() => setDrawerOpen(false)}>🏠 Accueil</Link>
        <a className="drawer-link" href={anchorHref('urgence')} onClick={() => setDrawerOpen(false)}>🚨 Urgence</a>
        <a className="drawer-link" href={anchorHref('services')} onClick={() => setDrawerOpen(false)}>🔧 Services</a>
        <Link className="drawer-link" to="/contact" onClick={() => setDrawerOpen(false)}>📝 Contact</Link>
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
            📞 06 98 95 64 23
          </a>
        </div>
      </div>
    </>
  )
}
