import { useRef, useState } from 'react'
import { REVIEWS } from '../data/reviews'

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < n ? '#FBBC04' : 'none'} stroke={i < n ? '#FBBC04' : '#d1d5db'} strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
  const colors = ['#0D1846', '#E95623', '#406EB7', '#2d5aa0', '#c94e1e']
  const color = colors[name.charCodeAt(0) % colors.length]
  return (
    <div style={{ width: 38, height: 38, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '.78rem', fontWeight: 700, color: '#fff', fontFamily: "'Clear Sans',sans-serif" }}>
      {initials}
    </div>
  )
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  function onMouseDown(e: React.MouseEvent) {
    setIsDragging(true)
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0)
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0
  }
  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current)
  }
  function stopDrag() { setIsDragging(false) }

  const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1)

  return (
    <section className="section" style={{ background: 'var(--navy)', overflow: 'hidden' }} id="avis">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div className="reveal">
            <div className="label-tag" style={{ color: 'rgba(255,255,255,.45)' }}>Avis clients</div>
            <h2 className="section-title" style={{ color: '#fff', marginBottom: '.5rem' }}>
              Ce que disent <span style={{ color: 'var(--orange)' }}>mes clients</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-1" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,.06)', borderRadius: '14px', padding: '.8rem 1.4rem', border: '1px solid rgba(255,255,255,.1)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Clear Sans',sans-serif", fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{avg}</div>
              <Stars n={5} />
              <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.45)', marginTop: '.3rem' }}>{REVIEWS.length} avis</div>
            </div>
            <div style={{ width: '1px', height: '44px', background: 'rgba(255,255,255,.12)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.6)' }}>Google</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#f97316"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.6)' }}>Pages Jaunes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel drag-to-scroll */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        style={{ display: 'flex', gap: '1.1rem', overflowX: 'auto', paddingBottom: '1rem', paddingLeft: 'max(2.5rem, calc((100vw - 1160px)/2))', paddingRight: '2.5rem', cursor: isDragging ? 'grabbing' : 'grab', scrollbarWidth: 'none', userSelect: 'none' }}
      >
        {REVIEWS.map((r, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '16px', padding: '1.4rem', minWidth: '280px', maxWidth: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '.75rem', backdropFilter: 'blur(8px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
              <Avatar name={r.name} />
              <div>
                <div style={{ fontFamily: "'Clear Sans',sans-serif", fontWeight: 700, fontSize: '.88rem', color: '#fff' }}>{r.name}</div>
                <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.4)', marginTop: '1px' }}>{r.date}</div>
              </div>
            </div>
            <Stars n={r.rating} />
            <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.72)', lineHeight: 1.65, margin: 0, flex: 1 }}>{r.text}</p>
            <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.3)', fontStyle: 'italic' }}>
              {r.source === 'Google' ? 'Avis Google vérifié' : 'Avis Pages Jaunes vérifié'}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
