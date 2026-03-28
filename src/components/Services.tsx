export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.2rem' }} className="reveal">
          <div className="label-tag" style={{ justifyContent: 'center' }}>Ce que je fais</div>
          <h2 className="section-title">Mes <em>Services</em></h2>
          <p style={{ color: 'var(--text-soft)', marginTop: '.9rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', fontSize: '.93rem', lineHeight: '1.7' }}>
            Du dépannage d'urgence à la sécurisation complète de votre logement.
          </p>
        </div>

        <div className="services-grid reveal reveal-delay-1">
          {/* Featured */}
          <div className="service-card featured">
            <div className="svc-img" style={{ height: 'auto', padding: '2rem' }}>
              <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=700&q=80" className="svc-photo" alt="" />
              <div className="svc-photo-overlay" style={{ background: 'linear-gradient(135deg,rgba(13,24,70,.88) 0%,rgba(233,86,35,.6) 100%)' }} />
              <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                <rect x="18" y="70" width="124" height="80" rx="14" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.25)" strokeWidth="2" />
                <path d="M52 70 L52 48 Q52 18 80 18 Q108 18 108 48 L108 70" stroke="rgba(255,255,255,.6)" strokeWidth="10" strokeLinecap="round" fill="none" />
                <circle cx="80" cy="108" r="16" fill="rgba(233,86,35,.3)" stroke="rgba(233,86,35,.8)" strokeWidth="2" />
                <circle cx="80" cy="104" r="7" fill="rgba(255,255,255,.6)" />
                <rect x="76" y="109" width="8" height="14" rx="2" fill="rgba(255,255,255,.6)" />
              </svg>
            </div>
            <div className="service-body">
              <div className="svc-icon-row">
                <div className="svc-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <span style={{ fontSize: '.67rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--orange)', padding: '.22rem .7rem', background: 'rgba(233,86,35,.1)', borderRadius: '50px' }}>Service phare</span>
              </div>
              <div className="svc-name">Ouverture de porte en urgence</div>
              <div className="svc-desc" style={{ fontSize: '.87rem' }}>
                Clé perdue, porte claquée, serrure bloquée ? Christophe intervient rapidement, 7J/7 y compris jours fériés. Ouverture sans casse si possible.
              </div>
              <a href="tel:0698956423" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', marginTop: '1.3rem', color: 'var(--orange)', fontWeight: 700, fontSize: '.87rem', textDecoration: 'none' }}>
                Appeler maintenant →
              </a>
            </div>
          </div>

          {/* Installation & Blindage */}
          <div className="service-card">
            <div className="svc-img" style={{ background: 'linear-gradient(135deg,#0f3460,#1a4080)' }}>
              <img src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=600&q=80" className="svc-photo" alt="" />
              <div className="svc-photo-overlay" style={{ background: 'linear-gradient(135deg,rgba(15,52,96,.92) 0%,rgba(26,64,128,.75) 100%)' }} />
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <path d="M50 90 S82 70 82 46 L82 22 L50 10 L18 22 L18 46 C18 70 50 90 50 90Z" fill="rgba(64,110,183,.2)" stroke="rgba(64,110,183,.6)" strokeWidth="2" strokeLinejoin="round" />
                <path d="M36 48 L44 56 L64 36" stroke="rgba(64,183,120,.9)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="service-body">
              <div className="svc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#406EB7" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="svc-name">Installation &amp; Blindage</div>
              <div className="svc-desc">Serrures haute sécurité, blindage de portes, systèmes multipoints. Protection renforcée contre les intrusions.</div>
            </div>
          </div>

          {/* Duplication de clés */}
          <div className="service-card">
            <div className="svc-img" style={{ background: 'linear-gradient(135deg,#1a3460,#406EB7)' }}>
              <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80" className="svc-photo" alt="" />
              <div className="svc-photo-overlay" style={{ background: 'linear-gradient(135deg,rgba(26,52,96,.9) 0%,rgba(64,110,183,.7) 100%)' }} />
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                <circle cx="22" cy="30" r="18" stroke="rgba(255,255,255,.7)" strokeWidth="3" fill="none" />
                <circle cx="22" cy="30" r="8" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.5)" strokeWidth="2" />
                <rect x="40" y="27" width="72" height="7" rx="3" fill="rgba(255,255,255,.6)" />
                <rect x="86" y="27" width="6" height="14" rx="2" fill="rgba(255,255,255,.7)" />
                <rect x="98" y="27" width="6" height="11" rx="2" fill="rgba(255,255,255,.7)" />
              </svg>
            </div>
            <div className="service-body">
              <div className="svc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#406EB7" strokeWidth="2" strokeLinecap="round">
                  <circle cx="9" cy="9" r="4" /><path d="M13 9h8M17 7v4" /><path d="M13 13l-3 8" />
                </svg>
              </div>
              <div className="svc-name">Duplication de clés</div>
              <div className="svc-desc">Reproduction de tous types de clés, y compris les modèles sécurisés brevetés. Service rapide et précis.</div>
            </div>
          </div>

          {/* Sécurisation effraction */}
          <div className="service-card">
            <div className="svc-img" style={{ background: 'linear-gradient(135deg,#4a0a0a,#8a1a1a)' }}>
              <img src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=600&q=80" className="svc-photo" alt="" />
              <div className="svc-photo-overlay" style={{ background: 'linear-gradient(135deg,rgba(74,10,10,.9) 0%,rgba(138,26,26,.75) 100%)' }} />
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                <rect x="15" y="10" width="55" height="75" rx="6" stroke="rgba(255,255,255,.4)" strokeWidth="2.5" fill="rgba(255,255,255,.05)" />
                <path d="M45 10 L45 85" stroke="rgba(255,255,255,.15)" strokeWidth="1" />
                <path d="M35 40 Q40 32 45 36 Q50 40 55 34" stroke="rgba(233,86,35,.8)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <circle cx="65" cy="20" r="12" fill="rgba(233,86,35,.2)" stroke="rgba(233,86,35,.5)" strokeWidth="1.5" />
                <path d="M60 20 L64 24 L71 16" stroke="rgba(233,86,35,.9)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="service-body">
              <div className="svc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#406EB7" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="svc-name">Sécurisation effraction</div>
              <div className="svc-desc">Intervention d'urgence pour sécuriser après un cambriolage. Remplacement et renforcement immédiat.</div>
            </div>
          </div>

          {/* Résidentiel & Professionnel */}
          <div className="service-card">
            <div className="svc-img" style={{ background: 'linear-gradient(135deg,#0f2440,#1a4060)' }}>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80" className="svc-photo" alt="" />
              <div className="svc-photo-overlay" style={{ background: 'linear-gradient(135deg,rgba(15,36,64,.92) 0%,rgba(26,64,96,.75) 100%)' }} />
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
                <path d="M10 80 L10 35 L50 8 L90 35 L90 80" stroke="rgba(255,255,255,.5)" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(255,255,255,.05)" />
                <rect x="36" y="50" width="28" height="30" rx="2" fill="rgba(64,110,183,.3)" stroke="rgba(64,110,183,.6)" strokeWidth="1.5" />
                <circle cx="50" cy="65" r="4" fill="rgba(255,255,255,.5)" />
                <rect x="10" y="35" width="80" height="5" rx="1" fill="rgba(233,86,35,.3)" stroke="rgba(233,86,35,.4)" strokeWidth="1" />
              </svg>
            </div>
            <div className="service-body">
              <div className="svc-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#406EB7" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" />
                </svg>
              </div>
              <div className="svc-name">Résidentiel &amp; Professionnel</div>
              <div className="svc-desc">Solutions complètes maisons, appartements, locaux commerciaux. Contrôle d'accès, digicode, badges.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
