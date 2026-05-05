import { useSEO } from '../../hooks/useSEO'
import { useReveal } from '../../hooks/useReveal'
import ContactSection from '../ContactSection'
import Footer from '../Footer'

export default function ContactPage() {
  useReveal()
  useSEO({
    title: 'Contact serrurier Montrevel-en-Bresse — Devis gratuit',
    description: 'Contactez Christophe Le Serrurier : devis gratuit, urgence 7J/7. ☎ 06 98 95 64 23 · christopheleserrurier@outlook.fr · 01340 Montrevel-en-Bresse',
    canonical: 'https://christophe-serrurier-ain.fr/contact/',
  })

  return (
    <>
      <ContactSection />
      <Footer />
    </>
  )
}
