import { useCounter } from '../hooks/useCounter'

export default function Urgence() {
  const stat90 = useCounter(90)
  const stat7 = useCounter(7)
  return (
    <section className="section urgence-section" id="urgence">
      <div className="container">
        <div className="urgence-grid">
          <div className="reveal">
            <div className="label-tag" style={{ color: 'rgba(255,255,255,.45)' }}>Dépannage express</div>
            <h2 className="urgence-title">Besoin d'un<br />serrurier <em>maintenant</em> ?</h2>
            <p className="urgence-body">
              Ne restez pas bloqué devant votre porte. Christophe répond en direct, pas d'opérateur, pas de machine, une vraie personne qualifiée qui se déplace.
            </p>
            <a href="tel:0698956423" className="btn-phone-xl" style={{ marginBottom: '1.8rem', display: 'inline-flex' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
              </svg>
              06 98 95 64 23
            </a>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div ref={stat7.ref}><div className="urgence-stat">{stat7.count}J/7</div><div className="urgence-stat-label">Jours fériés inclus</div></div>
              <div ref={stat90.ref}><div className="urgence-stat">{stat90.count} km</div><div className="urgence-stat-label">Autour de Montrevel</div></div>
              <div><div className="urgence-stat">0 €</div><div className="urgence-stat-label">Devis gratuit</div></div>
            </div>
          </div>

          <div className="urgence-cards reveal reveal-delay-1">
            <div className="urgence-card">
              <div className="urgence-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <div>
                <div className="urgence-card-title">Porte claquée</div>
                <div className="urgence-card-sub">Ouverture sans casse si possible</div>
              </div>
            </div>

            <div className="urgence-card">
              <div className="urgence-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="urgence-card-title">Après effraction</div>
                <div className="urgence-card-sub">Sécurisation immédiate</div>
              </div>
            </div>

            <div className="urgence-card">
              <div className="urgence-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                  <circle cx="9" cy="9" r="4" /><path d="M13 9h8" />
                </svg>
              </div>
              <div>
                <div className="urgence-card-title">Clé perdue</div>
                <div className="urgence-card-sub">Remplacement ou reproduction</div>
              </div>
            </div>

            <div className="urgence-card">
              <div className="urgence-card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <div className="urgence-card-title">Serrure bloquée / cassée</div>
                <div className="urgence-card-sub">Diagnostic et remplacement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
