const U = (id: string) =>
  `https://images.unsplash.com/${id}?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1280&h=960`;

export type Service = {
  slug: string;
  title: string;
  short: string;
  what: string[];
  who: string[];
  benefits: string[];
  ctas: [string, string];
  img: string;
};

export const SERVICES: Service[] = [
  {
    slug: "importation-distribution",
    title: "Importation & distribution d'équipements industriels",
    short:
      "Nous importons et distribuons plus de 15 000 références auprès de plus de 300 marques internationales, pour répondre aux besoins des industriels, des artisans et des chantiers.",
    what: [
      "Sélection de produits conformes aux normes en vigueur",
      "Gestion complète de l'importation et du dédouanement",
      "Stock local et livraison rapide (jusqu'à 48h)",
      "Conseil technique pour le choix des produits et des gammes",
    ],
    who: [
      "Industries (agroalimentaire, chimie, mécanique, etc.)",
      "Entreprises de BTP et de bâtiment",
      "Artisans et PME/PMI",
      "Collectivités et grands comptes",
    ],
    benefits: [
      "Réduction des délais d'approvisionnement",
      "Accès à des marques et technologies internationales",
      "Un seul interlocuteur pour des besoins multi-catégories",
    ],
    ctas: ["Demander un devis d'approvisionnement", "Parler à un expert"],
    img: U("photo-1763752194641-3c5638aec65e"),
  },
  {
    slug: "etudes-realisations",
    title: "Études et réalisations d'équipements industriels",
    short:
      "Nous étudions et réalisons des installations sur mesure : postes de soudage, réseaux d'air comprimé, systèmes de distribution de fluides et autres équipements critiques pour vos lignes de production et ateliers.",
    what: [
      "Audit de vos besoins et de vos installations existantes",
      "Étude technique et dimensionnement (débits, pressions, puissances, etc.)",
      "Fourniture des équipements (compresseurs, postes de soudage, réservoirs, etc.)",
      "Installation, mise en service et tests de performance",
      "Formation de vos équipes à l'utilisation et à la sécurité",
    ],
    who: [
      "Ateliers de production et de maintenance",
      "Entreprises industrielles avec lignes de fabrication",
      "Sites logistiques et centres de service",
    ],
    benefits: [
      "Solutions adaptées à votre process et à votre espace",
      "Gain de productivité et de fiabilité",
      "Réduction des pannes et des temps d'arrêt",
    ],
    ctas: ["Demander une étude de projet", "Obtenir un devis d'installation"],
    img: U("photo-1504328345606-18bbc8c9d7d1"),
  },
  {
    slug: "maintenance-sav",
    title: "Maintenance industrielle & service après-vente",
    short:
      "Nous assurons la maintenance préventive et corrective de vos équipements industriels et de vos installations, avec des contrats de service adaptés à votre niveau d'exigence.",
    what: [
      "Visites de maintenance périodique (check-up, réglages, remplacement de pièces d'usure)",
      "Dépannages rapides en cas de panne",
      "Contrats de maintenance sur mesure (fréquence, périmètre, engagements de délai)",
      "Suivi documentaire (rapports d'intervention, historique, recommandations)",
    ],
    who: [
      "Sites de production continus (24/7 ou en flux tendu)",
      "Entreprises avec parc d'équipements critiques",
      "Bâtiments tertiaires et industriels",
    ],
    benefits: [
      "Réduction des pannes imprévues et des arrêts de production",
      "Allongement de la durée de vie des équipements",
      "Maîtrise des coûts de maintenance",
    ],
    ctas: [
      "Mettre en place un contrat de maintenance",
      "Signaler un besoin d'intervention",
    ],
    img: U("photo-1568236700632-c0cfc08f486a"),
  },
  {
    slug: "revetements-sols-murs",
    title: "Revêtements sols & murs pour l'industrie et le bâtiment",
    short:
      "Nous réalisons des travaux de revêtement pour sols et murs : résines industrielles, carrelages techniques, peintures spéciales, protections anticorrosion et solutions hygiéniques.",
    what: [
      "Diagnostic de l'existant (état du support, contraintes d'usage)",
      "Conseil sur le type de revêtement adapté (résistance chimique, mécanique, glissance, etc.)",
      "Préparation des supports (ponçage, ragréage, traitement)",
      "Pose de revêtements (résine, carrelage, peinture industrielle, etc.)",
      "Finitions et contrôles de qualité",
    ],
    who: [
      "Usines, entrepôts, ateliers",
      "Laboratoires, cuisines professionnelles, établissements de santé",
      "Bureaux, commerces, espaces publics",
    ],
    benefits: [
      "Sols et murs plus résistants, plus sûrs et plus faciles à nettoyer",
      "Conformité aux normes d'hygiène et de sécurité",
      "Amélioration de l'esthétique et de la valeur du lieu",
    ],
    ctas: ["Demander un diagnostic de revêtement", "Obtenir un devis de travaux"],
    img: U("photo-1771531072574-af6ed6b954c0"),
  },
  {
    slug: "plomberie-fluides",
    title: "Plomberie industrielle & réseaux de fluides",
    short:
      "Nous concevons et réalisons des réseaux de plomberie et de distribution de fluides (eau, air, gaz, produits chimiques) pour l'industrie, le tertiaire et le bâtiment.",
    what: [
      "Étude des besoins en débits, pressions et types de fluides",
      "Dimensionnement des réseaux (tuyauteries, vannes, pompes, réservoirs)",
      "Installation de réseaux neufs ou rénovation d'installations existantes",
      "Mise en conformité avec les réglementations en vigueur",
      "Tests, mise en service et maintenance",
    ],
    who: [
      "Sites industriels avec process nécessitant des fluides",
      "Bâtiments tertiaires (bureaux, hôtels, hôpitaux, etc.)",
      "Promoteurs et entreprises de construction",
    ],
    benefits: [
      "Réseaux fiables, étanches et durables",
      "Réduction des pertes et des consommations inutiles",
      "Conformité réglementaire et sécurité accrue",
    ],
    ctas: [
      "Demander une étude de réseau de fluides",
      "Devis plomberie industrielle",
    ],
    img: U("photo-1639600993675-2281b2c939f0"),
  },
  {
    slug: "climatisation",
    title: "Climatisation : installation, entretien et dépannage",
    short:
      "Nous installons et entretenons des systèmes de climatisation et de traitement d'air pour bureaux, ateliers, entrepôts et espaces commerciaux, avec un focus sur le confort et l'efficacité énergétique.",
    what: [
      "Audit thermique et conseil sur le type de système (split, gainable, rooftop, etc.)",
      "Fourniture et installation d'équipements",
      "Mise en service et réglages",
      "Entretien périodique (nettoyage, contrôle des fluides, filtres)",
      "Dépannage et remplacement d'équipements",
    ],
    who: [
      "Bureaux et espaces tertiaires",
      "Entrepôts et ateliers avec contraintes thermiques",
      "Commerces, hôtels, établissements de santé",
    ],
    benefits: [
      "Confort thermique optimal pour les occupants",
      "Meilleure productivité et réduction de l'absentéisme",
      "Consommation énergétique maîtrisée",
    ],
    ctas: ["Demander un audit climatique", "Devis installation climatisation"],
    img: U("photo-1667983453881-4992fe86ab1b"),
  },
  {
    slug: "amenagement-ateliers",
    title: "Aménagement et équipement d'ateliers",
    short:
      "Nous accompagnons la création ou la modernisation d'ateliers : agencement, postes de travail, stockage, outillage, sécurité et ergonomie, pour des espaces plus productifs et plus sûrs.",
    what: [
      "Analyse de vos process et de vos flux",
      "Proposition d'implantation (postes de travail, zones de stockage, circulation)",
      "Fourniture et installation d'équipements (bancs, armoires, rayonnages, outillage, EPI, etc.)",
      "Mise en place de solutions de sécurité et de signalétique",
      "Conseils en ergonomie et organisation du travail",
    ],
    who: [
      "Ateliers de production et de maintenance",
      "Centres de formation technique",
      "Entreprises souhaitant restructurer leurs espaces de travail",
    ],
    benefits: [
      "Gain de place et de temps dans les opérations",
      "Réduction des risques d'accidents",
      "Environnement de travail plus organisé et plus motivant",
    ],
    ctas: ["Demander un audit d'atelier", "Devis aménagement d'atelier"],
    img: U("photo-1426927308491-6380b6a9936f"),
  },
];

export const PROCESS = [
  { step: "01", title: "Audit", note: "Expression de besoin et diagnostic sur site." },
  { step: "02", title: "Étude", note: "Proposition technique et commerciale détaillée." },
  { step: "03", title: "Validation", note: "Accord, planning et coordination des équipes." },
  { step: "04", title: "Réalisation", note: "Installation, livraison et mise en service." },
  { step: "05", title: "Suivi & SAV", note: "Maintenance, rapports et accompagnement durable." },
];
