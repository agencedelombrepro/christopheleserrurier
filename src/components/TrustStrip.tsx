const ITEMS = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    text: 'Intervention rapide 7J/7',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2.5" strokeLinecap="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    text: 'CAP Serrurier Métallier',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: 'Compagnons du Tour de France',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2.5" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    text: 'Devis gratuit & transparent',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2.5" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: 'Rayon 90 km · Montrevel',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2.5" strokeLinecap="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    text: 'Ouverture sans casse si possible',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="9" cy="9" r="4" /><path d="M13 9h8M17 7v4" /><path d="M13 13l-3 8" />
      </svg>
    ),
    text: 'Artisan indépendant certifié',
  },
]

export default function TrustStrip() {
  return (
    <div className="trust-marquee-wrap">
      <div className="trust-marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="trust-item-m">
            {item.icon}
            <span style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.75)', fontWeight: 500 }}>{item.text}</span>
            <span className="trust-sep">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
