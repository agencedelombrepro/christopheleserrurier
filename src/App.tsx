import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
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

function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Nav />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/zones-intervention', element: <ZonesHub /> },
      { path: '/zones-intervention/serrurier-:slug', element: <CityPage /> },
      { path: '/depannage-urgence', element: <ServiceDepannage /> },
      { path: '/ouverture-porte-claquee', element: <ServiceOuverture /> },
      { path: '/changement-serrure', element: <ServiceSerrure /> },
      { path: '/securisation-cambriolage', element: <ServiceSecurisation /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/mentions-legales', element: <MentionsLegales /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
