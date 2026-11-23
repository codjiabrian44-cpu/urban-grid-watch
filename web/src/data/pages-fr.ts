import type {
  HomePageData,
  VulnerabilitiesPageData,
  CaseStudiesPageData,
  DefenseFrameworkPageData,
  RecommendationsPageData,
  SourcesPageData,
} from './types';

export const FR_HOME: HomePageData = {
  metaTitle: 'Failles invisibles — Cybersécurité des infrastructures urbaines',
  metaDescription:
    "Pourquoi une ville connectée cède rarement devant une prouesse technique, mais presque toujours sous l'effet conjugué d'une faille organisationnelle, d'une erreur humaine et d'un réseau mal cloisonné.",
  header: {
    rubricPrefix: 'Dossier documentaire',
    rubricScope: 'Infrastructures urbaines connectées',
    h1: 'Failles invisibles',
    subtitle:
      "Pourquoi une ville connectée cède rarement devant une prouesse technique, mais presque toujours sous l'effet conjugué d'une faille organisationnelle, d'une erreur humaine et d'un réseau mal cloisonné.",
    visualStateNominal:
      'État nominal : Réseau urbain interconnecté — Supervision d’intégrité active.',
    visualStateScroll:
      'Anomalie détectée sur un nœud de télémaintenance — Isolement préventif engagé.',
    visualCaption:
      'Chaque point représente un service critique (eau, énergie, mobilité, bâtiment public). Un signal lumineux traduit une anomalie détectée par la défense, jamais un chemin d’intrusion.',
    readingTimeSummary: '45 s (Essentiel) / 2 min 30 (Approfondi)',
    ctaQuickLabel: 'Lecture rapide (5 min)',
    ctaQuickHint: 'Les thèses, les faits vérifiés et les priorités.',
    ctaDeepLabel: 'Lecture approfondie (20 min)',
    ctaDeepHint: 'Taxonomie complète, études de cas et cadre normatif.',
  },
  quickRead: {
    heading: "L'essentiel (Lecture rapide — 45 s)",
    intro:
      "Une municipalité moderne repose sur deux mondes numériques historiquement séparés : l'informatique de gestion (**IT**, *Information Technology* : messagerie, état civil, comptabilité) et les systèmes industriels qui pilotent le terrain (**OT**, *Operational Technology* : stations de traitement d'eau, feux de circulation, chauffage urbain, distribution électrique).",
    bridge:
      "À mesure que les villes se connectent pour optimiser leur consommation énergétique et leur maintenance à distance, ces deux sphères convergent. Comme le soulignent les travaux de l'Agence de l'Union européenne pour la cybersécurité (**ENISA**) sur l'exposition des administrations publiques et des services essentiels `[SRC-13]`, la vulnérabilité critique naît rarement d'une défaillance technologique isolée. Elle résulte presque toujours de la rencontre entre trois facteurs banals :",
    factors: [
      {
        num: '01',
        title: 'Un défaut de gouvernance',
        detail:
          'responsabilités floues entre prestataires, services techniques et direction informatique',
      },
      {
        num: '02',
        title: 'Une vulnérabilité humaine',
        detail:
          'fatigue opérationnelle, ingénierie sociale, contournement de procédures jugées contraignantes',
      },
      {
        num: '03',
        title: 'Un réseau insuffisamment segmenté',
        detail:
          'entre les bureaux administratifs et les automates de terrain `[SRC-05, SRC-07]`',
      },
    ],
    outro:
      'Ce dossier examine ces mécanismes sans sensationnalisme, à partir de cas historiques documentés et de référentiels publics internationaux.',
  },
  deepDive: {
    heading: 'Analyse approfondie (2 min 30)',
    sections: [
      {
        id: 'cyber-physique',
        shortTitle: '1. Système cyber-physique',
        heading: "1. L'infrastructure urbaine, un système cyber-physique discret",
        paragraphs: [
          "L'habitant d'une métropole perçoit l'infrastructure urbaine comme une réalité physique : l'eau coule au robinet, les rames de tramway respectent leur cadence, l'éclairage public s'allume au crépuscule, les hôpitaux disposent d'une alimentation électrique continue. Derrière cette continuité opère désormais une couche de capteurs, d'automates programmables industriels (*Programmable Logic Controllers*, PLC) et de systèmes de contrôle et d'acquisition de données (*Supervisory Control and Data Acquisition*, SCADA), regroupés sous le terme de **technologies opérationnelles (OT)** `[SRC-07]`.",
          "Pendant des décennies, ces équipements ont fonctionné en vase clos, sur des protocoles propriétaires et des réseaux physiquement isolés. Leur priorité absolue n'était pas la confidentialité des données, mais la **disponibilité continue** et la **sûreté physique** des installations, sur des cycles de vie matériels pouvant dépasser quinze à vingt ans `[SRC-07, SRC-11]`.",
        ],
      },
      {
        id: 'convergence-it-ot',
        shortTitle: '2. Convergence IT/OT',
        heading: '2. Le paradoxe de la convergence IT/OT',
        paragraphs: [
          "Pour réduire les coûts d'exploitation, piloter la transition énergétique et permettre la télémaintenance par des prestataires spécialisés, les collectivités et leurs délégataires ont progressivement relié ces systèmes industriels aux réseaux d'entreprise et à Internet `[SRC-07, SRC-11]`. Cette convergence apporte des gains réels de pilotage, mais modifie profondément la surface d'exposition :",
        ],
        bullets: [
          "**L'informatique de gestion (IT)** est exposée quotidiennement aux échanges extérieurs (courriels, postes nomades, navigateurs).",
          "**Les systèmes opérationnels (OT)** n'ont souvent pas été conçus pour résister à des sollicitations informatiques non prévues, et leur redémarrage ou mise à jour est parfois impossible sans interrompre un service public essentiel `[SRC-07, SRC-11]`.",
        ],
        closingParagraph:
          'Lorsque la frontière entre ces deux univers devient poreuse — par exemple via un accès distant partagé ou un support amovible non contrôlé — une perturbation née dans la sphère administrative peut atteindre les équipements physiques `[SRC-01, SRC-05]`.',
      },
      {
        id: 'perimetre-charte',
        shortTitle: '3. Méthode & refus',
        heading: '3. Ce que ce site démontre — et ce qu’il refuse de montrer',
        paragraphs: [
          "Ce site s'adresse à des décideurs, des élus, des jurys et des citoyens soucieux de comprendre les enjeux réels de la résilience urbaine.",
        ],
        bullets: [
          '**Ce que nous analysons :** Les catégories structurelles de vulnérabilités (techniques, humaines, physiques, organisationnelles), les enseignements vérifiés de deux incidents historiques majeurs (*Stuxnet* et le *réseau électrique ukrainien de 2015*), ainsi qu’un cadre de défense réaliste fondé sur les normes publiques (NIST SP 800-82 Rev. 3, NIST CSF 2.0, ISA/IEC 62443, CISA Zero Trust, guides ANSSI, directive européenne NIS 2).',
          '**Ce que nous excluons par principe :** Aucun scénario spectaculaire non sourcé, aucun jargon anxiogène, et aucune description de méthode d’intrusion ou de manipulation malveillante. La cybersécurité municipale est avant tout une discipline d’architecture, d’organisation et de continuité de service public.',
        ],
      },
    ],
    signpostsHeading: 'Repères de navigation',
    nextStep: {
      label: 'Catégories de vulnérabilités',
      href: '/fr/vulnerabilites/',
      description: 'Comprendre les quatre familles de failles qui fragilisent les réseaux urbains.',
    },
    directAccessLabel: 'Accès direct',
    directAccessLinks: [
      { label: 'Études de cas vérifiées', href: '/fr/etudes-de-cas/' },
      { label: 'Cadre de défense', href: '/fr/cadre-de-defense/' },
      { label: 'Feuille de route municipale', href: '/fr/recommandations/' },
    ],
  },
};

export const FR_VULNERABILITIES: VulnerabilitiesPageData = {
  metaTitle: 'Catégories de vulnérabilités — Failles invisibles',
  metaDescription:
    "Taxonomie conceptuelle des vulnérabilités d'infrastructures urbaines : technique, humaine, physique et organisationnelle.",
  header: {
    rubricPrefix: 'Taxonomie conceptuelle',
    rubricScope: 'Niveau stratégique',
    h1: 'Quatre familles de vulnérabilités, une seule fragilité systémique',
    subtitle:
      "Comprendre où se situent les points de rupture d'une infrastructure urbaine, sans jamais confondre l'analyse de risque avec un manuel offensif.",
    visualCaption:
      "Quatre grappes géométriques (Technique, Humaine, Physique, Organisationnelle). Lorsqu'un indicateur s'allume dans une grappe, la supervision met en évidence la dépendance croisée avec les autres domaines.",
    readingTimeSummary: '50 s (Essentiel) / 3 min 30 (Approfondi)',
  },
  quickRead: {
    heading: "L'essentiel (Lecture rapide — 50 s)",
    intro:
      "Les incidents affectant les infrastructures critiques ne reposent presque jamais sur une faille unique et spectaculaire. Ils exploitent l'alignement de faiblesses réparties dans **quatre catégories complémentaires**, recensées dans les guides de référence tels que le **NIST SP 800-82 Rev. 3** `[SRC-07]` et les recommandations de l'**ANSSI** `[SRC-11]` :",
    columns: ['Catégorie', 'Nature du risque', 'Exemple générique (niveau conceptuel)'],
    rows: [
      {
        category: '**1. Technique**',
        nature: 'Architecture réseau et cycle de vie matériel',
        example:
          'Défaut de cloisonnement entre réseau bureautique (IT) et réseau industriel (OT) ; équipements anciens non mis à jour.',
      },
      {
        category: '**2. Humaine**',
        nature: 'Pratiques quotidiennes et pression opérationnelle',
        example:
          "Ingénierie sociale ciblant le personnel d'exploitation ; réutilisation ou partage de comptes d'accès par commodité.",
      },
      {
        category: '**3. Physique**',
        nature: 'Locaux, matériels de terrain et supports mobiles',
        example:
          'Accès non contrôlé à des armoires techniques déportées ; branchement de supports amovibles non vérifiés sur des postes de supervision.',
      },
      {
        category: '**4. Organisationnelle**',
        nature: 'Gouvernance, sous-traitance et procédures',
        example:
          "Absence d'inventaire complet des actifs OT ; télémaintenance confiée à des tiers sans supervision ni clause de sécurité vérifiée.",
      },
    ],
    takeaway:
      "L'enseignement central est clair : **corriger uniquement la couche technique laisse la porte ouverte aux trois autres**.",
  },
  deepDive: {
    heading: 'Analyse approfondie (3 min 30)',
    categories: [
      {
        id: 'technique',
        code: 'AXE 01',
        heading: '1. Vulnérabilités techniques et architecturales',
        intro:
          "Les vulnérabilités techniques des environnements urbains découlent largement de l'histoire industrielle des équipements déployés sur le terrain `[SRC-07]`.",
        items: [
          '**Défauts de segmentation IT/OT :** Lorsque les réseaux administratifs et les réseaux de conduite des installations partagent une infrastructure commune sans pare-feu ni zones démilitarisées dédiées, un incident banal sur un poste de bureau peut se propager vers les automates de supervision `[SRC-05, SRC-07]`.',
          "**Obsolescence matérielle et logicielle (*legacy*) :** De nombreux contrôleurs de feux tricolores, automates de stations de pompage ou systèmes de gestion technique du bâtiment (GTB) fonctionnent pendant 15 ans ou plus avec des systèmes d'exploitation qui ne reçoivent plus de correctifs de sécurité `[SRC-07, SRC-11]`.",
          "**Authentification faible ou identifiants par défaut :** Sur des équipements déployés en grand nombre sur le territoire urbain, le maintien de mots de passe d'usine ou l'absence d'authentification multifacteur sur les passerelles distantes constitue un facteur de risque majeur documenté dans les retours d'expérience officiels `[SRC-05]`.",
          '**Protocoles industriels sans chiffrement natif :** Les protocoles historiques de téléconduite privilégient la réactivité temps réel plutôt que la vérification cryptographique des commandes reçues `[SRC-07]`.',
        ],
      },
      {
        id: 'humaine',
        code: 'AXE 02',
        heading: '2. Vulnérabilités humaines et cognitives',
        intro:
          'Les opérateurs municipaux et les techniciens de maintenance assurent la continuité de services vitaux sous contrainte permanente de délai et de budget. Les failles humaines ne traduisent pas une négligence individuelle, mais un décalage entre les règles de sécurité et les réalités du terrain `[SRC-11, SRC-13]`.',
        items: [
          '**Ingénierie sociale et hameçonnage ciblé :** Les agents administratifs comme les cadres techniques sont exposés à des sollicitations trompeuses exploitant le contexte professionnel (factures, interventions urgentes, documents internes) `[SRC-05, SRC-13]`.',
          "**Contournement de procédures par nécessité opérationnelle :** Face à une panne de chauffage urbain en hiver ou de régulation des feux de circulation en heure de pointe, une procédure d'authentification jugée trop lente incite les équipes à conserver des accès simplifiés ou des comptes partagés entre plusieurs techniciens.",
          "**Confusions entre sûreté de fonctionnement et cybersécurité :** Un opérateur formé à diagnostiquer des pannes mécaniques ou électriques aura le réflexe légitime d'interpréter un comportement anormal comme un défaut matériel plutôt que comme une anomalie informatique `[SRC-02, SRC-11]`.",
        ],
      },
      {
        id: 'physique',
        code: 'AXE 03',
        heading: '3. Vulnérabilités physiques et de proximité',
        intro:
          "Contrairement aux centres de données centralisés, une infrastructure urbaine est **géographiquement dispersée** dans l'espace public : sous-stations électriques, regards de télécommunications, armoires de régulation routière, locaux techniques de bâtiments scolaires ou sportifs `[SRC-07]`.",
        items: [
          "**Exposition physique des équipements déportés :** Des boîtiers techniques insuffisamment verrouillés ou dépourvus de détection d'ouverture peuvent exposer des ports réseau ou des interfaces de maintenance.",
          '**Usage incontrôlé de supports amovibles :** Les clés USB ou ordinateurs portables de diagnostic utilisés successivement sur des réseaux bureautiques puis directement connectés à des automates isolés brisent de fait tout isolement physique théorique (*air-gap*) `[SRC-01]`.',
          "**Dépendance à l'alimentation et aux télécommunications :** Les sites distants dépendent souvent d'alimentations secourues (onduleurs) et de liaisons opérateurs dont l'interruption simultanée peut priver les équipes de toute visibilité à distance `[SRC-05, SRC-06]`.",
        ],
      },
      {
        id: 'organisationnelle',
        code: 'AXE 04',
        heading: "4. Vulnérabilités organisationnelles et de chaîne d'approvisionnement",
        intro:
          "C'est fréquemment la dimension la plus décisive — et la moins visible dans les audits purement techniques `[SRC-08, SRC-13]`.",
        items: [
          "**Angle mort de l'inventaire :** Dans de nombreuses collectivités, ni la direction informatique ni les services techniques ne disposent d'une cartographie exhaustive et à jour de tous les équipements connectés déployés au fil des marchés publics successifs `[SRC-07, SRC-08]`.",
          "**Chaîne de sous-traitance et télémaintenance :** Les systèmes de climatisation, d'éclairage, d'ascenseurs ou de traitement d'eau sont souvent administrés à distance par des éditeurs ou mainteneurs externes disposant de privilèges étendus, parfois sans traçabilité ni révocation systématique des accès en fin de contrat `[SRC-11, SRC-13]`.",
          "**Silos internes et absence d'exercices conjoints :** Les équipes informatiques connaissent mal les contraintes de sûreté physique des installations industrielles, tandis que les équipes d'exploitation connaissent rarement les procédures d'alerte cyber. Sans exercice commun, la réponse à incident se fige dans l'urgence `[SRC-06, SRC-08]`.",
        ],
      },
    ],
    transitionHeading: 'Transition',
    transitionText:
      'Ces quatre catégories ne sont pas théoriques. Les deux études de cas suivantes montrent comment leur combinaison a déjà produit des effets matériels tangibles sur des infrastructures critiques réelles.',
    nextStep: {
      label: 'Études de cas documentées',
      href: '/fr/etudes-de-cas/',
      description: 'Stuxnet (2009–2010) et le réseau électrique ukrainien (2015).',
    },
  },
};

export const FR_CASE_STUDIES: CaseStudiesPageData = {
  metaTitle: 'Études de cas documentées — Failles invisibles',
  metaDescription:
    'Post-mortems documentés et sourcés : Stuxnet (Natanz, 2009–2010) et réseau électrique ukrainien (23 décembre 2015).',
  header: {
    rubricPrefix: "Retours d'expérience vérifiés",
    rubricScope: 'Post-mortems publics',
    h1: 'Deux précédents historiques qui ont redéfini la sécurité des infrastructures',
    subtitle:
      "Faits établis, chronologie sourcée et leçons d'architecture tirées de Stuxnet (2009–2010) et de la coupure du réseau électrique ukrainien (2015).",
    visualCaption:
      'Chronologie vérifiée et points de rupture architecturaux (isolement rompu, télémaintenance non segmentée).',
    readingTimeSummary: '1 min (Essentiel) / 4 min (Approfondi)',
    safetyNoticeLabel: 'Avertissement éditorial',
    safetyNoticeText:
      "Conformément à notre charte de rigueur et de sûreté, cette page rapporte exclusivement les faits publics documentés par les organismes d'analyse et agences officielles, sans détailler aucune méthode offensive ou reproductible.",
  },
  quickRead: {
    heading: "L'essentiel (Lecture rapide — 1 min)",
    intro:
      'Deux événements documentés servent de référence mondiale pour comprendre le passage du risque numérique à l’impact physique :',
    items: [
      {
        title: '1. Stuxnet (Natanz, 2009–2010)',
        period: '2009–2010',
        metric: '~1 000 centrifugeuses',
        summary:
          "Découvert publiquement en juin 2010 `[SRC-01]`, ce programme malveillant ciblait les automates industriels pilotant les centrifugeuses IR-1 du site nucléaire de Natanz (Iran). Selon l'analyse de l'Institute for Science and International Security (ISIS), environ **1 000 centrifugeuses** (sur quelque 9 000 déployées) ont été mises hors service ou remplacées entre fin 2009 et début 2010 `[SRC-04]`. **Leçon clé :** l'isolement physique d'un réseau (*air-gap*) ne suffit pas si les supports amovibles et les interfaces de maintenance restent non maîtrisés `[SRC-01, SRC-02]`.",
      },
      {
        title: '2. Réseau électrique ukrainien (23 décembre 2015)',
        period: '23 déc. 2015',
        metric: '~225 000 clients (1 à 6 h)',
        summary:
          "Premier incident cyber publiquement confirmé ayant provoqué une panne d'électricité `[SRC-06]`. Trois compagnies régionales de distribution (*oblenergos*) ont subi des coupures coordonnées privant d'électricité environ **225 000 clients pendant 1 à 6 heures** `[SRC-05, SRC-06]`. **Leçon clé :** l'absence de segmentation IT/OT, le manque d'authentification multifacteur sur les accès distants et l'importance vitale du **mode dégradé manuel** ont déterminé à la fois la vulnérabilité initiale et la rapidité du rétablissement `[SRC-05, SRC-06]`.",
      },
    ],
  },
  deepDive: {
    heading: 'Analyse approfondie (4 min)',
    cases: [
      {
        id: 'stuxnet',
        heading: 'Cas n° 1 — Stuxnet et le site de Natanz (2009–2010)',
        period: 'Natanz, 2009–2010',
        metricValue: '~1 000',
        metricUnit: 'centrifugeuses IR-1 hors service / remplacées (sur ~9 000)',
        contextHeading: 'Contexte et faits établis',
        contextParagraphs: [
          "Le 17 juin 2010, une société de sécurité informatique (VirusBlokAda) identifie un programme malveillant d'une complexité inhabituelle, baptisé par la suite **Stuxnet** `[SRC-01]`. Les analyses publiées notamment par **Symantec Security Response** (*W32.Stuxnet Dossier*, février 2011) `[SRC-01]` et par **Ralph Langner** (*To Kill a Centrifuge*, novembre 2013) `[SRC-02]` établissent que ce programme visait spécifiquement des systèmes de contrôle industriel (ICS) équipés d'automates programmables Siemens S7 `[SRC-01, SRC-02]`.",
          "En croisant ces travaux avec les données d'inspection de l'Agence internationale de l'énergie atomique (AIEA), l'**Institute for Science and International Security (ISIS)** publie en décembre 2010 puis en février 2011 une évaluation de l'impact matériel à l'usine d'enrichissement de Natanz, en Iran `[SRC-03, SRC-04]`.",
        ],
        timelineHeading: 'Chronologie documentée',
        timeline: [
          {
            date: 'Fin 2009 – début 2010',
            event:
              "Les relevés associés aux inspections de l'AIEA font apparaître un taux inhabituellement élevé de mise hors service et de remplacement de centrifugeuses de type IR-1 à Natanz ; ISIS estime qu'environ **1 000 centrifugeuses IR-1** (sur quelque 9 000 installées à cette période) ont dû être retirées ou remplacées `[SRC-03, SRC-04]`.",
          },
          {
            date: '17 juin 2010',
            event: 'Découverte publique de Stuxnet `[SRC-01]`.',
          },
          {
            date: 'Décembre 2010 – février 2011',
            event:
              'Publication des dossiers d’analyse technique et nucléaire reliant le ciblage spécifique du programme aux paramètres de fonctionnement des centrifugeuses IR-1 `[SRC-01, SRC-03, SRC-04]`.',
          },
        ],
        impactHeading: 'Impact constaté et nuances factuelles',
        impactItems: [
          "**Effet physique documenté :** Stuxnet constitue le premier cas public attesté d'un programme informatique conçu pour provoquer une dégradation mécanique réelle d'équipements industriels `[SRC-02]`.",
          "**Effet stratégique mesuré :** Selon l'évaluation actualisée d'ISIS (février 2011), bien que l'expansion attendue du parc de centrifugeuses ait été perturbée et ralentie, la production globale d'uranium faiblement enrichi de l'installation s'est maintenue à un niveau relativement stable durant cette période grâce au remplacement des machines et aux ajustements opérationnels `[SRC-04]`.",
        ],
        lessonsHeading: 'Failles structurelles mises en évidence et leçons retenues',
        lessons: [
          "**Le mythe de l'isolement absolu (*air-gap*) :** Même sans connexion permanente à Internet, un site critique échange des fichiers de diagnostic, des mises à jour logicielles et des équipements portables de maintenance. Sans contrôle strict des supports amovibles et de la chaîne de prestation, la frontière reste perméable `[SRC-01]`.",
          "**L'angle mort entre sûreté et sécurité :** Les alarmes industrielles classiques surveillent la conformité physique du procédé (température, pression, vitesse). Tant que l'opérateur ne dispose pas d'une supervision dédiée à l'intégrité informatique des automates, une anomalie logicielle peut être prise à tort pour une usure mécanique ordinaire `[SRC-02, SRC-11]`.",
        ],
      },
      {
        id: 'ukraine-2015',
        heading: 'Cas n° 2 — Le réseau électrique ukrainien (23 décembre 2015)',
        period: 'Ukraine, 23 déc. 2015',
        metricValue: '~225 000',
        metricUnit: 'clients privés de courant pendant 1 à 6 heures',
        contextHeading: 'Contexte et faits établis',
        contextParagraphs: [
          'Le **23 décembre 2015**, trois opérateurs régionaux de distribution d’électricité en Ukraine (*oblenergos*) — **Prykarpattyaoblenergo** (région d’Ivano-Frankivsk), **Kyivoblenergo** et **Chernivtsioblenergo** — subissent des coupures de courant coordonnées et non planifiées `[SRC-05, SRC-06]`.',
          "Documenté dans l'alerte officielle américaine **CISA / ICS-CERT IR-ALERT-H-16-056-01** (publiée le 25 février 2016, mise à jour en juillet 2021) `[SRC-05]` ainsi que dans le rapport conjoint **E-ISAC et SANS Institute** (*Analysis of the Cyber Attack on the Ukrainian Power Grid*, 18 mars 2016) `[SRC-06]`, cet événement représente la première coupure électrique publiquement confirmée comme résultant d'une cyberintrusion `[SRC-06]`. Le gouvernement américain a attribué ultérieurement cette campagne à des acteurs étatiques russes `[SRC-05]`.",
        ],
        timelineHeading: 'Chronologie documentée et bilan matériel',
        timeline: [
          {
            date: 'Avant le 23 décembre 2015',
            event:
              "Compromission préalable des réseaux d'entreprise à la suite d'actions d'ingénierie sociale et d'utilisation d'identifiants d'accès distants, permettant aux acteurs d'accéder aux environnements de supervision SCADA `[SRC-05, SRC-06]`.",
          },
          {
            date: '23 décembre 2015',
            event:
              'Des coupures coordonnées plongent dans le noir environ **225 000 clients** pendant **1 à 6 heures** sur les zones desservies par les trois distributeurs ; les analyses techniques documentent la mise hors tension de **30 sous-stations** chez *Prykarpattyaoblenergo* (sept postes de 110 kV et vingt-trois de 35 kV), tandis que les premiers bilans publics citaient au moins **27 sous-stations** touchées sur l’ensemble des opérateurs concernés `[SRC-05, SRC-06]`.',
          },
          {
            date: 'Pendant la crise',
            event:
              "La perte de disponibilité d'équipements informatiques de contrôle, de convertisseurs de communication en sous-station, de systèmes d'alimentation secourue et des centres d'appels clients complique le diagnostic et prive les usagers d'information `[SRC-05, SRC-06]`.",
          },
          {
            date: '1 à 6 heures après le début',
            event:
              "Les équipes de terrain rétablissent l'alimentation électrique en basculant les disjoncteurs **manuellement sur site** `[SRC-06]`.",
          },
        ],
        impactHeading: 'Enseignements opérationnels vérifiés',
        impactItems: [
          "Mise en évidence de la dépendance des sites distants aux liaisons de communication et aux systèmes d'alimentation secourue `[SRC-05, SRC-06]`.",
          'Démonstration de la valeur du basculement manuel local pour limiter la durée de perte de service public `[SRC-06]`.',
        ],
        lessonsHeading: 'Failles structurelles mises en évidence et leçons retenues',
        lessonsIntro:
          "L'analyse conjointe de la CISA et du SANS/E-ISAC met en lumière trois enseignements directement transposables aux infrastructures urbaines :",
        lessons: [
          "**L'enchaînement IT → OT :** Ce n'est pas une faille obscure dans un équipement de haute tension qui a permis l'incident, mais la combinaison d'une compromission bureautique, d'accès distants insuffisamment protégés (absence d'authentification multifacteur) et d'une segmentation réseau trop permissive entre le SI de gestion et le réseau SCADA `[SRC-05, SRC-06]`.",
          '**La paralysie de la visibilité et de la communication :** Priver un opérateur de sa console de supervision tout en saturant ses lignes téléphoniques accroît la durée de crise. Les plans de continuité doivent prévoir des canaux de communication hors bande (*out-of-band*) `[SRC-05, SRC-06]`.',
          "**La valeur décisive du mode dégradé manuel :** Si la coupure n'a duré que quelques heures malgré l'ampleur de la perturbation informatique, c'est parce que les opérateurs ukrainiens disposaient de personnels formés et de procédures éprouvées pour reprendre la main manuellement et physiquement sur leurs postes `[SRC-06]`.",
        ],
      },
    ],
    comparisonHeading: 'Synthèse comparative',
    comparisonColumns: ['Critère', 'Stuxnet (2009–2010)', 'Réseau électrique ukrainien (2015)'],
    comparisonRows: [
      {
        criterion: '**Secteur touché**',
        stuxnet: 'Enrichissement nucléaire (Natanz) `[SRC-03]`',
        ukraine: 'Distribution électrique régionale (3 *oblenergos*) `[SRC-06]`',
      },
      {
        criterion: '**Impact vérifié**',
        stuxnet: '~1 000 centrifugeuses IR-1 remplacées `[SRC-04]`',
        ukraine: '~225 000 clients privés de courant pendant 1 à 6 h `[SRC-06]`',
      },
      {
        criterion: '**Point de rupture clé**',
        stuxnet:
          "Rupture d'isolement (*air-gap*) via supports/interfaces et absence de détection OT `[SRC-01, SRC-02]`",
        ukraine:
          'Ingénierie sociale IT, accès distants sans MFA et faible segmentation IT/OT `[SRC-05, SRC-06]`',
      },
      {
        criterion: '**Facteur de résilience**',
        stuxnet: 'Remplacement matériel des équipements `[SRC-04]`',
        ukraine:
          'Reprise de contrôle manuelle et locale par les équipes de terrain `[SRC-06]`',
      },
    ],
    nextStepLabel: 'Étape suivante',
    nextStep: {
      label: 'Cadre de défense',
      href: '/fr/cadre-de-defense/',
      description: 'Comment traduire ces leçons en architecture durable pour une collectivité.',
    },
  },
};

export const FR_DEFENSE_FRAMEWORK: DefenseFrameworkPageData = {
  metaTitle: 'Cadre de défense — Failles invisibles',
  metaDescription:
    "Architecture défensive en cinq piliers : segmentation IT/OT, Zero Trust, détection passive d'anomalies, facteur humain et mode dégradé.",
  header: {
    rubricPrefix: 'Architecture de résilience',
    rubricScope: 'Référentiels publics',
    h1: 'Cinq piliers pour défendre une infrastructure urbaine',
    subtitle:
      'Un modèle pragmatique combinant cloisonnement réseau, principes Zero Trust, détection non intrusive, culture humaine et capacité de reprise manuelle.',
    visualCaption:
      "Réorganisation dynamique du réseau de nœuds en zones et conduits cloisonnés (IEC 62443 / modèle de Purdue). Lorsqu'une anomalie est détectée sur un conduit d'interconnexion, elle reste contenue dans sa zone sans atteindre le cœur opérationnel.",
    readingTimeSummary: '55 s (Essentiel) / 4 min (Approfondi)',
  },
  quickRead: {
    heading: "L'essentiel (Lecture rapide — 55 s)",
    intro:
      "La défense d'une ville connectée ne consiste pas à empiler des outils coûteux sur un réseau désorganisé. En s'appuyant sur le **NIST SP 800-82 Rev. 3** `[SRC-07]`, la série normative **ISA/IEC 62443** `[SRC-09]`, le **Zero Trust Maturity Model v2.0 de la CISA** `[SRC-10]` et les guides de l'**ANSSI** `[SRC-11]`, elle repose sur **cinq mesures complémentaires** :",
    measures: [
      {
        num: '01',
        title: 'Segmentation stricte IT/OT',
        detail:
          'Séparer physiquement et logiquement les réseaux bureautiques (IT) des réseaux de conduite technique (OT) via des zones démilitarisées dédiées `[SRC-07, SRC-09]`.',
      },
      {
        num: '02',
        title: 'Application graduée du Zero Trust',
        detail:
          "Supprimer la confiance implicite liée au seul fait d'être connecté au réseau interne ; vérifier systématiquement l'identité, l'état du terminal et le droit d'accès minimal `[SRC-10]`.",
      },
      {
        num: '03',
        title: "Détection passive d'anomalies",
        detail:
          'Observer le trafic industriel de façon non intrusive pour repérer les comportements anormaux sans perturber le procédé physique `[SRC-11]`.',
      },
      {
        num: '04',
        title: 'Formation et hygiène opérationnelle',
        detail:
          "Préparer les équipes techniques et administratives à reconnaître l'ingénierie sociale et à respecter les règles d'accès et de supports amovibles `[SRC-01, SRC-05]`.",
      },
      {
        num: '05',
        title: 'Plan de réponse et mode dégradé',
        detail:
          "Disposer de sauvegardes hors ligne testées, d'exercices conjoints IT/OT et de procédures manuelles de continuité de service `[SRC-05, SRC-06]`.",
      },
    ],
  },
  deepDive: {
    heading: 'Analyse approfondie (4 min)',
    diagramTitle: 'Architecture en zones et conduits (ISA/IEC 62443 & modèle de Purdue)',
    diagramCaption:
      "Schéma de cloisonnement défensif : la zone bureautique (IT) est isolée de la supervision SCADA et des automates de terrain (OT) par une zone démilitarisée contrôlée par authentification multifacteur (MFA) et sonde passive. Une anomalie détectée sur le conduit d'interconnexion est contenue dans la DMZ.",
    pillars: [
      {
        id: 'pilier-1',
        shortTitle: '1. Segmentation IT/OT',
        heading: 'Pilier 1 — Segmentation IT/OT par zones et conduits',
        intro:
          "Le principe fondamental énoncé par la norme **ISA/IEC 62443** `[SRC-09]` et le guide **NIST SP 800-82 Rev. 3** `[SRC-07]` consiste à refuser les réseaux plats où chaque équipement peut dialoguer librement avec tous les autres.",
        bullets: [
          '**Cloisonnement en niveaux (Modèle de Purdue) :** Les systèmes bureautiques (messagerie, gestion) restent séparés des serveurs de supervision SCADA et, plus bas encore, des automates de terrain par des zones tampons (DMZ industrielles) qui filtrent strictement les flux autorisés `[SRC-07]`.',
          "**Maîtrise des flux de télémaintenance :** Les accès distants des prestataires ne doivent jamais aboutir directement sur un automate. Comme le recommande la doctrine de l'ANSSI `[SRC-11]` et l'alerte CISA consécutive à l'incident ukrainien de 2015 `[SRC-05]`, ils passent par des passerelles dédiées, temporaires, journalisées et protégées par une authentification multifacteur (MFA).",
          "**Bénéfice concret :** Si un poste administratif est compromis, l'incident demeure contenu dans la zone bureautique et n'atteint pas les vannes, feux ou sous-stations.",
        ],
      },
      {
        id: 'pilier-2',
        shortTitle: '2. Principes Zero Trust',
        heading: 'Pilier 2 — Principes Zero Trust adaptés à l’environnement urbain',
        intro:
          "Publié en avril 2023, le **Zero Trust Maturity Model (v2.0)** de la CISA structure l'abandon du modèle historique « château fort » — où tout acteur situé à l'intérieur du périmètre bénéficie d'une confiance automatique `[SRC-10]`. Il s'articule autour de **cinq piliers** (*Identité, Appareils, Réseaux, Applications & charges de travail, Données*) et de trois capacités transverses (*Gouvernance, Visibilité & analytique, Automatisation & orchestration*) `[SRC-10]`.",
        subIntro:
          'Pour une collectivité, l’adoption suit quatre paliers progressifs (*Traditional, Initial, Advanced, Optimal*) `[SRC-10]` :',
        bullets: [
          "**Moindre privilège strict :** Un compte de maintenance d'éclairage public n'a accès qu'aux contrôleurs d'éclairage de son secteur géographique, jamais à la supervision de l'eau potable.",
          "**Vérification continue des identités et des terminaux :** Les consoles portables de diagnostic ne sont autorisées à se raccorder au réseau OT qu'après vérification de leur conformité et dans une fenêtre d'intervention validée `[SRC-10, SRC-11]`.",
          "**Adaptation aux contraintes OT :** Là où un automate ancien ne peut pas exécuter d'agent de sécurité moderne, les contrôles Zero Trust s'appliquent au niveau des passerelles d'accès, des commutateurs administrables et des comptes d'administration `[SRC-07, SRC-10]`.",
        ],
      },
      {
        id: 'pilier-3',
        shortTitle: '3. Détection passive',
        heading: "Pilier 3 — Détection d'anomalies et supervision non intrusive",
        intro:
          "Un enseignement majeur de *Stuxnet* `[SRC-02]` et des travaux de l'**ANSSI** (*Doctrine de détection pour les systèmes industriels*, 2020) `[SRC-11]` réside dans la distinction entre **sûreté de fonctionnement** et **détection de sécurité**.",
        bullets: [
          "**Ne jamais perturber le procédé physique :** Contrairement à l'informatique de bureau, les outils de détection déployés en environnement OT doivent fonctionner de manière **passive** (par recopie de flux réseau, sans balayage actif susceptible de saturer ou de figer un automate temps réel) `[SRC-07, SRC-11]`.",
          "**Surveillance prioritaire des points de passage :** L'ANSSI recommande de positionner en priorité les sondes de détection aux interconnexions entre le SI de gestion (IT), les réseaux distants et les zones de télémaintenance `[SRC-11]`.",
          "**Corrélation avec le comportement nominal :** Un automate exécute un cycle stable et prévisible. L'apparition d'une connexion inhabituelle, d'une modification de configuration hors fenêtre de maintenance ou d'un transfert inattendu déclenche une alerte lisible à la fois par l'équipe cyber et par l'exploitant `[SRC-11]`.",
        ],
      },
      {
        id: 'pilier-4',
        shortTitle: '4. Facteur humain',
        heading: 'Pilier 4 — Facteur humain, sous-traitance et hygiène opérationnelle',
        intro:
          "Puisque l'ingénierie sociale et les erreurs de manipulation figurent au cœur des incidents réels `[SRC-05, SRC-13]`, la défense humaine doit être conçue comme un **système de soutien** aux équipes, non comme une contrainte punitive.",
        bullets: [
          "**Formation contextualisée par métier :** Les agents administratifs sont formés à identifier les tentatives d'hameçonnage ; les techniciens OT sont sensibilisés aux risques liés aux supports amovibles et aux bornes de diagnostic `[SRC-01, SRC-05]`.",
          "**Ergonomie des procédures sécurisées :** Des outils d'accès sécurisés simples d'emploi réduisent la tentation de contourner les règles lors d'interventions urgentes.",
          "**Maîtrise des tiers et prestataires :** Toute clause de marché public portant sur un équipement urbain connecté intègre les exigences de la série **IEC 62443** (comptes nominatifs, absence de mots de passe par défaut, journalisation des télémaintenances, révocation immédiate en fin de contrat) `[SRC-09, SRC-11]`.",
        ],
      },
      {
        id: 'pilier-5',
        shortTitle: '5. Reprise & mode dégradé',
        heading: "Pilier 5 — Plan de réponse à incident, sauvegardes et mode dégradé",
        intro:
          "L'incident ukrainien de 2015 démontre que la résilience finale se joue autant dans la préparation de la reprise que dans la prévention `[SRC-06]`. En alignement avec les fonctions *Répondre* et *Rétablir* du **NIST CSF 2.0** `[SRC-08]` :",
        bullets: [
          "**Sauvegardes hors ligne et vérifiées :** Conserver hors réseau (immuables ou physiquement déconnectées) les configurations d'automates, schémas réseau et images système afin de permettre une reconstruction propre `[SRC-05]`.",
          '**Canaux de communication de secours :** Prévoir des moyens de coordination indépendants du réseau informatique compromis (téléphonie dédiée ou radio de terrain) `[SRC-05, SRC-06]`.',
          '**Maintien du mode dégradé manuel :** S’assurer que les installations critiques peuvent être basculées et pilotées localement par des équipes entraînées, et tester régulièrement ce basculement lors d’exercices associant direction générale, direction des systèmes d’information (DSI) et services techniques `[SRC-06, SRC-08]`.',
        ],
      },
    ],
    transitionHeading: 'Transition',
    transitionText:
      "Disposer d'un cadre technique rigoureux ne suffit pas sans décision politique et budgétaire claire. La page suivante traduit ces cinq piliers en feuille de route concrète pour les décideurs municipaux.",
    nextStep: {
      label: 'Conclusion & Recommandations',
      href: '/fr/recommandations/',
      description: 'La feuille de route des décideurs municipaux.',
    },
  },
};

export const FR_RECOMMENDATIONS: RecommendationsPageData = {
  metaTitle: 'Conclusion & Recommandations aux décideurs municipaux — Failles invisibles',
  metaDescription:
    'Feuille de route en trois horizons (0-3 mois, 3-9 mois, 9-18 mois) pour les décideurs municipaux, alignée sur NIST CSF 2.0 et NIS 2.',
  header: {
    rubricPrefix: "Passage à l'action",
    rubricScope: 'Gouvernance locale',
    h1: 'Reprendre le contrôle de la ville connectée',
    subtitle:
      'Une feuille de route réaliste en trois horizons pour les maires, directions générales des services et directions techniques, alignée sur le NIST CSF 2.0 et la directive européenne NIS 2.',
    visualCaption:
      "Grille urbaine stabilisée sous gouvernance unifiée : chaque domaine dispose d'un répondant identifié, d'une barrière IT/OT active et d'un mode dégradé vérifié.",
    readingTimeSummary: '45 s (Essentiel) / 3 min (Approfondi)',
  },
  quickRead: {
    heading: "L'essentiel (Lecture rapide — 45 s)",
    intro:
      "Pour un décideur municipal, la cybersécurité des infrastructures urbaines n'est ni un sujet purement technique, ni une dépense somptuaire : c'est une condition de **continuité des services publics** et une responsabilité directe de gouvernance désormais consacrée par le **NIST CSF 2.0** (fonction *Gouverner*, 2024) `[SRC-08]` et la **directive européenne NIS 2** `[SRC-12]`.",
    decisionsIntro: 'Trois décisions immédiates suffisent pour enclencher le changement :',
    decisions: [
      {
        horizon: '0–3 mois',
        title: '1. Connaître ce que l’on opère',
        detail:
          "Dresser l'inventaire complet des équipements OT connectés (eau, énergie, mobilité, bâtiments) et des accès distants accordés aux prestataires `[SRC-07, SRC-11]`.",
      },
      {
        horizon: '3–9 mois',
        title: '2. Fermer les chemins les plus exposés',
        detail:
          "Imposer la segmentation IT/OT, l'authentification multifacteur (MFA) sur toute télémaintenance et des sauvegardes hors ligne vérifiées `[SRC-05, SRC-10]`.",
      },
      {
        horizon: '9–18 mois',
        title: '3. Préparer la continuité sous contrainte',
        detail:
          'Former élus, agents et mainteneurs, intégrer la cybersécurité dans chaque marché public et exercer annuellement le **mode dégradé manuel** `[SRC-06, SRC-09, SRC-12]`.',
      },
    ],
  },
  deepDive: {
    heading: 'Analyse approfondie (3 min)',
    accountabilityHeading: '1. Pourquoi les décideurs municipaux sont directement concernés',
    accountabilityParagraphs: [
      "Dans le **NIST Cybersecurity Framework (CSF) 2.0** publié en février 2024, l'ajout de la fonction **Gouverner (*Govern*)** comme socle préalable aux cinq fonctions historiques (*Identifier, Protéger, Détecter, Répondre, Rétablir*) marque un tournant clair : la gestion du risque cyber relève de la décision stratégique, de l'allocation budgétaire et de l'arbitrage de l'exécutif, et non de la seule équipe informatique `[SRC-08]`.",
      "En Europe, la **directive (UE) 2022/2555 (NIS 2)** élargit le périmètre des entités soumises à des exigences strictes de gestion des risques et de notification d'incidents — incluant les secteurs de l'énergie, de l'eau potable et usée, des transports et de l'administration publique — tout en engageant la responsabilité des organes de direction dans l'approbation et le suivi des mesures `[SRC-12]`.",
    ],
    roadmapHeading: '2. Feuille de route actionnable en trois horizons',
    horizons: [
      {
        id: 'horizon-1',
        timeframe: '0 à 3 mois',
        title: 'Horizon 1 — Visibilité et gouvernance immédiate',
        actions: [
          '**Unifier le pilotage IT et OT :** Réunir autour de la même table la Direction Générale des Services (DGS), la direction des systèmes d’information (DSI), la direction des services techniques et les délégataires de service public. Désigner un référent identifié pour chaque infrastructure critique `[SRC-08, SRC-11]`.',
          '**Établir l’inventaire réel des systèmes connectés et des tiers :** Recenser les automates, systèmes de gestion technique du bâtiment (GTB), bornes de recharge pour véhicules électriques ou d’information voyageurs, feux tricolores, stations de pompage et surtout la liste exhaustive des prestataires disposant d’un accès distant `[SRC-07, SRC-11]`.',
          '**Classer les systèmes par criticité :** S’appuyer sur la méthode de classification de l’ANSSI afin de concentrer les efforts sur les équipements dont l’arrêt ou le dysfonctionnement aurait un impact direct sur la population ou la sécurité physique `[SRC-11]`.',
        ],
      },
      {
        id: 'horizon-2',
        timeframe: '3 à 9 mois',
        title: 'Horizon 2 — Réduction rapide des vulnérabilités structurelles',
        actions: [
          '**Cloisonner les réseaux IT et OT :** Isoler les réseaux bureautiques des réseaux de supervision et d’automates au moyen de pare-feux industriels et de zones démilitarisées dédiées `[SRC-05, SRC-07, SRC-09]`.',
          '**Sécuriser et journaliser toute télémaintenance :** Supprimer les connexions directes permanentes des prestataires ; exiger des comptes nominatifs, l’authentification multifacteur (MFA) et la validation horodatée des sessions d’intervention `[SRC-05, SRC-10, SRC-11]`.',
          '**Sécuriser les sauvegardes et les supports amovibles :** Constituer des sauvegardes hors ligne des configurations d’automates et encadrer strictement l’usage des clés USB et ordinateurs de maintenance `[SRC-01, SRC-05]`.',
        ],
      },
      {
        id: 'horizon-3',
        timeframe: '9 à 18 mois',
        title: 'Horizon 3 — Détection, marchés publics et résilience durable',
        actions: [
          '**Déployer une détection passive aux interconnexions :** Mettre en place une surveillance non intrusive aux points d’échange entre IT, OT et prestataires externes, en lien avec les équipes de sécurité informatique ou un centre territorial de réponse aux incidents informatiques (*Computer Security Incident Response Team*, CSIRT) `[SRC-11]`.',
          '**Inscrire la sécurité dans la commande publique :** Intégrer dès la rédaction des cahiers des charges techniques des marchés publics des exigences inspirées de la norme **ISA/IEC 62443** et du **NIST SP 800-82 Rev. 3** : livraison sans mots de passe par défaut, documentation d’architecture réseau, capacité de mise à jour maîtrisée et clause d’assistance en cas d’incident `[SRC-07, SRC-09]`.',
          '**Exercer le mode dégradé chaque année :** Simuler une indisponibilité de la supervision numérique (à l’image de la bascule manuelle qui a permis de rétablir le courant en quelques heures en Ukraine en 2015) afin de vérifier que les équipes savent exploiter les services essentiels en mode local `[SRC-06]`.',
        ],
      },
    ],
    matrixHeading: "3. Matrice décisionnelle synthétique pour l'exécutif",
    matrixColumns: ['Question clé du décideur', 'Action concrète', "Référentiel d'appui"],
    matrixRows: [
      {
        question: '*Savons-nous quels systèmes urbains sont connectés ?*',
        action: 'Inventaire unifié IT/OT + registre des accès prestataires',
        standard: 'NIST SP 800-82 Rev. 3 `[SRC-07]` / ANSSI `[SRC-11]`',
      },
      {
        question: '*Une panne informatique au bureau peut-elle bloquer un service technique ?*',
        action: 'Segmentation stricte en zones et conduits + MFA sur accès distants',
        standard: 'ISA/IEC 62443 `[SRC-09]` / CISA Zero Trust `[SRC-10]`',
      },
      {
        question:
          '*Saurions-nous détecter un comportement anormal sans stopper la production ?*',
        action: 'Sonde passive aux interconnexions IT/OT',
        standard: 'Doctrine de détection ANSSI `[SRC-11]`',
      },
      {
        question:
          "*Saurions-nous assurer le service vital si l'écran de supervision s'éteint ?*",
        action: 'Sauvegardes hors ligne + procédures de bascule manuelle exercées annuellement',
        standard: 'E-ISAC/SANS 2016 `[SRC-06]` / NIST CSF 2.0 `[SRC-08]`',
      },
    ],
    conclusionHeading: 'Conclusion',
    conclusionText:
      'Les failles les plus graves des infrastructures urbaines ne naissent ni d’une fatalité technologique ni d’adversaires invincibles : elles prospèrent dans l’angle mort entre les services, dans l’oubli des règles d’accès et dans l’illusion que « cela fonctionne très bien comme ça ». En traitant la cybersécurité opérationnelle comme une discipline de gouvernance, d’architecture sobre et de continuité de service public, une municipalité protège concrètement la vie quotidienne de ses habitants.',
    finalStepLabel: 'Dernière étape',
    finalStep: {
      label: 'Sources vérifiées & Méthodologie',
      href: '/fr/sources/',
      description:
        "Consulter l'ensemble des références documentaires et notre charte de sûreté.",
    },
  },
};

export const FR_SOURCES_PAGE: SourcesPageData = {
  metaTitle: 'Sources vérifiées & Méthodologie — Failles invisibles',
  metaDescription:
    'Note méthodologique sur l’intégrité factuelle, charte de sûreté des contenus et bibliographie vérifiée (SRC-01 à SRC-13).',
  header: {
    rubricPrefix: 'Intégrité factuelle',
    rubricScope: 'Sûreté des contenus',
    h1: 'Sources documentaires et méthodologie éditoriale',
    subtitle:
      "Chaque fait historique et chaque recommandation d'architecture présentés sur ce site s'appuient sur des publications publiques vérifiables.",
    visualCaption:
      'Trame éditoriale sobre et stabilisée, dédiée à la consultation documentaire et à la vérification des références.',
    readingTimeSummary: '35 s (Essentiel) / 2 min (Approfondi)',
  },
  quickRead: {
    heading: "L'essentiel (Lecture rapide — 35 s)",
    intro: 'Ce dossier respecte deux engagements stricts :',
    commitments: [
      "**1. Traçabilité factuelle totale :** Aucun chiffre, aucune date et aucun constat sur un incident réel n'est avancé sans renvoi explicite à une source publique institutionnelle, technique ou académique vérifiée (`[SRC-01]` à `[SRC-13]`).",
      "**2. Charte de sûreté des contenus :** Ce site adopte une approche exclusivement analytique et défensive. Il ne décrit, ne représente et ne suggère aucune méthode d'intrusion, d'exploitation de vulnérabilité ou de manipulation malveillante contre une infrastructure réelle ou fictive.",
    ],
  },
  deepDive: {
    heading: 'Analyse approfondie — Méthodologie et bibliographie complète (2 min)',
    methodologyHeading: '1. Principes méthodologiques et charte de sûreté',
    principles: [
      "**Séparation stricte entre vulnérabilité conceptuelle et technique d'attaque :** Les vulnérabilités sont classées par catégories structurelles (segmentation réseau, gouvernance des accès, ingénierie sociale, exposition physique, inventaire des actifs) afin d'éclairer la prise de décision sans exposer de modes opératoires offensifs.",
      "**Post-mortems factuels uniquement :** Les incidents historiques (*Stuxnet* et *Ukraine 2015*) sont présentés sous l'angle de leur chronologie vérifiée, de leur impact mesuré et des failles organisationnelles ou architecturales qu'ils ont révélées, tels qu'établis par les organismes d'analyse et les agences nationales compétentes.",
      '**Alignement sur les standards ouverts et publics :** Toutes les recommandations défensives proviennent de corpus publics reconnus internationalement (NIST, ISA/IEC, CISA, ANSSI, ENISA, Parlement européen).',
    ],
    bibliographyHeading: '2. Bibliographie vérifiée',
    groups: [
      { id: 'stuxnet', heading: 'A. Étude de cas Stuxnet (2009–2010)' },
      {
        id: 'ukraine',
        heading: 'B. Étude de cas Réseau électrique ukrainien (23 décembre 2015)',
      },
      { id: 'standards', heading: 'C. Référentiels de défense, normes et cadre réglementaire' },
    ],
    returnHeading: "Retour vers l'analyse",
    returnLinks: [
      { label: 'Accueil', href: '/fr/' },
      { label: 'Catégories de vulnérabilités', href: '/fr/vulnerabilites/' },
      { label: 'Études de cas', href: '/fr/etudes-de-cas/' },
      { label: 'Cadre de défense', href: '/fr/cadre-de-defense/' },
      { label: 'Recommandations', href: '/fr/recommandations/' },
    ],
  },
};
