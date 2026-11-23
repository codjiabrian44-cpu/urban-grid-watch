# Page 1 : Accueil — Failles invisibles

**Route :** `/fr/`
**Titre de navigation :** Accueil
**Temps de lecture :** 45 s (Essentiel) · 2 min 30 (Approfondi)

---

## Sur-titre & Accroche (Hero)

- **Sur-titre :** Dossier documentaire · Infrastructures urbaines connectées
- **Titre principal (H1) :** Failles invisibles
- **Sous-titre :** Pourquoi une ville connectée cède rarement devant une prouesse technique, mais presque toujours sous l'effet conjugué d'une faille organisationnelle, d'une erreur humaine et d'un réseau mal cloisonné.
- **Indicateur visuel (Métaphore du réseau) :**
  - *État nominal :* Réseau urbain interconnecté — Supervision d'intégrité active.
  - *État au défilement :* Anomalie détectée sur un nœud de télémaintenance — Isolement préventif engagé.
  - *Légende :* Chaque point représente un service critique (eau, énergie, mobilité, bâtiment public). Un signal lumineux traduit une anomalie détectée par la défense, jamais un chemin d'intrusion.

- **Entrées de parcours (CTA) :**
  - Bouton principal : **Lecture rapide (5 min)** — *Les thèses, les faits vérifiés et les priorités.*
  - Bouton secondaire : **Lecture approfondie (20 min)** — *Taxonomie complète, études de cas et cadre normatif.*

---

## L'essentiel (Lecture rapide — 45 s)

Une municipalité moderne repose sur deux mondes numériques historiquement séparés : l'informatique de gestion (**IT**, *Information Technology* : messagerie, état civil, comptabilité) et les systèmes industriels qui pilotent le terrain (**OT**, *Operational Technology* : stations de traitement d'eau, feux de circulation, chauffage urbain, distribution électrique).

À mesure que les villes se connectent pour optimiser leur consommation énergétique et leur maintenance à distance, ces deux sphères convergent. Comme le soulignent les travaux de l'Agence de l'Union européenne pour la cybersécurité (**ENISA**) sur l'exposition des administrations publiques et des services essentiels `[SRC-13]`, la vulnérabilité critique naît rarement d'une défaillance technologique isolée. Elle résulte presque toujours de la rencontre entre trois facteurs banals :
1. **Un défaut de gouvernance** (responsabilités floues entre prestataires, services techniques et direction informatique) ;
2. **Une vulnérabilité humaine** (fatigue opérationnelle, ingénierie sociale, contournement de procédures jugées contraignantes) ;
3. **Un réseau insuffisamment segmenté** entre les bureaux administratifs et les automates de terrain `[SRC-05, SRC-07]`.

Ce dossier examine ces mécanismes sans sensationnalisme, à partir de cas historiques documentés et de référentiels publics internationaux.

---

## Analyse approfondie (2 min 30)

### 1. L'infrastructure urbaine, un système cyber-physique discret

L'habitant d'une métropole perçoit l'infrastructure urbaine comme une réalité physique : l'eau coule au robinet, les rames de tramway respectent leur cadence, l'éclairage public s'allume au crépuscule, les hôpitaux disposent d'une alimentation électrique continue. Derrière cette continuité opère désormais une couche de capteurs, d'automates programmables industriels (*Programmable Logic Controllers*, PLC) et de systèmes de contrôle et d'acquisition de données (*Supervisory Control and Data Acquisition*, SCADA), regroupés sous le terme de **technologies opérationnelles (OT)** `[SRC-07]`.

Pendant des décennies, ces équipements ont fonctionné en vase clos, sur des protocoles propriétaires et des réseaux physiquement isolés. Leur priorité absolue n'était pas la confidentialité des données, mais la **disponibilité continue** et la **sûreté physique** des installations, sur des cycles de vie matériels pouvant dépasser quinze à vingt ans `[SRC-07, SRC-11]`.

### 2. Le paradoxe de la convergence IT/OT

Pour réduire les coûts d'exploitation, piloter la transition énergétique et permettre la télémaintenance par des prestataires spécialisés, les collectivités et leurs délégataires ont progressivement relié ces systèmes industriels aux réseaux d'entreprise et à Internet `[SRC-07, SRC-11]`. Cette convergence apporte des gains réels de pilotage, mais modifie profondément la surface d'exposition :
- **L'informatique de gestion (IT)** est exposée quotidiennement aux échanges extérieurs (courriels, postes nomades, navigateurs).
- **Les systèmes opérationnels (OT)** n'ont souvent pas été conçus pour résister à des sollicitations informatiques non prévues, et leur redémarrage ou mise à jour est parfois impossible sans interrompre un service public essentiel `[SRC-07, SRC-11]`.

Lorsque la frontière entre ces deux univers devient poreuse — par exemple via un accès distant partagé ou un support amovible non contrôlé — une perturbation née dans la sphère administrative peut atteindre les équipements physiques `[SRC-01, SRC-05]`.

### 3. Ce que ce site démontre — et ce qu'il refuse de montrer

Ce site s'adresse à des décideurs, des élus, des jurys et des citoyens soucieux de comprendre les enjeux réels de la résilience urbaine.

- **Ce que nous analysons :** Les catégories structurelles de vulnérabilités (techniques, humaines, physiques, organisationnelles), les enseignements vérifiés de deux incidents historiques majeurs (*Stuxnet* et le *réseau électrique ukrainien de 2015*), ainsi qu'un cadre de défense réaliste fondé sur les normes publiques (NIST SP 800-82 Rev. 3, NIST CSF 2.0, ISA/IEC 62443, CISA Zero Trust, guides ANSSI, directive européenne NIS 2).
- **Ce que nous excluons par principe :** Aucun scénario spectaculaire non sourcé, aucun jargon anxiogène, et aucune description de méthode d'intrusion ou de manipulation malveillante. La cybersécurité municipale est avant tout une discipline d'architecture, d'organisation et de continuité de service public.

### Repères de navigation

- **Étape suivante :** [Catégories de vulnérabilités](/fr/vulnerabilites) — *Comprendre les quatre familles de failles qui fragilisent les réseaux urbains.*
- **Accès direct :** [Études de cas vérifiées](/fr/etudes-de-cas) · [Cadre de défense](/fr/cadre-de-defense) · [Feuille de route municipale](/fr/recommandations)
