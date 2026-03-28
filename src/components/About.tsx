export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-vis reveal">
            <svg width="260" height="300" viewBox="0 0 260 300" fill="none" style={{ position: 'relative', zIndex: 1 }}>
              <circle cx="130" cy="85" r="45" fill="rgba(64,110,183,.25)" stroke="rgba(64,110,183,.4)" strokeWidth="2" />
              <circle cx="130" cy="75" r="28" fill="rgba(100,148,212,.3)" />
              <path d="M80 160 Q80 130 130 125 Q180 130 180 160 L190 260 H70 Z" fill="rgba(64,110,183,.2)" stroke="rgba(64,110,183,.35)" strokeWidth="1.5" />
              <rect x="78" y="195" width="104" height="14" rx="4" fill="rgba(233,86,35,.25)" stroke="rgba(233,86,35,.4)" strokeWidth="1" />
              <circle cx="115" cy="202" r="7" stroke="rgba(255,255,255,.5)" strokeWidth="1.5" fill="none" />
              <rect x="121" y="200" width="22" height="4" rx="1.5" fill="rgba(255,255,255,.4)" />
              <path d="M148 198 Q155 192 162 198 Q165 205 158 210 L148 210 Z" fill="rgba(255,255,255,.3)" stroke="rgba(255,255,255,.4)" strokeWidth="1" />
              <ellipse cx="130" cy="52" rx="35" ry="12" fill="rgba(233,86,35,.5)" stroke="rgba(233,86,35,.7)" strokeWidth="1.5" />
              <rect x="100" y="52" width="60" height="18" rx="3" fill="rgba(233,86,35,.4)" stroke="rgba(233,86,35,.6)" strokeWidth="1" />
              <polygon points="130,54 132,59 137,59 133,62 135,67 130,64 125,67 127,62 123,59 128,59" fill="rgba(255,255,255,.6)" />
            </svg>
            <div className="about-vis-overlay" />
            <div className="about-vis-caption">
              <div className="name">Christophe</div>
              <div className="sub">Serrurier · Montrevel-en-Bresse</div>
              <div className="cap-badge" style={{ display: 'inline-flex' }}>
                <div className="cap-badge-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div>
                  <div className="cap-badge-val">CAP</div>
                  <div className="cap-badge-label">Compagnons du Tour de France</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="label-tag">À propos</div>
            <h2 className="section-title" style={{ marginBottom: '1.3rem' }}>
              Un artisan <em>de confiance</em> près de chez vous
            </h2>
            <p className="about-text-big">
              Christophe est votre serrurier indépendant basé à <strong>Montrevel-en-Bresse</strong>.
            </p>
            <p className="about-body">
              Formé chez les <strong>Compagnons du Tour de France</strong> et titulaire d'un <strong>CAP Serrurier Métallier</strong>, il met son savoir-faire au service des particuliers et professionnels de l'Ain, du Jura et de la Saône-et-Loire.<br /><br />
              Artisan indépendant : vous parlez directement à celui qui intervient chez vous — sans centrale téléphonique, sans sous-traitant.
            </p>
            <ul className="check-list">
              <li>Intervention rapide 7J/7, y compris jours fériés</li>
              <li>Devis gratuit et prix transparent avant intervention</li>
              <li>Ouverture sans casse si possible</li>
              <li>Garantie sur les équipements installés</li>
            </ul>
            <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
              <a href="tel:0698956423" className="btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 12.18 19.79 19.79 0 016.07 3.52 2 2 0 018.05 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L12.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Appeler maintenant
              </a>
              <a href="#contact" className="btn-outline">Devis gratuit</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
