import { City } from '../data/cities'

const BASE_URL = 'https://christophe-serrurier-ain.fr'
const NAP = {
  name: 'Christophe Le Serrurier',
  telephone: '+33698956423',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '255 rue des Luyers, Domaine St Roch Bata',
    addressLocality: 'Montrevel-en-Bresse',
    postalCode: '01340',
    addressCountry: 'FR',
  },
}

export function homepageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    ...NAP,
    description:
      'Serrurier artisan à Montrevel-en-Bresse, intervention rapide en Ain, Jura et Saône-et-Loire. Dépannage urgence, ouverture de porte, changement de serrure, sécurisation après cambriolage. Tarifs transparents, Compagnons du Tour de France.',
    url: BASE_URL,
    openingHours: 'Mo-Su 00:00-24:00',
    priceRange: '€€',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 46.3267,
        longitude: 5.1348,
      },
      geoRadius: 90000,
    },
  }
}

export function citySchema(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    ...NAP,
    description: `Serrurier artisan intervenant à ${city.name}. Urgence 7J/7, ouverture de porte, changement de serrure, sécurisation après cambriolage. CAP, Compagnons du Tour de France. Tarifs transparents.`,
    url: `${BASE_URL}/zones-intervention/serrurier-${city.slug}/`,
    openingHours: 'Mo-Su 00:00-24:00',
    priceRange: '€€',
    areaServed: city.name,
    serviceType: 'Serrurier / Dépannage serrurerie',
  }
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      ...NAP,
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 46.3267,
        longitude: 5.1348,
      },
      geoRadius: 90000,
    },
    url: `${BASE_URL}${path}`,
  }
}
