import { Link } from 'react-router-dom'
import { CITIES } from '../data/cities'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div style={{ marginBottom: '1.2rem' }}>
            <img src="/logo.png" alt="Christophe Le Serrurier" className="footer-logo-img" />
          </div>
          <p className="footer-desc">
            Artisan serrurier indépendant, diplômé CAP et formé chez les Compagnons du Tour de France.<br />
            Intervention 7J/7 dans un rayon de 90 km autour de Montrevel-en-Bresse.<br />
            255 rue des Luyers, Domaine St Roch Bata, 01340 Montrevel-en-Bresse
          </p>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <Link className="footer-link" to="/depannage-urgence">Dépannage urgence</Link>
          <Link className="footer-link" to="/ouverture-porte-claquee">Ouverture de porte</Link>
          <Link className="footer-link" to="/changement-serrure">Changement de serrure</Link>
          <Link className="footer-link" to="/securisation-cambriolage">Sécurisation cambriolage</Link>
          <Link className="footer-link" to="/realisations">Réalisations</Link>
          <Link className="footer-link" to="/blog">Blog & Conseils</Link>
        </div>

        <div>
          <div className="footer-col-title">Villes</div>
          {CITIES.filter((c) => c.tier === 1).map((c) => (
            <Link key={c.slug} className="footer-link" to={`/zones-intervention/serrurier-${c.slug}`}>
              {c.name}
            </Link>
          ))}
          <Link className="footer-link" to="/zones-intervention">→ Toutes les villes</Link>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          {/* NAP — doit rester identique sur site, GBP, annuaires */}
          <a href="tel:+33698956423" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '.97rem', display: 'block', marginBottom: '.4rem' }}>
            06 98 95 64 23
          </a>
          <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.3)', marginBottom: '.9rem' }}>Disponible 7J/7</div>
          <a href="mailto:christopheleserrurier@outlook.fr" style={{ color: 'rgba(255,255,255,.45)', fontSize: '.78rem', wordBreak: 'break-all' }}>
            christopheleserrurier@outlook.fr
          </a>
          <div style={{ marginTop: '.9rem', fontSize: '.8rem', color: 'rgba(255,255,255,.4)', lineHeight: '1.5' }}>
            255 rue des Luyers<br />
            Domaine St Roch Bata<br />
            01340 Montrevel-en-Bresse
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© 2026 Christophe Le Serrurier — Site créé en toute discrétion par <a href="https://site.agencedelombre.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>l'Agence de L'Ombre</a></div>
        <div className="footer-copy">
          <Link to="/mentions-legales" style={{ color: 'inherit', textDecoration: 'none' }}>Mentions légales</Link>
          &nbsp;·&nbsp;Ain (01) · Jura (39) · Saône-et-Loire (71)
        </div>
      </div>
    </footer>
  )
}
