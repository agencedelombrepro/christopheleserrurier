import { useState, useRef } from 'react'

interface ContactSectionProps {
  cityName?: string
  title?: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactSection({ cityName, title }: ContactSectionProps) {
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const headline = title ?? (cityName ? `Intervenir à ${cityName}` : 'Demande de devis gratuit')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')

    const data = new FormData(formRef.current)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Web3Forms config */}
                <input type="hidden" name="access_key" value="555a400d-27c7-4e8a-aaef-56df52c861fc" />
                <input type="hidden" name="cc_email" value="hello@agencedelombre.fr" />
                <input type="hidden" name="subject" value="Nouveau message — christophe-serrurier-ain.fr" />
                <input type="hidden" name="from_name" value="Site Christophe Le Serrurier" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input type="text" name="name" className="form-input" placeholder="Jean Dupont" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input type="tel" name="phone" className="form-input" placeholder="06 12 34 56 78" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-input" placeholder="jean@email.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Votre demande</label>
                  <textarea name="message" className="form-textarea" placeholder="Décrivez votre situation ou projet..." required />
                </div>

                <button type="submit" className="form-submit" disabled={status === 'sending'} style={status === 'success' ? { background: '#2d7a3d' } : status === 'error' ? { background: '#b91c1c' } : {}}>
                  {status === 'sending' && (
                    <>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 1s linear infinite' }}>
                        <path d="M21 12a9 9 0 11-6.219-8.56" />
                      </svg>
                      Envoi en cours...
                    </>
                  )}
                  {status === 'success' && '✓ Message envoyé !'}
                  {status === 'error' && '✗ Erreur, réessayez'}
                  {status === 'idle' && (
                    <>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Envoyer ma demande
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p style={{ marginTop: '.8rem', fontSize: '.82rem', color: '#2d7a3d', textAlign: 'center' }}>
                    Christophe vous répondra dans les meilleurs délais.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
