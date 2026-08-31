export const CATEGORIES = [
  "Outillage",
  "EPI",
  "Électricité",
  "Plomberie & fluides",
  "Manutention",
  "Revêtements sols & murs",
  "Luminaires & éclairage",
  "Jardinage",
  "Bâtiment & agencement",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Brand = {
  slug: string;
  name: string;
  origin: string;
  positioning: string;
  categories: Category[];
  certified?: boolean;
};

export const BRANDS: Brand[] = [
  {
    slug: "bosch",
    name: "BOSCH",
    origin: "Allemagne",
    positioning:
      "Solutions d'outillage électroportatif et d'équipements pour professionnels.",
    categories: ["Outillage", "Électricité"],
    certified: true,
  },
  {
    slug: "dewalt",
    name: "DEWALT",
    origin: "États-Unis",
    positioning: "Outillage électroportatif robuste pour chantiers exigeants.",
    categories: ["Outillage"],
    certified: true,
  },
  {
    slug: "stanley",
    name: "STANLEY",
    origin: "États-Unis",
    positioning: "Outillage à main et rangement pour l'atelier et le chantier.",
    categories: ["Outillage", "Bâtiment & agencement"],
  },
  {
    slug: "facom",
    name: "FACOM",
    origin: "France",
    positioning: "Outillage à main de précision pour les professionnels.",
    categories: ["Outillage"],
  },
  {
    slug: "makita",
    name: "MAKITA",
    origin: "Japon",
    positioning: "Machines électroportatives et sans-fil hautes performances.",
    categories: ["Outillage"],
  },
  {
    slug: "vito",
    name: "VITO",
    origin: "Espagne",
    positioning: "Outillage et équipements au meilleur rapport qualité-prix.",
    categories: ["Outillage", "Jardinage"],
  },
  {
    slug: "valex",
    name: "VALEX",
    origin: "Italie",
    positioning: "Outillage, motoculture et équipements pour espaces verts.",
    categories: ["Outillage", "Jardinage"],
  },
  {
    slug: "3m",
    name: "3M",
    origin: "États-Unis",
    positioning: "Protection individuelle, abrasifs et solutions industrielles.",
    categories: ["EPI"],
    certified: true,
  },
  {
    slug: "honeywell",
    name: "HONEYWELL",
    origin: "États-Unis",
    positioning: "Équipements de protection et sécurité au travail.",
    categories: ["EPI"],
  },
  {
    slug: "delta-plus",
    name: "DELTA PLUS",
    origin: "France",
    positioning: "EPI de la tête aux pieds, conformes aux normes en vigueur.",
    categories: ["EPI"],
    certified: true,
  },
  {
    slug: "schneider-electric",
    name: "SCHNEIDER ELECTRIC",
    origin: "France",
    positioning: "Appareillage, distribution et contrôle-commande électrique.",
    categories: ["Électricité"],
    certified: true,
  },
  {
    slug: "legrand",
    name: "LEGRAND",
    origin: "France",
    positioning: "Infrastructures électriques et numériques du bâtiment.",
    categories: ["Électricité"],
  },
  {
    slug: "abb",
    name: "ABB",
    origin: "Suisse / Suède",
    positioning: "Automatismes, variateurs et solutions d'électrification.",
    categories: ["Électricité"],
  },
  {
    slug: "grohe",
    name: "GROHE",
    origin: "Allemagne",
    positioning: "Robinetterie et solutions sanitaires de haute qualité.",
    categories: ["Plomberie & fluides"],
  },
  {
    slug: "wilo",
    name: "WILO",
    origin: "Allemagne",
    positioning: "Pompes et systèmes pour la distribution de fluides.",
    categories: ["Plomberie & fluides"],
  },
  {
    slug: "sika",
    name: "SIKA",
    origin: "Suisse",
    positioning: "Résines, mortiers et solutions de revêtement technique.",
    categories: ["Revêtements sols & murs", "Bâtiment & agencement"],
  },
  {
    slug: "mapei",
    name: "MAPEI",
    origin: "Italie",
    positioning: "Adhésifs, chapes et systèmes pour sols et murs.",
    categories: ["Revêtements sols & murs"],
  },
  {
    slug: "jungheinrich",
    name: "JUNGHEINRICH",
    origin: "Allemagne",
    positioning: "Chariots, gerbeurs et solutions de manutention intralogistique.",
    categories: ["Manutention"],
  },
  {
    slug: "fenwick",
    name: "FENWICK",
    origin: "France",
    positioning: "Chariots élévateurs et équipements de levage.",
    categories: ["Manutention"],
  },
  {
    slug: "philips",
    name: "PHILIPS",
    origin: "Pays-Bas",
    positioning: "Éclairage LED pour l'industrie, le commerce et le résidentiel.",
    categories: ["Luminaires & éclairage"],
  },
  {
    slug: "stihl",
    name: "STIHL",
    origin: "Allemagne",
    positioning: "Machines et outillage pour l'entretien des espaces verts.",
    categories: ["Jardinage"],
  },
  {
    slug: "hilti",
    name: "HILTI",
    origin: "Liechtenstein",
    positioning: "Fixation, perçage et technologies pour la construction.",
    categories: ["Bâtiment & agencement", "Outillage"],
    certified: true,
  },
];

export const CATEGORY_COPY: Record<
  Category,
  { blurb: string; gammes: { title: string; note: string }[]; strengths: string[] }
> = {
  Outillage: {
    blurb:
      "Marques leaders en outillage à main et électroportatif, reconnues pour leur robustesse, leur précision et leur ergonomie, afin d'équiper les ateliers et chantiers les plus exigeants.",
    gammes: [
      { title: "Outillage électroportatif", note: "Perceuses, visseuses, meuleuses, scies." },
      { title: "Outillage à main", note: "Tournevis, clés, pinces, jeux de douilles." },
      { title: "Accessoires", note: "Forets, disques, lames, embouts." },
    ],
    strengths: [
      "Technologie éprouvée et innovation continue",
      "Produits conformes aux normes internationales (CE, etc.)",
      "Large gamme adaptée aux professionnels",
      "Disponibilité des pièces de rechange et du SAV",
    ],
  },
  EPI: {
    blurb:
      "Nos partenaires EPI proposent des équipements de protection conformes aux normes en vigueur, pour la tête, les yeux, les oreilles, les mains, les pieds et le corps, adaptés à chaque métier.",
    gammes: [
      { title: "Protection de la tête", note: "Casques, coiffes, accessoires." },
      { title: "Protection des mains & du corps", note: "Gants, vêtements, harnais." },
      { title: "Protection respiratoire & auditive", note: "Masques, bouchons, casques anti-bruit." },
    ],
    strengths: [
      "Conformité aux normes de sécurité en vigueur",
      "Confort et ergonomie pour un port prolongé",
      "Gammes adaptées à chaque environnement de travail",
      "Traçabilité et documentation complètes",
    ],
  },
  Électricité: {
    blurb:
      "Fabricants spécialisés dans l'électricité industrielle et le bâtiment : tableaux, disjoncteurs, câbles, automates, variateurs et solutions de contrôle-commande.",
    gammes: [
      { title: "Distribution & protection", note: "Tableaux, disjoncteurs, différentiels." },
      { title: "Automatisme", note: "Automates, variateurs, contrôle-commande." },
      { title: "Câblage & appareillage", note: "Câbles, prises, interrupteurs." },
    ],
    strengths: [
      "Solutions certifiées et normalisées",
      "Fiabilité pour les environnements industriels",
      "Compatibilité et évolutivité des systèmes",
      "Support technique et pièces disponibles",
    ],
  },
  "Plomberie & fluides": {
    blurb:
      "Solutions fiables pour l'eau, l'air, les gaz et les fluides industriels : tuyauteries, vannes, pompes, raccords et accessoires.",
    gammes: [
      { title: "Réseaux & tuyauterie", note: "Tubes, raccords, vannes." },
      { title: "Pompage", note: "Pompes, surpresseurs, réservoirs." },
      { title: "Robinetterie", note: "Robinets, mitigeurs, accessoires sanitaires." },
    ],
    strengths: [
      "Étanchéité et durabilité des installations",
      "Conformité réglementaire",
      "Rendement énergétique optimisé",
      "Large disponibilité des pièces",
    ],
  },
  Manutention: {
    blurb:
      "Solutions de manutention et de levage sûres et durables : transpalettes, gerbeurs, diables, échafaudages, nacelles et accessoires pour la logistique et les chantiers.",
    gammes: [
      { title: "Levage & gerbage", note: "Gerbeurs, transpalettes, chariots." },
      { title: "Transport de charges", note: "Diables, chariots, remorques." },
      { title: "Accessoires", note: "Sangles, roues, pièces d'usure." },
    ],
    strengths: [
      "Sécurité et conformité des équipements",
      "Robustesse pour un usage intensif",
      "Ergonomie et réduction de la pénibilité",
      "Maintenance et SAV assurés par ORSAP",
    ],
  },
  "Revêtements sols & murs": {
    blurb:
      "Marques reconnues pour leurs revêtements techniques : résines industrielles, peintures spéciales, carrelages et protections de surface, adaptés aux environnements industriels et tertiaires.",
    gammes: [
      { title: "Résines & sols industriels", note: "Résines époxy, polyuréthane." },
      { title: "Peintures & protections", note: "Peintures spéciales, anticorrosion." },
      { title: "Colles & mortiers", note: "Adhésifs, chapes, ragréages." },
    ],
    strengths: [
      "Résistance chimique et mécanique",
      "Conformité aux normes d'hygiène",
      "Facilité d'entretien",
      "Solutions adaptées à chaque support",
    ],
  },
  "Luminaires & éclairage": {
    blurb:
      "Solutions d'éclairage performantes et économes pour l'industrie, le commerce et le résidentiel : projecteurs, réglettes, LED et systèmes de gestion.",
    gammes: [
      { title: "Éclairage industriel", note: "Projecteurs, high-bay, étanches." },
      { title: "Éclairage tertiaire", note: "Réglettes, dalles, spots." },
      { title: "Sources & gestion", note: "Lampes LED, détecteurs, variation." },
    ],
    strengths: [
      "Efficacité énergétique élevée",
      "Longue durée de vie",
      "Qualité et confort visuel",
      "Solutions pour tous les environnements",
    ],
  },
  Jardinage: {
    blurb:
      "Machines et outillage fiables pour l'entretien des espaces verts : motoculture, coupe, taille et équipements pour les professionnels et collectivités.",
    gammes: [
      { title: "Motoculture", note: "Tondeuses, débroussailleuses, tronçonneuses." },
      { title: "Outillage de jardin", note: "Sécateurs, cisailles, outils à main." },
      { title: "Accessoires", note: "Lames, chaînes, consommables." },
    ],
    strengths: [
      "Fiabilité pour un usage intensif",
      "Ergonomie et sécurité",
      "Pièces et consommables disponibles",
      "Gammes pro et grand public",
    ],
  },
  "Bâtiment & agencement": {
    blurb:
      "Solutions de fixation, quincaillerie et agencement pour la construction, la rénovation et l'aménagement d'espaces professionnels.",
    gammes: [
      { title: "Fixation & ancrage", note: "Chevilles, vis, ancrages." },
      { title: "Quincaillerie", note: "Serrurerie, ferrures, accessoires." },
      { title: "Agencement", note: "Panneaux, profilés, solutions sur mesure." },
    ],
    strengths: [
      "Solutions certifiées et durables",
      "Large compatibilité de fixation",
      "Qualité pour les usages exigeants",
      "Conseil technique ORSAP",
    ],
  },
};
