export default function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="trust-item">
        <svg className="trust-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
        <span className="trust-text">Intervention rapide 7J/7</span>
      </div>
      <div className="trust-item">
        <svg className="trust-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
        </svg>
        <span className="trust-text">CAP Serrurier Métallier</span>
      </div>
      <div className="trust-item">
        <svg className="trust-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span className="trust-text">Compagnons du Tour de France</span>
      </div>
      <div className="trust-item">
        <svg className="trust-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
        <span className="trust-text">Devis gratuit &amp; transparent</span>
      </div>
      <div className="trust-item">
        <svg className="trust-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
        <span className="trust-text">Rayon 90 km · Montrevel</span>
      </div>
    </div>
  )
}
