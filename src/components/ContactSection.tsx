import { useState } from 'react'

interface ContactSectionProps {
  cityName?: string
  title?: string
}

export default function ContactSection({ cityName, title }: ContactSectionProps) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const headline = title ?? (cityName ? `Intervenir à ${cityName}` : 'Demande de devis gratuit')

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <div className="label-tag">Contact</div>
            <h2 className="contact-headline" dangerouslySetInnerHTML={{ __html: cityName
              ? `Intervenir à<br/><span style="color:var(--orange)">${cityName}</span>`
              : `Demande de<br/><span style="color:var(--orange)">devis gratuit</span>` }} />
            <p className="contact-sub">Pour une urgence, appelez directement. Pour un projet ou un devis, remplissez le formulaire.</p>

            <div className="contact-info-item">
              <div className="cii-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
                </svg>
              </div>
              <div>
                <div className="cii-label">Téléphone</div>
                <a href="tel:+33698956423" className="cii-val" style={{ fontSize: '1.15rem' }}>06 98 95 64 23</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="cii-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="cii-label">Email</div>
                <a href="mailto:christopheleserrurier@outlook.fr" className="cii-val">christopheleserrurier@outlook.fr</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="cii-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E95623" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="cii-label">Adresse</div>
                <span className="cii-val">255 rue des Luyers, Domaine St Roch Bata<br />01340 Montrevel-en-Bresse</span>
              </div>
            </div>

            <div className="urgence-cta-box">
              <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '.4rem' }}>URGENCE ?</div>
              <div style={{ fontSize: '.88rem', color: 'var(--text-soft)', marginBottom: '.9rem', lineHeight: '1.6' }}>N'attendez pas, appelez directement.</div>
              <a href="tel:+33698956423" className="btn-primary">Appeler maintenant</a>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="contact-form">
              <div className="form-title">{headline}</div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input type="text" className="form-input" placeholder="Jean Dupont" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input type="tel" className="form-input" placeholder="06 12 34 56 78" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="jean@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Votre demande</label>
                  <textarea className="form-textarea" placeholder="Décrivez votre situation ou projet..." />
                </div>
                <button type="submit" className="form-submit" style={sent ? { background: '#2d7a3d' } : {}}>
                  {sent ? '✓ Message envoyé !' : (
                    <>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Envoyer ma demande
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
