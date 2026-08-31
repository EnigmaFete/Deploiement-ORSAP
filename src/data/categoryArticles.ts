export type CategoryArticle = {
  title: string;
  subtitle: string;
  intro: string;
  article: string;
  highlightsTitle: string;
  highlights: string[];
  subRangesTitle: string;
  subRanges: string[];
};

export const CATEGORY_ARTICLES: Record<string, CategoryArticle> = {
  epi: {
    title: "EPI — Équipements de protection individuelle",
    subtitle: "Sécurité intégrale, conformité et protection corporelle sur vos chantiers et ateliers.",
    intro: "Dans le tumulte des chantiers de construction et le vrombissement des lignes de production industrielles, préserver l'intégrité physique de vos collaborateurs est primordial. Véritables boucliers et armures des temps modernes, nos équipements de protection individuelle (EPI) font barrage aux risques professionnels.",
    article: "Que ce soit pour prémunir vos ouvriers contre les chutes d'objets avec nos casques de chantier antichocs renforcés, prémunir vos techniciens contre les coupures grâce à nos gants de protection en nitrile et kevlar ultra-résistants, ou encore assurer une excellente protection respiratoire et auditive face aux poussières et bruits nocifs de l'usine, ORSAP vous propose des solutions complètes de la tête aux pieds. Nos chaussures de sécurité coquées et nos vêtements de travail haute visibilité allient robustesse et ergonomie pour un confort de port prolongé indispensable à l'efficacité opérationnelle. Choisir nos équipements, c'est investir dans des défenses de première classe pour vos équipes.",
    highlightsTitle: "Pourquoi choisir ORSAP pour vos équipements de protection (EPI) ?",
    highlights: [
      "Conformité rigoureuse aux exigences réglementaires et normes de sécurité internationales (CE, ISO, EN).",
      "Gamme complète couvrant tous les besoins : protection crânienne, oculaire, auditive, respiratoire, des mains et anti-chute.",
      "Ergonomie maximale des vêtements et chaussures pour réduire la fatigue des opérateurs au quotidien.",
      "Partenariats solides avec des marques leaders mondiales telles que Delta Plus, 3M et Honeywell."
    ],
    subRangesTitle: "Nos gammes d'équipements de protection individuelle :",
    subRanges: [
      "Casques de protection, visières et lunettes de sécurité",
      "Chaussures de sécurité coquées (normes S1P, S3, antidérapantes)",
      "Gants de protection mécanique, thermique, chimique et anti-coupure",
      "Harnais de sécurité, longes, enrouleurs et lignes de vie pour le travail en hauteur",
      "Masques de protection respiratoire jetables (FFP2, FFP3) et demi-masques à cartouches",
      "Casques anti-bruit professionnels et bouchons d'oreilles réutilisables"
    ]
  },
  outillage: {
    title: "Outillage à main & électroportatif",
    subtitle: "Des outils professionnels fiables, précis et robustes pour tous vos travaux et chantiers.",
    intro: "L'outillage professionnel est à l'artisan ce que la plume est à l'écrivain : le prolongement naturel de son savoir-faire et de sa précision. Dans le secteur industriel et le BTP au Maroc, disposer d'un matériel fiable et performant est le gage d'une productivité optimisée et de travaux exécutés dans les règles de l'art.",
    article: "ORSAP distribue une large gamme d'outils électroportatifs de pointe — perceuses-visseuses à percussion sans fil, meuleuses d'angle puissantes, perforateurs burineurs robustes et scies circulaires haute précision. Pour les travaux d'ajustage et de montage quotidiens, notre sélection d'outillage à main (clés plates, jeux de douilles, tournevis de précision et pinces coupantes) offre une prise en main ergonomique et une longévité inégalée sous usage intensif. Nous sourçons nos références auprès des plus grands constructeurs mondiaux pour vous garantir une robustesse à toute épreuve, comme des compagnons de fer infatigables face à la matière.",
    highlightsTitle: "Pourquoi choisir ORSAP pour votre outillage professionnel ?",
    highlights: [
      "Sélection rigoureuse des plus grandes marques d'outils mondiales (Bosch, DeWalt, Makita, Facom, Hilti).",
      "Performance industrielle et durabilité éprouvée pour un usage intensif quotidien.",
      "Outils ergonomiques conçus pour limiter la fatigue musculaire et les troubles musculosquelettiques (TMS).",
      "Disponibilité immédiate des accessoires indispensables (forets, disques diamantés, lames de scie, abrasifs)."
    ],
    subRangesTitle: "Nos gammes d'outillage à main et électroportatif :",
    subRanges: [
      "Perceuses-visseuses, clés à choc et perforateurs sans fil haute autonomie",
      "Meuleuses d'angle, disqueuses thermiques et rainureuses professionnelles",
      "Perforateurs, marteaux piqueurs et burineurs industriels",
      "Outillage à main : clés mixtes, pinces de serrage, tournevis et douilles de précision",
      "Coffrets d'outils complets, caisses à outils et servantes d'atelier équipées",
      "Forets à béton SDS-Plus, disques diamantés, lames de scie et consommables de coupe"
    ]
  },
  "roulements-transmission": {
    title: "Roulements & transmission",
    subtitle: "Composants de guidage mécanique et systèmes de transmission de puissance à haute fiabilité.",
    intro: "Le bon fonctionnement de vos machines et lignes de production repose sur des composants mécaniques de haute précision, capables de supporter des charges élevées tout en minimisant les frictions. Les roulements et éléments de transmission représentent le cœur battant de vos installations.",
    article: "Une défaillance mécanique à ce niveau peut paralyser l'ensemble de votre usine et engendrer des coûts d'arrêt de production astronomiques. Chez ORSAP, nous mettons à votre disposition un stock important de roulements à billes, roulements à rouleaux, paliers auto-aligneurs en fonte et composants de guidage linéaire. Pour parfaire vos systèmes de transmission de puissance, nous fournissons également des courroies trapézoïdales, des chaînes de transmission robustes, des poulies et des engrenages de précision. Nos pièces de rechange de haute qualité assurent une rotation fluide et une longévité maximale à vos moteurs et arbres de transmission.",
    highlightsTitle: "Pourquoi choisir ORSAP pour vos roulements et transmissions ?",
    highlights: [
      "Composants de haute précision réduisant efficacement les frictions et l'usure prématurée.",
      "Excellente résistance aux charges radiales, axiales et aux températures industrielles extrêmes.",
      "Large choix de paliers, courroies et chaînes pour toutes les configurations de machines.",
      "Conseil technique pour l'identification des références équivalentes lors de vos opérations de maintenance."
    ],
    subRangesTitle: "Nos gammes de roulements et transmission :",
    subRanges: [
      "Roulements à billes, à rouleaux coniques, sphériques et à aiguilles",
      "Paliers auto-aligneurs en fonte, paliers à applique et paliers tendeurs",
      "Courroies de transmission (trapézoïdales, crantées, plates)",
      "Chaînes de transmission mécanique, maillons rapides et pignons en acier",
      "Accouplements d'arbres flexibles, poulies en fonte et engrenages",
      "Graisses industrielles pour roulements et solutions de lubrification automatique"
    ]
  },
  "echafaudages-nacelles": {
    title: "Échafaudages & nacelles",
    subtitle: "Solutions de hauteur sécurisées : échafaudages, nacelles et plateformes de travail.",
    intro: "Travailler en hauteur exige une sécurité absolue et des équipements d'accès d'une stabilité irréprochable. Que ce soit pour des travaux de ravalement de façade, de maintenance industrielle ou de pose de réseaux suspendus, ORSAP vous propose des solutions certifiées.",
    article: "Notre gamme comprend des échafaudages fixes de chantier robustes, des échafaudages roulants légers en aluminium faciles à déplacer, ainsi que des plateformes individuelles roulantes et des nacelles élévatrices. Équipés de garde-corps intégrés, de plinthes de sécurité et de stabilisateurs ancrés, nos systèmes d'accès garantissent à vos équipes une plateforme de travail stable et sécurisée. Associez ces structures à nos kits de harnais anti-chute et lignes de vie pour s'élever en toute confiance et travailler sereinement au sommet.",
    highlightsTitle: "Pourquoi choisir ORSAP pour vos solutions d'accès en hauteur ?",
    highlights: [
      "Structures hautement stables en acier galvanisé à chaud ou en aluminium de qualité aéronautique.",
      "Conformité stricte aux exigences des normes européennes et marocaines (NF EN 1004, EN 12811).",
      "Montage rapide et intuitif avec des systèmes de verrouillage automatiques brevetés.",
      "Service d'accompagnement pour le choix de la solution la plus adaptée (hauteur de travail, charge utile)."
    ],
    subRangesTitle: "Nos gammes d'échafaudages et de nacelles :",
    subRanges: [
      "Échafaudages fixes de chantier en acier (façadiers, multidirectionnels)",
      "Échafaudages roulants en aluminium pour travaux intérieurs et extérieurs",
      "Plateformes individuelles roulantes légères (PIRL) et escabeaux professionnels",
      "Nacelles élévatrices de personnes, nacelles ciseaux et nacelles articulées",
      "Échelles industrielles en aluminium et échelles coulissantes à cordes",
      "Accessoires de sécurité : garde-corps de sécurité, stabilisateurs et filets de protection"
    ]
  },
  manutention: {
    title: "Manutention",
    subtitle: "Chariots, transpalettes, gerbeurs et équipements de levage pour entrepôts et ateliers.",
    intro: "Le déplacement et le levage de charges lourdes au sein des entrepôts, des ateliers et des quais de chargement sont des opérations quotidiennes qui requièrent un matériel performant pour fluidifier la logistique et préserver la santé des opérateurs.",
    article: "ORSAP vous propose une gamme complète de matériel de manutention robuste et ergonomique. Pour le transport horizontal de palettes, nous mettons à votre disposition des transpalettes manuels robustes et des transpalettes électriques performants. Pour le stockage en hauteur et le gerbage, nos gerbeurs électriques et gerbeurs semi-électriques vous permettent d'empiler vos charges en toute sécurité. Nous fournissons également des diables de transport légers, des chariots plateformes à roues pivotantes silencieuses, des tables élévatrices pour la mise à niveau des postes de travail, ainsi que des accessoires de levage de haute qualité (sangles de levage, palans et manilles), agissant comme des muscles artificiels pour porter vos ambitions industrielles.",
    highlightsTitle: "Pourquoi choisir ORSAP pour vos équipements de manutention ?",
    highlights: [
      "Matériel conçu pour réduire l'effort physique et prévenir les troubles musculosquelettiques (TMS).",
      "Forte robustesse du châssis en acier renforcé pour un usage intensif en milieu industriel.",
      "Organes de sécurité actifs (freins de parking, clapets de surcharge, boutons d'urgence) sur tous les modèles.",
      "Large assortiment d'accessoires de levage certifiés avec traçabilité complète des charges utiles."
    ],
    subRangesTitle: "Nos gammes d'équipements de manutention et de levage :",
    subRanges: [
      "Transpalettes manuels à levée rapide (capacité de 2 à 3 tonnes)",
      "Transpalettes électriques et gerbeurs semi-électriques ou électriques",
      "Diables de manutention en acier ou aluminium, diables monte-escaliers",
      "Chariots plateformes manuels et chariots d'atelier à étagères",
      "Tables élévatrices hydrauliques (manuelles ou électriques) fixes et mobiles",
      "Palans électriques à chaîne, palans manuels, sangles de levage et élingues"
    ]
  },
  "plomberie-fluides": {
    title: "Plomberie & fluides",
    subtitle: "Réseaux de tuyauterie, robinetterie industrielle et solutions de gestion des fluides.",
    intro: "La circulation des fluides (eau, gaz, air comprimé, vapeur ou produits chimiques) constitue le système circulatoire essentiel de tout site industriel ou bâtiment tertiaire. Garantir l'étanchéité et la durabilité de ces installations est capital.",
    article: "Une fuite de fluide ou une baisse de pression peut entraîner des pertes de rendement importantes ou des incidents de sécurité. ORSAP distribue une large gamme de produits de plomberie et gestion des fluides à destination des professionnels. Notre catalogue comprend des tuyauteries en acier, cuivre, PVC et multicouches, ainsi que des raccords rapides de précision, de la robinetterie industrielle (vannes à boisseau, vannes papillon, clapets anti-retour) et des solutions de pompage et de filtration d'eau. Pour la régulation des flux et le contrôle de pression, nous proposons des manomètres et détendeurs de haute fiabilité. Équipés de nos produits de climatisation et réseaux d'air comprimé, vos sites garantissent un transport de fluides propre et sécurisé.",
    highlightsTitle: "Pourquoi choisir ORSAP pour vos réseaux de fluides et plomberie ?",
    highlights: [
      "Matériaux sélectionnés pour leur résistance à la corrosion, à la pression et aux produits chimiques.",
      "Composants de plomberie conformes aux normes techniques les plus strictes pour l'eau et le gaz.",
      "Large choix de diamètres et de types de raccords pour s'adapter à toutes les tuyauteries existantes.",
      "Gamme complète de pompage de surface et de relevage pour les applications civiles et industrielles."
    ],
    subRangesTitle: "Nos gammes de plomberie et de gestion des fluides :",
    subRanges: [
      "Tubes et tuyaux industriels (cuivre, PVC-U, multicouche, acier galvanisé)",
      "Raccords de tuyauterie : coudes, tés, brides, manchons et raccords rapides",
      "Robinetterie industrielle : vannes à boisseau sphérique, vannes papillon et clapets",
      "Pompes de surface, pompes de relevage immergées et groupes surpresseurs",
      "Appareils de mesure et contrôle : manomètres, détendeurs, pressostats et débitmètres",
      "Climatisation industrielle, réseaux d'air comprimé et accessoires de ventilation"
    ]
  },
  electricite: {
    title: "Électricité industrielle & bâtiment",
    subtitle: "Infrastructures de distribution électrique, appareillage et automatismes industriels.",
    intro: "Une alimentation électrique stable, sécurisée et performante est le pilier invisible de l'activité industrielle et tertiaire au Maroc. Les installations électriques doivent répondre à des exigences de sécurité strictes pour prévenir tout risque.",
    article: "ORSAP est votre partenaire de confiance pour l'approvisionnement en matériel électrique de qualité industrielle. Nous distribuons tout le nécessaire pour la conception et la maintenance de vos réseaux : tableaux et coffrets de distribution étanches, disjoncteurs de protection, contacteurs de puissance, câbles industriels haute performance et goulottes de câblage. Pour l'automatisation de vos chaînes de production, nous fournissons également des relais thermiques, des variateurs de vitesse et des automates programmables des plus grands fabricants. Que ce soit pour un nouveau chantier de bâtiment ou la rénovation d'une armoire électrique d'usine, notre stock répond présent pour faire circuler l'énergie motrice de vos projets.",
    highlightsTitle: "Pourquoi choisir ORSAP pour votre matériel électrique ?",
    highlights: [
      "Produits certifiés d'origine garantis par des fabricants de renom (Schneider, Legrand, ABB).",
      "Protection optimale contre les surcharges, courts-circuits et risques de défaut à la terre.",
      "Gamme complète de câbles et d'appareillages robustes adaptés aux ambiances industrielles sévères.",
      "Disponibilité d'appareils d'automatisation avancés pour l'efficacité énergétique et le contrôle des moteurs."
    ],
    subRangesTitle: "Nos gammes d'électricité industrielle et bâtiment :",
    subRanges: [
      "Disjoncteurs divisionnaires, disjoncteurs boîtiers moulés et blocs différentiels",
      "Tableaux électriques, coffrets de chantier et armoires étanches (IP65, IP66)",
      "Câbles électriques basse tension, câbles de commande et conduits goulottes",
      "Contacteurs de puissance, relais thermiques, boutons de commande et voyants",
      "Variateurs de vitesse, démarreurs progressifs et relais temporisés",
      "Prises industrielles étanches, fiches mâles/femelles et connecteurs rapides"
    ]
  },
  quincaillerie: {
    title: "Quincaillerie & agencement",
    subtitle: "Fixations de haute résistance, visserie boulonnerie et serrurerie professionnelle.",
    intro: "En matière de construction, d'agencement et de maintenance industrielle, la solidité d'une structure dépend toujours de la qualité de ses fixations. La quincaillerie et les systèmes d'ancrage lourd en sont les garants.",
    article: "ORSAP vous propose un catalogue complet de quincaillerie professionnelle et de solutions de fixation robustes. Notre gamme comprend des visseries boulonneries en acier zingué et acier inoxydable (inox A2, inox A4), des rondelles, écrous freins, ainsi que des chevilles d'ancrage mécanique lourd pour béton, des chevilles chimiques haute performance et des chevilles légères pour plaques de plâtre. Pour la serrurerie et l'agencement de vos bureaux, ateliers ou locaux commerciaux, nous distribuons également des serrures de sécurité, des cylindres de portes, des charnières de meubles et des ferrures résistantes. Nos produits certifiés assurent un assemblage à toute épreuve, comme un ciment mécanique unissant les matériaux face aux contraintes physiques.",
    highlightsTitle: "Pourquoi choisir ORSAP pour votre quincaillerie et vos fixations ?",
    highlights: [
      "Visserie et boulonnerie conformes aux classes de résistance supérieures (classe 8.8, 10.9, inox A4).",
      "Solutions d'ancrage lourd et de scellement chimique homologuées pour les applications de sécurité.",
      "Serrurerie de haute sûreté pour protéger l'accès à vos locaux professionnels.",
      "Large choix de ferrures et d'accessoires d'agencement pour menuisiers et agenceurs."
    ],
    subRangesTitle: "Nos gammes de quincaillerie et d'agencement :",
    subRanges: [
      "Visserie bois, métaux, boulonnerie zinguée et visserie inox",
      "Chevilles d'ancrage lourd (goujons d'ancrage, chevilles métalliques à expansion)",
      "Résines de scellement chimique, cartouches d'injection et tiges filetées",
      "Serrurerie : serrures encastrées, cylindres européens, cadenas et crémones",
      "Charnières, glissières de tiroirs et quincaillerie d'agencement",
      "Supports de tuyauterie, colliers de serrage, équerres de fixation et consoles"
    ]
  },
  revetements: {
    title: "Revêtements sols & murs",
    subtitle: "Revêtements de sol industriels techniques, résines époxy et agencement mural.",
    intro: "Les sols et murs des usines, entrepôts logistiques, laboratoires et locaux tertiaires sont soumis à de fortes agressions au quotidien : passage intensif d'engins, chutes d'outils lourds, projections de produits chimiques, et exigences d'hygiène strictes.",
    article: "ORSAP propose des revêtements de sol et mur industriels et techniques d'une durabilité exceptionnelle. Notre gamme s'articule autour de résines de sol époxy et polyuréthane autonivelantes qui offrent une surface lisse, étanche, esthétique et très facile à nettoyer, idéale pour l'industrie agroalimentaire et pharmaceutique. Nous fournissons également des mortiers de ragréage et de nivellement de haute performance pour la préparation des supports, des peintures de marquage au sol de sécurité, des dalles de protection amortissantes et des panneaux MDF pour l'agencement intérieur professionnel.",
    highlightsTitle: "Pourquoi choisir ORSAP pour vos revêtements sols et murs ?",
    highlights: [
      "Résines époxy autonivelantes offrant une résistance mécanique et chimique exceptionnelle.",
      "Sols conformes aux normes d'hygiène les plus strictes (normes HACCP pour l'agroalimentaire).",
      "Mortiers de ragréage et colles de haute technicité pour une préparation des supports sans faille.",
      "Panneaux et habillages muraux professionnels pour l'isolation et l'esthétique des bureaux."
    ],
    subRangesTitle: "Nos gammes de revêtements de sol et de mur :",
    subRanges: [
      "Résines de sol époxy autonivelantes, vernis et finitions polyuréthanes",
      "Mortiers de ragréage autonivelants de sol, enduits de lissage et chapes",
      "Peintures de sol industrielles à haute résistance à l'usure et marquage de sécurité",
      "Panneaux MDF de décoration, panneaux mélaminés et profilés d'agencement",
      "Dalles de sol modulaires antidérapantes pour garages et ateliers",
      "Solutions d'étanchéité des murs et sols (primaires d'accrochage, mortiers hydrofuges)"
    ]
  },
  jardinage: {
    title: "Jardinage & espaces verts",
    subtitle: "Machines de motoculture professionnelles et outillage à main pour espaces verts.",
    intro: "L'entretien des parcs d'entreprises, des jardins résidentiels et des espaces verts publics nécessite un matériel professionnel fiable, puissant et sécurisé pour optimiser le temps d'intervention des équipes de paysagistes.",
    article: "ORSAP propose aux professionnels du paysage et aux collectivités une sélection de matériel de motoculture et d'outillage de jardin de haute performance. Notre catalogue comprend des tondeuses à gazon thermiques robustes pour les grandes surfaces, des débroussailleuses à dos confortables pour les terrains difficiles, des tronçonneuses et élagueuses professionnelles pour les travaux d'abattage ou de taille, ainsi que des taille-haies ergonomiques. Pour les travaux d'entretien de précision, nous fournissons de l'outillage à main de jardin (sécateurs professionnels, cisailles, pelles et râteaux) et des accessoires de rechange (fils de débroussailleuse, chaînes de tronçonneuse, lames), véritables sculpteurs de verdure à votre service.",
    highlightsTitle: "Pourquoi choisir ORSAP pour votre matériel d'espaces verts ?",
    highlights: [
      "Matériel de motoculture professionnelle sélectionné auprès de constructeurs de renom (Stihl, Valex, Vito).",
      "Motorisations thermiques puissantes ou batteries lithium écologiques haute performance.",
      "Ergonomie étudiée des poignées et harnais avec système anti-vibration pour le confort d'utilisation.",
      "Disponibilité immédiate de toutes les pièces d'usure et consommables (lames, chaînes, fils, filtres)."
    ],
    subRangesTitle: "Nos gammes de jardinage et motoculture :",
    subRanges: [
      "Tondeuses à gazon thermiques tractées ou autoportées pour grands espaces",
      "Débroussailleuses thermiques à dos et coupe-bordures légers",
      "Tronçonneuses thermiques professionnelles de coupe, d'élagage et scies à chaîne",
      "Taille-haies sur perche, souffleurs de feuilles thermiques et broyeurs",
      "Outillage de jardin manuel : sécateurs de force, cisailles à haie, pelles et râteaux",
      "Systèmes d'irrigation et d'arrosage automatique (tuyaux, raccords rapides, programmateurs)"
    ]
  },
  consommables: {
    title: "Consommables industriels",
    subtitle: "Produits de maintenance, abrasifs de coupe et consommables d'atelier professionnels.",
    intro: "Le bon déroulement des opérations de fabrication, de montage et d'entretien quotidien au sein de l'atelier repose sur une multitude de consommables industriels de haute qualité. Ces indispensables permettent de couper, coller, lubrifier et nettoyer.",
    article: "Une rupture de stock sur ces petites fournitures peut bloquer une ligne de montage complète. ORSAP distribue une large gamme de consommables industriels indispensables au bon fonctionnement de vos installations. Nous fournissons des disques à tronçonner et à ébarber de haute performance pour le travail des métaux, des bandes abrasives de ponçage, des rubans adhésifs techniques ultra-résistants, ainsi que des colles professionnelles (néoprène, cyanoacrylate, colles de fixation). Pour la maintenance de vos machines, nous proposons des huiles et graisses industrielles haute performance, des sprays dégrippants, des dégraissants pour métaux et des chiffons d'essuyage technique, lubrifiant les rouages de votre efficacité industrielle.",
    highlightsTitle: "Pourquoi choisir ORSAP pour vos consommables industriels ?",
    highlights: [
      "Consommables à haut rendement pour réduire la fréquence de remplacement et les temps d'arrêt.",
      "Abrasifs de coupe à haute vitesse pour des découpes nettes sans échauffement des métaux.",
      "Lubrifiants techniques de haute technologie protégeant les pièces en mouvement contre l'usure.",
      "Adhésifs techniques hautes performances offrant une adhésion durable sur tous supports."
    ],
    subRangesTitle: "Nos gammes de consommables industriels d'atelier :",
    subRanges: [
      "Disques à tronçonner et à ébarber (pour meuleuses d'angle), disques à lamelles",
      "Papiers abrasifs de ponçage, bandes de ponçage et disques abrasifs auto-agrippants",
      "Lubrifiants techniques : huiles hydrauliques, huiles de coupe et graisses au lithium",
      "Sprays de maintenance : dégrippants multifonctions, dégraissants et nettoyants contacts",
      "Rubans adhésifs professionnels : double-face armés, adhésifs de masquage et toilés",
      "Colles professionnelles néoprène, colles polyuréthanes et mastics d'étanchéité"
    ]
  },
  luminaires: {
    title: "Luminaires & éclairage",
    subtitle: "Éclairage LED industriel haute efficacité, projecteurs extérieurs et dalles tertiaires.",
    intro: "L'éclairage d'un espace de travail industriel ou tertiaire au Maroc joue un rôle clé dans la productivité, la sécurité et le confort visuel des salariés, tout en représentant un poste de dépense énergétique majeur.",
    article: "Un éclairage performant doit allier intensité lumineuse et efficacité énergétique élevée. ORSAP propose des solutions d'éclairage LED industriel et commercial à destination des professionnels. Notre gamme comprend des projecteurs LED extérieurs étanches de forte puissance pour l'éclairage des parkings et façades, des réglettes LED étanches IP65 pour les ateliers et milieux humides, des suspensions industrielles (High-Bay LED) pour les halls de stockage à grande hauteur sous plafond, ainsi que des dalles LED encastrables pour les bureaux et espaces administratifs. Nos solutions vous permettent de réaliser d'importantes économies d'énergie tout en prolongeant la durée de vie de vos ampoules, chassant les ombres pour laisser place à la performance.",
    highlightsTitle: "Pourquoi choisir ORSAP pour vos luminaires et éclairage LED ?",
    highlights: [
      "Technologie LED haute efficacité permettant jusqu'à 80% d'économies d'énergie électrique.",
      "Durée de vie supérieure à 50 000 heures réduisant drastiquement les frais de maintenance.",
      "Luminaires étanches IP65 / IP66 résistants à la poussière et aux projections d'eau en atelier.",
      "Confort visuel accru avec une lumière homogène limitant la fatigue oculaire des opérateurs."
    ],
    subRangesTitle: "Nos gammes d'éclairage professionnel et industriel :",
    subRanges: [
      "Suspensions industrielles High-Bay LED pour hangars de grande hauteur sous plafond",
      "Réglettes LED étanches (IP65, IP66) pour ateliers, usines et parkings",
      "Projecteurs LED extérieurs de forte puissance pour chantiers et façades",
      "Dalles LED encastrables ou en saillie (600x600) pour bureaux et locaux tertiaires",
      "Blocs autonomes d'éclairage de sécurité (BAES) et éclairage de secours",
      "Sources lumineuses LED, tubes LED de rechange et accessoires de raccordement"
    ]
  }
};
