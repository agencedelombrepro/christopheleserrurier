import { useEffect, useRef, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

interface HeroProps {
  onGoTo: (sectionId: string, label: string) => void
}

export default function Hero({ onGoTo }: HeroProps) {
  const stat90 = useCounter(90)
  const stat7 = useCounter(7)
  const patRef = useRef<HTMLDivElement>(null)
  const [riShow, setRiShow] = useState(false)
  const [riText, setRiText] = useState('')
  const [riFillW, setRiFillW] = useState('0%')
  const rTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const pat = patRef.current
    if (!pat) return
    for (let i = 0; i < 12; i++) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.setAttribute('viewBox', '0 0 80 30')
      svg.setAttribute('width', String(40 + Math.random() * 60))
      svg.innerHTML =
        '<circle cx="12" cy="15" r="11" stroke="white" stroke-width="3" fill="none"/>' +
        '<circle cx="12" cy="15" r="5" fill="white" opacity=".3"/>' +
        '<rect x="23" y="13" width="50" height="5" rx="2" fill="white"/>' +
        '<rect x="58" y="13" width="5" height="10" rx="2" fill="white"/>' +
        '<rect x="68" y="13" width="5" height="8" rx="2" fill="white"/>'
      svg.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;transform:rotate(${Math.random() * 360}deg);animation:floatKey ${15 + Math.random() * 20}s ease-in-out infinite;animation-delay:${-Math.random() * 20}s`
      pat.appendChild(svg)
    }
  }, [])

  function handleGoTo(sectionId: string, label: string) {
    if (rTimer.current) clearTimeout(rTimer.current)
    setRiText('→ ' + label)
    setRiShow(true)
    setRiFillW('0%')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setRiFillW('100%'))
    })
    rTimer.current = setTimeout(() => {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => { setRiShow(false); setRiFillW('0%') }, 600)
    }, 1400)
    onGoTo(sectionId, label)
  }

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-pattern" ref={patRef} />
        <div className="hero-gradient" />
      </div>

      {/* Right panel illustration */}
      <div className="hero-photo-panel">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
          alt=""
          aria-hidden="true"
          className="hero-photo-bg"
        />
        <div className="hero-photo-inner" style={{ background: 'linear-gradient(135deg,rgba(13,24,70,.85) 0%,rgba(35,65,160,.7) 40%,rgba(13,24,70,.9) 100%)' }}>
          <svg width="340" height="400" viewBox="0 0 340 400" fill="none" opacity=".9">
            <path d="M100 165 L100 100 Q100 38 170 38 Q240 38 240 100 L240 165" stroke="rgba(233,86,35,.7)" strokeWidth="22" strokeLinecap="round" fill="none" />
            <rect x="52" y="158" width="236" height="195" rx="24" fill="rgba(64,110,183,.12)" stroke="rgba(64,110,183,.4)" strokeWidth="2.5" />
            <path d="M68 178 L112 178" stroke="rgba(255,255,255,.12)" strokeWidth="10" strokeLinecap="round" />
            <circle cx="170" cy="237" r="32" fill="rgba(233,86,35,.12)" stroke="rgba(233,86,35,.55)" strokeWidth="2.5" />
            <circle cx="170" cy="230" r="15" fill="rgba(13,24,70,.9)" stroke="rgba(233,86,35,.75)" strokeWidth="1.5" />
            <path d="M162 241 L178 241 L175 275 L165 275 Z" fill="rgba(13,24,70,.9)" stroke="rgba(233,86,35,.75)" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="80" cy="188" r="7" fill="rgba(64,110,183,.3)" stroke="rgba(64,110,183,.5)" strokeWidth="1.2" />
            <circle cx="260" cy="188" r="7" fill="rgba(64,110,183,.3)" stroke="rgba(64,110,183,.5)" strokeWidth="1.2" />
            <circle cx="80" cy="330" r="7" fill="rgba(64,110,183,.3)" stroke="rgba(64,110,183,.5)" strokeWidth="1.2" />
            <circle cx="260" cy="330" r="7" fill="rgba(64,110,183,.3)" stroke="rgba(64,110,183,.5)" strokeWidth="1.2" />
            <circle cx="170" cy="237" r="55" fill="rgba(233,86,35,.07)" />
          </svg>
          <svg style={{ position: 'absolute', top: 60, right: 50, opacity: .25, animation: 'floatKey 6s ease-in-out infinite' }} width="80" height="30" viewBox="0 0 80 30">
            <circle cx="12" cy="15" r="11" stroke="white" strokeWidth="3" fill="none" />
            <rect x="23" y="13" width="50" height="5" rx="2" fill="white" />
            <rect x="58" y="13" width="5" height="10" rx="2" fill="white" />
            <rect x="68" y="13" width="5" height="8" rx="2" fill="white" />
          </svg>
          <svg style={{ position: 'absolute', bottom: 80, left: 50, opacity: .2, animation: 'floatKey 8s ease-in-out infinite reverse' }} width="60" height="140" viewBox="0 0 60 140">
            <circle cx="30" cy="25" r="20" stroke="white" strokeWidth="3.5" fill="none" />
            <rect x="24" y="44" width="12" height="65" fill="white" rx="2" />
            <rect x="24" y="86" width="18" height="7" rx="2" fill="white" />
            <rect x="24" y="75" width="15" height="7" rx="2" fill="white" />
          </svg>
        </div>
      </div>

      <div className="hero-content">
        <div>
          <div className="hero-eyebrow"><div className="eyebrow-dot" /> Disponible maintenant · 7J/7</div>
          <h1 className="hero-title">
            Votre Serrurier<br />de <span className="accent">Confiance</span><br />&amp; Réactivité
          </h1>
          <p className="hero-sub">
            Artisan diplômé CAP · Compagnons du Tour de France<br />
            Intervention rapide dans un rayon de 90 km autour de Montrevel-en-Bresse.
          </p>
          <div className="hero-actions">
            <a href="tel:0698956423" className="btn-phone-xl">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
              </svg>
              06 98 95 64 23
            </a>
            <a href="#services" className="btn-outline" style={{ color: 'rgba(255,255,255,.75)', borderColor: 'rgba(255,255,255,.2)' }}>
              Voir les services
            </a>
          </div>
          <div className="hero-stats">
            <div ref={stat7.ref}><div className="hero-stat-val">{stat7.count}J/7</div><div className="hero-stat-label">Disponibilité</div></div>
            <div ref={stat90.ref}><div className="hero-stat-val">{stat90.count} km</div><div className="hero-stat-label">Rayon d'action</div></div>
            <div><div className="hero-stat-val">CAP</div><div className="hero-stat-label">Diplômé</div></div>
            <div><div className="hero-stat-val">0 €</div><div className="hero-stat-label">Devis</div></div>
          </div>
        </div>

        {/* Emergency card */}
        <div className="hero-card">
          <div className="ec-title">Quelle est votre urgence ?</div>
          <div className="ec-sub">Cliquez pour accéder à la bonne section</div>

          <button className="em-btn urg" onClick={() => handleGoTo('urgence', 'Porte claquée')}>
            <div className="em-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /><circle cx="12" cy="16" r="1.5" fill="#E95623" stroke="none" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <span className="em-label">Porte claquée / Bloquée <span className="ub">URGENT</span></span>
              <span className="em-desc">Ouverture sans casse si possible, 7J/7</span>
            </div>
            <span style={{ color: 'var(--gray-400)', transition: 'all .25s' }}>→</span>
          </button>

          <button className="em-btn urg" onClick={() => handleGoTo('urgence', 'Après effraction')}>
            <div className="em-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <span className="em-label">Après effraction <span className="ub">URGENT</span></span>
              <span className="em-desc">Sécurisation immédiate du domicile</span>
            </div>
            <span style={{ color: 'var(--gray-400)' }}>→</span>
          </button>

          <button className="em-btn" onClick={() => handleGoTo('services', 'Serrure / Clé')}>
            <div className="em-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#406EB7" strokeWidth="2" strokeLinecap="round">
                <circle cx="9" cy="9" r="4" /><path d="M13 9h8M17 7v4" /><path d="M13 13l-3 8" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <span className="em-label">Serrure / Clé / Installation</span>
              <span className="em-desc">Remplacement, blindage, duplication</span>
            </div>
            <span style={{ color: 'var(--gray-400)' }}>→</span>
          </button>

          <button className="em-btn" onClick={() => handleGoTo('contact', 'Devis gratuit')}>
            <div className="em-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#406EB7" strokeWidth="2" strokeLinecap="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <span className="em-label">Demande de devis gratuit</span>
              <span className="em-desc">Projet résidentiel ou professionnel</span>
            </div>
            <span style={{ color: 'var(--gray-400)' }}>→</span>
          </button>

          <div className={`redirect-indicator${riShow ? ' show' : ''}`}>
            <div className="ri-dot" />
            <div className="ri-text">{riText}</div>
            <div className="ri-bar">
              <div className="ri-fill" style={{ width: riFillW, transition: riFillW === '100%' ? 'width 1.4s linear' : 'none' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
