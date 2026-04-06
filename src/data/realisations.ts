export interface Realisation {
  id: number
  title: string
  category: 'Ouverture' | 'Serrure' | 'Blindage' | 'Sécurisation' | 'Installation' | 'Professionnel' | 'Renforcement' | 'Rénovation'
  location: string
  description: string
  before?: string
  after: string
  tags: string[]
}

export const REALISATIONS: Realisation[] = [
  {
    id: 1,
    title: 'Blindage de porte d\'entrée',
    category: 'Blindage',
    location: 'Montrevel-en-Bresse',
    description: 'Remplacement d\'une porte d\'entrée standard par une porte blindée 3 points avec cylindre haute sécurité A2P 2 étoiles. Finition bois naturel.',
    after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80',
    tags: ['Porte blindée', 'A2P', 'Serrure multipoints'],
  },
  {
    id: 2,
    title: 'Ouverture de porte sans casse',
    category: 'Ouverture',
    location: 'Polliat',
    description: 'Intervention d\'urgence pour ouverture de porte claquée. Ouverture réalisée sans endommager la serrure ni le cylindre, en moins de 20 minutes.',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    tags: ['Urgence', 'Sans casse', 'Intervention rapide'],
  },
  {
    id: 3,
    title: 'Installation serrure multipoints',
    category: 'Installation',
    location: 'Viriat',
    description: 'Pose d\'une serrure multipoints 5 points sur porte PVC existante. Remplacement du cylindre breveté et fourniture de 3 clés.',
    after: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80',
    tags: ['Multipoints', 'PVC', 'Cylindre breveté'],
  },
  {
    id: 4,
    title: 'Sécurisation après effraction',
    category: 'Sécurisation',
    location: 'Louhans',
    description: 'Intervention après tentative d\'effraction : remplacement serrure forcée, renforcement du cadre et pose d\'une armure de porte en urgence.',
    after: 'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?auto=format&fit=crop&w=700&q=80',
    tags: ['Urgence', 'Effraction', 'Armure de porte'],
  },
  {
    id: 5,
    title: 'Changement cylindre haute sécurité',
    category: 'Serrure',
    location: 'Coligny',
    description: 'Remplacement de cylindres standard par des cylindres haute sécurité anti-crochetage, anti-perçage et anti-arrachage sur l\'ensemble d\'un pavillon.',
    after: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=700&q=80',
    tags: ['Cylindre HS', 'Anti-crochetage', 'Pavillon'],
  },
  {
    id: 6,
    title: 'Installation contrôle d\'accès',
    category: 'Professionnel',
    location: 'Bâgé-Dommartin',
    description: 'Mise en place d\'un système de contrôle d\'accès par badge et digicode pour un local professionnel. Installation complète serrure électrique et tableau de commande.',
    after: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80',
    tags: ['Professionnel', 'Badge', 'Digicode'],
  },
  {
    id: 7,
    title: 'Barreaux anti-effraction cave',
    category: 'Renforcement',
    location: 'Saint-Trivier-de-Courtes',
    description: 'Renforcement de deux fenêtres de cave avec pose de barreaux anti-effraction en acier traité. Soudure sur place et finition peinture.',
    after: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=700&q=80',
    tags: ['Fenêtres', 'Barreaux', 'Anti-effraction'],
  },
  {
    id: 8,
    title: 'Remplacement serrure ancienne',
    category: 'Rénovation',
    location: 'Pont-de-Vaux',
    description: 'Remplacement d\'une vieille serrure à fouillot d\'une maison ancienne. Adaptation et pose d\'une serrure moderne tout en conservant l\'esthétique d\'origine.',
    after: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80',
    tags: ['Maison ancienne', 'Remplacement', 'Adaptation'],
  },
]

export const CATEGORIES = ['Toutes', 'Ouverture', 'Serrure', 'Blindage', 'Sécurisation', 'Installation', 'Professionnel', 'Renforcement', 'Rénovation'] as const
