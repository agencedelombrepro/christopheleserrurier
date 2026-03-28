export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: number
  category: string
  photo: string
  photoAlt: string
  content: string[]  // paragraphes HTML-free, texte pur
}

export const ARTICLES: Article[] = [
  {
    slug: 'comment-choisir-serrure-securite',
    title: 'Comment choisir sa serrure de sécurité en 2025',
    excerpt: 'Serrure A2P, multipoints, cylindre européen : tout ce qu\'il faut savoir avant d\'équiper votre porte.',
    date: '2025-11-15',
    readTime: 5,
    category: 'Conseils',
    photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    photoAlt: 'Serrure de sécurité moderne',
    content: [
      'Le choix d\'une serrure de sécurité est une décision importante pour la protection de votre domicile. Face à la multitude de modèles disponibles, il est facile de se perdre entre les certifications A2P, les serrures multipoints et les cylindres européens.',
      'La certification A2P (Assurance Prévention Protection) est la référence française. Elle classe les serrures en trois niveaux : 1 étoile (résistance 5 minutes), 2 étoiles (10 minutes) et 3 étoiles (20 minutes). Pour une porte d\'entrée de maison individuelle, une serrure 2 étoiles minimum est recommandée.',
      'La serrure multipoints est aujourd\'hui la solution la plus répandue pour les portes d\'entrée. Elle verrouille la porte en plusieurs points simultanément (en général 3 à 5), rendant le forçage beaucoup plus difficile. Couplée à une porte blindée, elle offre un niveau de sécurité optimal.',
      'Le cylindre est souvent le maillon faible d\'une serrure. Privilégiez les cylindres avec protection anti-crochetage, anti-perçage et anti-arrachage. Les cylindres brevetés (dont les clés ne peuvent être dupliquées que chez le fabricant agréé) ajoutent une couche de sécurité supplémentaire.',
      'En tant qu\'artisan formé chez les Compagnons du Tour de France, Christophe vous conseille et installe les solutions adaptées à votre situation. N\'hésitez pas à appeler le 06 98 95 64 23 pour un devis gratuit.',
    ],
  },
  {
    slug: 'que-faire-porte-claquee',
    title: 'Porte claquée : que faire et à qui faire appel ?',
    excerpt: 'Vous venez de claquer votre porte ? Voici les étapes à suivre et comment éviter les escroqueries.',
    date: '2025-10-08',
    readTime: 4,
    category: 'Urgence',
    photo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    photoAlt: 'Serrurier en intervention',
    content: [
      'Claquer sa porte est une mésaventure qui arrive à tout le monde. La panique est compréhensible, surtout la nuit ou par mauvais temps. Voici les étapes à suivre pour gérer cette situation sereinement.',
      'Première réflexe : vérifiez si une autre entrée est accessible (fenêtre du rez-de-chaussée, porte de garage, velux). Si vous êtes locataire, contactez votre propriétaire ou gardien qui dispose peut-être d\'un double de clé. Votre voisin de confiance en a peut-être un aussi.',
      'Si aucune solution simple n\'existe, il faut faire appel à un serrurier. Attention aux plateformes téléphoniques qui affichent des tarifs alléchants puis facturent très cher sur place. Préférez toujours un artisan local dont vous pouvez vérifier l\'existence réelle (SIRET, adresse physique).',
      'Un serrurier honnête vous donnera un tarif avant d\'intervenir. Il cherchera d\'abord à ouvrir sans casser la serrure — ce qui est possible dans la majorité des cas avec les bons outils et le savoir-faire. Si le remplacement est nécessaire, il vous l\'annoncera avec le tarif correspondant.',
      'Christophe intervient 7 jours sur 7 dans un rayon de 90 km autour de Montrevel-en-Bresse. Appelez directement le 06 98 95 64 23 — vous parlez à l\'artisan, pas à une centrale.',
    ],
  },
  {
    slug: 'securiser-domicile-apres-cambriolage',
    title: 'Comment sécuriser son domicile après un cambriolage',
    excerpt: 'Un cambriolage est un choc. Voici les étapes essentielles pour sécuriser votre logement rapidement et efficacement.',
    date: '2025-09-20',
    readTime: 6,
    category: 'Sécurité',
    photo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    photoAlt: 'Maison sécurisée',
    content: [
      'Subir un cambriolage est une expérience traumatisante. Outre le préjudice matériel, le sentiment d\'insécurité qui s\'ensuit peut être long à surmonter. Voici comment agir méthodiquement.',
      'Dans les premières heures, ne touchez à rien et appelez le 17 (police ou gendarmerie) pour déposer plainte. Vous avez 24 heures pour déclarer le sinistre à votre assurance. Prenez des photos de tout.',
      'Une fois les formalités effectuées, il faut sécuriser le logement rapidement. Si une porte ou fenêtre a été fracturée, elle doit être condamnée ou remplacée dans la journée. Un serrurier peut intervenir en urgence pour installer une serrure provisoire ou définitive.',
      'C\'est aussi le moment de repenser globalement la sécurité : blindage de porte, serrure multipoints A2P, grilles de fenêtre, éclairage extérieur avec détecteur de mouvement. Un audit de sécurité par un artisan qualifié vous permettra d\'identifier les points faibles.',
      'Christophe réalise des interventions d\'urgence après cambriolage 7J/7. Il peut aussi vous établir un devis complet de mise en sécurité de votre domicile. Appelez le 06 98 95 64 23.',
    ],
  },
  {
    slug: 'entretien-serrures-conseils',
    title: 'Entretenir ses serrures : les bons gestes',
    excerpt: 'Une serrure bien entretenue dure plus longtemps et fonctionne mieux. Quelques gestes simples suffisent.',
    date: '2025-08-12',
    readTime: 3,
    category: 'Conseils',
    photo: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80',
    photoAlt: 'Entretien d\'une serrure',
    content: [
      'Comme tout mécanisme mécanique, une serrure nécessite un entretien régulier pour fonctionner correctement dans la durée. Quelques gestes simples peuvent éviter bien des pannes.',
      'Le graissage est l\'entretien de base. Utilisez uniquement de la poudre de graphite ou un spray PTFE (téflon) dans le cylindre — jamais d\'huile de cuisine ou de WD-40 qui attirent la poussière et finissent par bloquer le mécanisme. Deux fois par an suffit.',
      'Vérifiez régulièrement le bon alignement du pêne dans la gâche. Une porte qui tire, un alignement défectueux ou des vis de gâche desserrées peuvent fatiguer la serrure prématurément. Serrez les vis de charnières et de gâche une fois par an.',
      'En hiver, si votre serrure est exposée au froid, utilisez un dégivrant pour cylindre de serrure (disponible dans les stations-service). En cas de problème persistant — clé qui tourne mal, pêne qui résiste — n\'attendez pas la panne totale pour appeler un professionnel.',
    ],
  },
  {
    slug: 'serrurier-qualifie-comment-reconnaitre',
    title: 'Comment reconnaître un serrurier qualifié ?',
    excerpt: 'Arnaques, surfacturations : comment s\'assurer que le serrurier qui intervient est vraiment qualifié ?',
    date: '2025-07-05',
    readTime: 4,
    category: 'Conseils',
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    photoAlt: 'Artisan professionnel',
    content: [
      'Le secteur de la serrurerie est malheureusement sujet à des pratiques commerciales douteuses. Des plateformes peu scrupuleuses affichent des prix bas pour attirer les clients en urgence, puis facturent des sommes exorbitantes une fois sur place.',
      'Un serrurier qualifié possède un numéro SIRET vérifiable, une adresse physique connue, et peut présenter ses qualifications. La qualification Qualibat ou la certification RGE (pour certaines prestations) sont des gages de sérieux. Les artisans formés chez les Compagnons du Tour de France bénéficient d\'une formation d\'excellence reconnue.',
      'Avant toute intervention, un professionnel honnête vous communique un devis estimatif par téléphone et un devis ferme sur place avant de commencer les travaux. Il ne vous met jamais sous pression pour remplacer une serrure si ce n\'est pas nécessaire.',
      'Méfiez-vous des annonces en ligne avec des numéros de téléphone locaux qui sont en réalité des centres d\'appel nationaux. Vérifiez que l\'artisan est bien basé dans votre département. Christophe est un artisan indépendant basé à Montrevel-en-Bresse — vous l\'avez directement au téléphone.',
    ],
  },
  {
    slug: 'blindage-porte-guide-complet',
    title: 'Blindage de porte : le guide complet',
    excerpt: 'Porte blindée ou blindage de porte existante ? Toutes les options pour renforcer votre sécurité.',
    date: '2025-06-18',
    readTime: 7,
    category: 'Sécurité',
    photo: 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&w=800&q=80',
    photoAlt: 'Porte blindée installation',
    content: [
      'Le blindage de porte est l\'une des meilleures décisions que vous puissiez prendre pour la sécurité de votre domicile. Il existe deux approches principales : la pose d\'une porte blindée complète ou le blindage de votre porte existante.',
      'La porte blindée complète est la solution idéale lors d\'une rénovation ou d\'un emménagement. Elle intègre un cadre renforcé, un bloc-porte certifié, et une serrure multipoints A2P. Les marques Fichet, Vachette ou Bricard proposent des portes certifiées BP2 ou BP3 (burglary protection).',
      'Le blindage de porte existante consiste à renforcer une porte standard avec une armure métallique, un cylindre haute sécurité et parfois des barres de renfort. C\'est une solution plus économique qui peut être très efficace si la structure de la porte et du cadre est en bon état.',
      'Le choix entre les deux dépend de plusieurs facteurs : l\'état de votre porte actuelle, le niveau de sécurité souhaité, votre budget. Un artisan qualifié peut évaluer votre situation et vous proposer la solution adaptée.',
      'Christophe réalise des blindages de portes sur devis gratuit dans toute la zone Ain-Jura-Saône-et-Loire. Contactez-le au 06 98 95 64 23.',
    ],
  },
]

export const ARTICLE_BY_SLUG = new Map(ARTICLES.map((a) => [a.slug, a]))
