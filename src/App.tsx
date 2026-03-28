import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import CityPage from './components/CityPage'
import ZonesHub from './components/pages/ZonesHub'
import ServiceDepannage from './components/pages/ServiceDepannage'
import ServiceOuverture from './components/pages/ServiceOuverture'
import ServiceSerrure from './components/pages/ServiceSerrure'
import ServiceSecurisation from './components/pages/ServiceSecurisation'
import ContactPage from './components/pages/ContactPage'
import MentionsLegales from './components/pages/MentionsLegales'
import NotFound from './components/pages/NotFound'
import BlogPage from './components/pages/BlogPage'
import ArticlePage from './components/pages/ArticlePage'
import RealisationsPage from './components/pages/RealisationsPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/zones-intervention" element={<ZonesHub />} />
        <Route path="/zones-intervention/:slug" element={<CityPage />} />
        <Route path="/depannage-urgence" element={<ServiceDepannage />} />
        <Route path="/ouverture-porte-claquee" element={<ServiceOuverture />} />
        <Route path="/changement-serrure" element={<ServiceSerrure />} />
        <Route path="/securisation-cambriolage" element={<ServiceSecurisation />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
