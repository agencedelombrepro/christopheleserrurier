import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'
import { homepageSchema } from '../utils/schema'
import Hero from './Hero'
import TrustStrip from './TrustStrip'
import About from './About'
import Services from './Services'
import Urgence from './Urgence'
import Zone from './Zone'
import Testimonials from './Testimonials'
import ContactSection from './ContactSection'
import Footer from './Footer'

export default function HomePage() {
  useReveal()

  useSEO({
    title: 'Serrurier Montrevel-en-Bresse — Urgence 7J/7 · Christophe',
    description: 'Serrurier artisan à Montrevel-en-Bresse. Ouverture de porte, changement de serrure, sécurisation. Intervention rapide 7J/7 · Ain, Jura, Saône-et-Loire. ☎ 06 98 95 64 23',
    canonical: 'https://christophe-leserrurier.fr/',
    jsonLd: homepageSchema(),
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  function handleGoTo(sectionId: string, _label: string) {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Hero onGoTo={handleGoTo} />
      <TrustStrip />
      <About />
      <Services />
      <Urgence />
      <Zone />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  )
}
