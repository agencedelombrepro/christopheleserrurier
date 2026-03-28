const TESTIMONIALS = [
  {
    text: '"Arrivé en moins de 40 minutes, travail soigné et propre. Il a ouvert ma porte sans abîmer la serrure. Tarif annoncé à l\'avance et tenu. Je recommande vivement."',
    initials: 'MR',
    name: 'Michel R.',
    city: 'Bourg-en-Bresse',
    color: 'var(--blue)',
    delay: '',
  },
  {
    text: '"Après un cambriolage, Christophe est venu le soir même sécuriser notre maison. Très professionnel, rassurant et efficace. Merci infiniment."',
    initials: 'SL',
    name: 'Sophie L.',
    city: 'Mâcon',
    color: 'var(--orange)',
    delay: 'reveal-delay-1',
  },
  {
    text: '"Installation de serrure multipoints impeccable. Conseils avisés pour choisir le bon équipement. Artisan sérieux qu\'on peut appeler les yeux fermés."',
    initials: 'PP',
    name: 'Pierre P.',
    city: 'Oyonnax',
    color: 'var(--navy)',
    delay: 'reveal-delay-2',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal">
          <div className="label-tag" style={{ justifyContent: 'center' }}>Avis clients</div>
          <h2 className="section-title">Ce que disent <em>mes clients</em></h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={`t-card reveal ${t.delay}`}>
              <div className="stars">★★★★★</div>
              <p className="t-text">{t.text}</p>
              <div className="t-author">
                <div className="t-avatar" style={{ background: t.color }}>{t.initials}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-city">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
