export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-vis reveal-left">
            <img
              src="/christophe.jpg"
              alt="Christophe, serrurier artisan à Montrevel-en-Bresse"
              className="about-photo"
              style={{ opacity: 1 }}
            />
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

          <div className="reveal-right">
            <div className="label-tag">À propos</div>
            <h2 className="section-title" style={{ marginBottom: '1.3rem' }}>
              Un artisan <em>de confiance</em> près de chez vous
            </h2>
            <p className="about-text-big">
              Christophe est votre serrurier indépendant basé à <strong>Montrevel-en-Bresse</strong>.
            </p>
            <p className="about-body">
              Formé chez les <strong>Compagnons du Tour de France</strong> et titulaire d'un <strong>CAP Serrurier Métallier</strong>, il met son savoir-faire au service des particuliers et professionnels de l'Ain, du Jura et de la Saône-et-Loire.<br /><br />
              Artisan indépendant : vous parlez directement à celui qui intervient chez vous, sans centrale téléphonique, sans sous-traitant.
            </p>
            <ul className="check-list">
              <li>Intervention rapide 7J/7, y compris jours fériés</li>
              <li>Devis gratuit et prix transparent avant intervention</li>
              <li>Ouverture sans casse si possible</li>
              <li>Garantie sur les équipements installés</li>
            </ul>
            <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
              <a href="tel:0698956423" className="btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
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
