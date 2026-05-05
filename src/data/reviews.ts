export interface Review {
  name: string
  rating: number
  text: string
  date: string
  source: 'Google' | 'Pages Jaunes'
}

export const REVIEWS: Review[] = [
  {
    name: 'Frederic Hardy',
    rating: 5,
    text: 'Dépannages très réactifs et artisan sympathique, nous recommandons ce professionnel.',
    date: 'Avril 2025',
    source: 'Google',
  },
  {
    name: 'Florine Clair',
    rating: 5,
    text: 'Intervention très rapide et efficace. Entre l\'appel et la fin de l\'intervention, tout a été réglé en un rien de temps.',
    date: 'Avril 2025',
    source: 'Google',
  },
  {
    name: 'Deborah Duponchel',
    rating: 5,
    text: 'Christophe est intervenu dans l\'heure suivant l\'appel pour un diagnostic et devis gratuit, devis réceptionné dans la foulée, pièce reçue en 48h. Sérieux, rapide et professionnel.',
    date: 'Novembre 2025',
    source: 'Google',
  },
  {
    name: 'Marlène Dupont',
    rating: 5,
    text: 'Je recommande, artisan réactif et compétent. Intervention rapide et efficace, tarifs compétitifs.',
    date: 'Octobre 2025',
    source: 'Google',
  },
  {
    name: 'Anthony DIOT',
    rating: 5,
    text: 'J\'ai fait appel à cette entreprise pour le remplacement de deux systèmes d\'ouverture de portes anti panique et tout s\'est très bien passé. Je recommande !',
    date: 'Juin 2025',
    source: 'Google',
  },
  {
    name: 'Léo',
    rating: 5,
    text: 'Super Serrurier, Christophe est très réactif, je recommande vivement, merci encore !',
    date: 'Mai 2025',
    source: 'Google',
  },
  {
    name: 'Joelle PICOT',
    rating: 5,
    text: 'Très bon artisan. Travail soigné.',
    date: 'Mars 2025',
    source: 'Google',
  },
  {
    name: 'Isabelle Boisson',
    rating: 5,
    text: 'Travail très sérieux, propre, très professionnel. Je recommande.',
    date: 'Février 2025',
    source: 'Google',
  },
  {
    name: 'Ophélie Casubolo',
    rating: 5,
    text: 'Rapide, efficace et professionnel.',
    date: 'Août 2025',
    source: 'Google',
  },
  {
    name: 'Virginie Girod',
    rating: 5,
    text: 'Une entreprise très serviable et très bon travail. N\'hésitez pas à appeler.',
    date: 'Novembre 2025',
    source: 'Google',
  },
  {
    name: 'Franck PETRE',
    rating: 5,
    text: 'Intervention rapide ! Réactivité parfaite.',
    date: 'Mars 2025',
    source: 'Google',
  },
  {
    name: 'Auteur Pages Jaunes',
    rating: 5,
    text: 'Personne sérieuse et rapide, avec surtout des prix raisonnables, même un jour férié.',
    date: 'Octobre 2025',
    source: 'Pages Jaunes',
  },
]
