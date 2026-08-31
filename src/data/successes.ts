import logoAmihas from "@/imports/logo_Amihas.png";
import logoCosumar from "@/imports/logo_cosumar.png";
import logoDislog from "@/imports/logo_dislog.png";
import logoSnep from "@/imports/logo_snep.png";
import logoXperis from "@/imports/logo_Xperis.jpg";
import logoButec from "@/imports/logo_butec.svg";
import logoVoieExpress from "@/imports/logo_lavoieexpress.png";
import logoVentec from "@/imports/LOGO_ventec.jpeg";

export type Success = {
  slug: string;
  client: string;
  logo: string;
  sector: string;
  title: string;
  card: string;
  need: string;
  solution: string[];
  results: string[];
};

export const SUCCESSES: Success[] = [
  {
    slug: "amihas",
    logo: logoAmihas,
    client: "AMIHAS",
    sector: "Travaux publics & construction",
    title: "Optimisation des équipements de chantier",
    card: "ORSAP a aidé Amihas à renforcer la sécurité et l'efficacité de ses équipes grâce à une solution complète en EPI, échafaudages et outillage professionnel.",
    need: "Amihas souhaitait améliorer l'organisation de ses chantiers et renforcer la sécurité de ses équipes lors des travaux en hauteur.",
    solution: [
      "Équipements de protection individuelle",
      "Échafaudages et solutions d'accès en hauteur",
      "Outillage professionnel",
      "Consommables et accessoires de chantier",
      "Livraison coordonnée selon le calendrier des travaux",
    ],
    results: [
      "Meilleure protection des équipes sur les chantiers",
      "Approvisionnement plus simple grâce à un interlocuteur unique",
      "Réduction des retards liés au manque d'équipements",
      "Organisation plus efficace des opérations quotidiennes",
    ],
  },
  {
    slug: "cosumar",
    logo: logoCosumar,
    client: 'COSUMAR "SUCRUNION"',
    sector: "Industrie agroalimentaire",
    title: "Protection des équipes et vêtements personnalisés",
    card: "Grâce à ORSAP, Cosumar \"SUCRUNION\" a bénéficié d’un approvisionnement fiable en équipements, consommables et produits techniques destinés à la protection de ses équipes et vêtements de travail personnalisés.",
    need: "Cosumar \"SUCRUNION\" souhaitait uniformiser ses équipes avec des vêtements de travail personnalisés de haute qualité et renforcer la sécurité sur ses différents sites de production.",
    solution: [
      "Équipements de protection individuelle (EPI)",
      "Vêtements de travail personnalisés aux couleurs de la marque",
      "Sélection de consommables et outillages de sécurité",
      "Logistique d'approvisionnement multi-sites coordonnée",
    ],
    results: [
      "Amélioration de la sécurité et de la protection des collaborateurs",
      "Valorisation de l'image de marque avec des tenues professionnelles homogènes",
      "Gestion simplifiée des dotations vestimentaires",
      "Respect rigoureux des normes de sécurité et de conformité",
    ],
  },
  {
    slug: "dislog-group",
    logo: logoDislog,
    client: "DISLOG GROUP",
    sector: "Distribution & logistique",
    title: "Équipement des plateformes logistiques",
    card: "ORSAP a contribué à l'amélioration des espaces logistiques de Dislog Group grâce à des solutions de manutention, de sécurité et d'aménagement professionnel.",
    need: "Dislog Group souhaitait améliorer l'équipement et la sécurité de ses espaces logistiques et de ses équipes opérationnelles.",
    solution: [
      "Équipements de manutention",
      "Outillage et consommables",
      "EPI pour les opérateurs",
      "Éclairage et équipements électriques",
      "Solutions de rangement et d'aménagement",
      "Produits destinés à l'entretien des installations",
    ],
    results: [
      "Environnements de travail mieux équipés",
      "Renforcement de la sécurité des opérateurs",
      "Meilleure organisation des espaces de stockage",
      "Réduction du nombre d'interlocuteurs pour les achats techniques",
    ],
  },
  {
    slug: "snep",
    logo: logoSnep,
    client: "SNEP",
    sector: "Industrie chimique & transformation",
    title: "Sécurité en milieu chimique et toxique",
    card: "Vu la nature de l'activité de la SNEP qui évolue dans un milieu industriel très toxique, la protection des salariés était la priorité principale du management. ORSAP a fourni des équipements de protection comme les masques FFP2 et consommables techniques destinés à renforcer la sécurité et la continuité des opérations industrielles.",
    need: "SNEP évoluant dans un environnement industriel hautement toxique, le management cherchait à prioriser la protection respiratoire et corporelle de ses salariés tout en maintenant la continuité de sa production.",
    solution: [
      "Masques de protection respiratoire FFP2 et FFP3",
      "Équipements de protection individuelle (EPI) spécialisés pour milieu chimique",
      "Consommables techniques et outils de maintenance de sécurité",
      "Assistance technique dans la sélection des références de protection",
    ],
    results: [
      "Protection respiratoire optimale des salariés sur le site de production",
      "Sécurisation renforcée face aux émanations et risques toxiques",
      "Continuité des opérations industrielles garantie sans interruption",
      "Respect rigoureux des normes d'hygiène et sécurité au travail",
    ],
  },
  {
    slug: "xperis-services",
    logo: logoXperis,
    client: "XPERIS SERVICES (Groupe CDG)",
    sector: "Services industriels & maintenance",
    title: "Équipement et gestion logistique des chantiers",
    card: "ORSAP a accompagné Xperis Services Groupe CDG dans l’équipement de ses équipes techniques avec des solutions d’outillage, de sécurité et la fourniture de bennes.",
    need: "Xperis Services Groupe CDG souhaitait équiper ses techniciens avec du matériel professionnel de sécurité et d'outillage, tout en mettant en place des bennes de chantier pour la gestion de ses déchets.",
    solution: [
      "Outillage à main et électroportatif de niveau professionnel",
      "Équipements de protection individuelle (EPI) et signalisation de sécurité",
      "Fourniture de bennes de chantier pour la gestion et l'évacuation des déchets",
      "Solutions logistiques d'approvisionnement et réapprovisionnement réactif",
    ],
    results: [
      "Techniciens parfaitement équipés pour toutes leurs interventions",
      "Gestion efficace et propre des déchets sur les sites de chantiers",
      "Amélioration générale de la sécurité et réduction des risques d'accidents",
      "Simplification logistique grâce à notre offre intégrée matériels + bennes",
    ],
  },
  {
    slug: "butec",
    logo: logoButec,
    client: "BUTEC",
    sector: "Construction & ingénierie",
    title: "Chantiers d'ingénierie et approvisionnement multi-équipements",
    card: "ORSAP a soutenu Butec dans l’approvisionnement de ses projets grâce à une offre complète en équipements de chantier, EPI, outillage, échafaudages, matériel de manutention et vêtements de travail personnalisés.",
    need: "Butec recherchait un interlocuteur unique capable de fournir une large gamme de matériels allant des échafaudages et outillages aux EPI et vêtements personnalisés pour ses grands chantiers d'ingénierie.",
    solution: [
      "Échafaudages et solutions d'accès en hauteur sécurisé",
      "Matériels de manutention et outillage professionnel",
      "Équipements de protection individuelle (EPI) et vêtements de travail personnalisés",
      "Consommables et équipements généraux de chantier",
    ],
    results: [
      "Approvisionnement simplifié et centralisé sur un seul partenaire",
      "Disponibilité accrue des échafaudages et des solutions de manutention",
      "Harmonisation des équipes sur chantier avec les tenues personnalisées",
      "Sécurisation renforcée des opérations de hauteur et de manutention",
    ],
  },
  {
    slug: "la-voix-express",
    logo: logoVoieExpress,
    client: "LA VOIE EXPRESS",
    sector: "Livraison, transport & logistique",
    title: "Identité visuelle des équipes et logistique sécurisée",
    card: "ORSAP a accompagné La Voie Express dans la fourniture de vêtements de travail personnalisés avec logo pour la distinction visuelle de ses équipes, ainsi que dans la fourniture d'équipements de manutention et de sécurité pour ses opérations logistiques.",
    need: "La Voie Express souhaitait doter son personnel logistique de vêtements de travail personnalisés à son image de marque, tout en renforçant ses capacités de manutention et de sécurité au sein de ses plateformes de transport.",
    solution: [
      "Vêtements professionnels personnalisés avec marquage ou broderie de logo",
      "Équipements de manutention pour le chargement et déchargement de colis",
      "Matériels de protection individuelle (EPI) et sécurité des plateformes",
      "Accessoires logistiques et consommables opérationnels",
    ],
    results: [
      "Forte distinction visuelle de marque et sentiment d'appartenance des équipes",
      "Fluidification et sécurisation accrue des opérations de manutention",
      "Valorisation importante de l'image de marque auprès des clients finaux",
      "Homogénéisation de l'équipement logistique sur l'ensemble du réseau",
    ],
  },
  {
    slug: "ventec",
    logo: logoVentec,
    client: "VENTEC",
    sector: "Installations techniques & services",
    title: "Solutions pour installations et équipements techniques",
    card: "ORSAP a fourni à Ventec des équipements, de l'outillage à main, des échelles et des consommables techniques adaptés à ses projets d'installation et de maintenance.",
    need: "Ventec recherchait un partenaire capable de lui fournir des échelles de sécurité, de l'outillage de précision et des consommables techniques adaptés aux exigences de ses chantiers d'installation de génie climatique et de maintenance.",
    solution: [
      "Outillage à main professionnel de précision",
      "Échelles et équipements d'accès sécurisé",
      "Consommables techniques d'installation et de raccordement",
      "Équipements de protection individuelle (EPI) pour techniciens",
    ],
    results: [
      "Approvisionnement rapide en échelles et outillages professionnels",
      "Techniciens parfaitement outillés pour le travail en hauteur",
      "Réduction des temps morts lors des chantiers d'installation",
      "Suivi simplifié des besoins d'approvisionnement techniques",
    ],
  },
];
