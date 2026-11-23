# Page 2 : Catégories de vulnérabilités

**Route :** `/fr/vulnerabilites`
**Titre de navigation :** Vulnérabilités
**Temps de lecture :** 50 s (Essentiel) · 3 min 30 (Approfondi)

---

## En-tête de page

- **Sur-titre :** Taxonomie conceptuelle · Niveau stratégique
- **Titre principal (H1) :** Quatre familles de vulnérabilités, une seule fragilité systémique
- **Sous-titre :** Comprendre où se situent les points de rupture d'une infrastructure urbaine, sans jamais confondre l'analyse de risque avec un manuel offensif.
- **Repère visuel (Métaphore du réseau) :** Quatre grappes géométriques (Technique, Humaine, Physique, Organisationnelle). Lorsqu'un indicateur s'allume dans une grappe, la supervision met en évidence la dépendance croisée avec les autres domaines.

---

## L'essentiel (Lecture rapide — 50 s)

Les incidents affectant les infrastructures critiques ne reposent presque jamais sur une faille unique et spectaculaire. Ils exploitent l'alignement de faiblesses réparties dans **quatre catégories complémentaires**, recensées dans les guides de référence tels que le **NIST SP 800-82 Rev. 3** `[SRC-07]` et les recommandations de l'**ANSSI** `[SRC-11]` :

| Catégorie | Nature du risque | Exemple générique (niveau conceptuel) |
| :--- | :--- | :--- |
| **1. Technique** | Architecture réseau et cycle de vie matériel | Défaut de cloisonnement entre réseau bureautique (IT) et réseau industriel (OT) ; équipements anciens non mis à jour. |
| **2. Humaine** | Pratiques quotidiennes et pression opérationnelle | Ingénierie sociale ciblant le personnel d'exploitation ; réutilisation ou partage de comptes d'accès par commodité. |
| **3. Physique** | Locaux, matériels de terrain et supports mobiles | Accès non contrôlé à des armoires techniques déportées ; branchement de supports amovibles non vérifiés sur des postes de supervision. |
| **4. Organisationnelle** | Gouvernance, sous-traitance et procédures | Absence d'inventaire complet des actifs OT ; télémaintenance confiée à des tiers sans supervision ni clause de sécurité vérifiée. |

L'enseignement central est clair : **corriger uniquement la couche technique laisse la porte ouverte aux trois autres**.

---

## Analyse approfondie (3 min 30)

### 1. Vulnérabilités techniques et architecturales

Les vulnérabilités techniques des environnements urbains découlent largement de l'histoire industrielle des équipements déployés sur le terrain `[SRC-07]`.

- **Défauts de segmentation IT/OT :** Lorsque les réseaux administratifs et les réseaux de conduite des installations partagent une infrastructure commune sans pare-feu ni zones démilitarisées dédiées, un incident banal sur un poste de bureau peut se propager vers les automates de supervision `[SRC-05, SRC-07]`.
- **Obsolescence matérielle et logicielle (*legacy*) :** De nombreux contrôleurs de feux tricolores, automates de stations de pompage ou systèmes de gestion technique du bâtiment (GTB) fonctionnent pendant 15 ans ou plus avec des systèmes d'exploitation qui ne reçoivent plus de correctifs de sécurité `[SRC-07, SRC-11]`.
- **Authentification faible ou identifiants par défaut :** Sur des équipements déployés en grand nombre sur le territoire urbain, le maintien de mots de passe d'usine ou l'absence d'authentification multifacteur sur les passerelles distantes constitue un facteur de risque majeur documenté dans les retours d'expérience officiels `[SRC-05]`.
- **Protocoles industriels sans chiffrement natif :** Les protocoles historiques de téléconduite privilégient la réactivité temps réel plutôt que la vérification cryptographique des commandes reçues `[SRC-07]`.

### 2. Vulnérabilités humaines et cognitives

Les opérateurs municipaux et les techniciens de maintenance assurent la continuité de services vitaux sous contrainte permanente de délai et de budget. Les failles humaines ne traduisent pas une négligence individuelle, mais un décalage entre les règles de sécurité et les réalités du terrain `[SRC-11, SRC-13]`.

- **Ingénierie sociale et hameçonnage ciblé :** Les agents administratifs comme les cadres techniques sont exposés à des sollicitations trompeuses exploitant le contexte professionnel (factures, interventions urgentes, documents internes) `[SRC-05, SRC-13]`.
- **Contournement de procédures par nécessité opérationnelle :** Face à une panne de chauffage urbain en hiver ou de régulation des feux de circulation en heure de pointe, une procédure d'authentification jugée trop lente incite les équipes à conserver des accès simplifiés ou des comptes partagés entre plusieurs techniciens.
- **Confusions entre sûreté de fonctionnement et cybersécurité :** Un opérateur formé à diagnostiquer des pannes mécaniques ou électriques aura le réflexe légitime d'interpréter un comportement anormal comme un défaut matériel plutôt que comme une anomalie informatique `[SRC-02, SRC-11]`.

### 3. Vulnérabilités physiques et de proximité

Contrairement aux centres de données centralisés, une infrastructure urbaine est **géographiquement dispersée** dans l'espace public : sous-stations électriques, regards de télécommunications, armoires de régulation routière, locaux techniques de bâtiments scolaires ou sportifs `[SRC-07]`.

- **Exposition physique des équipements déportés :** Des boîtiers techniques insuffisamment verrouillés ou dépourvus de détection d'ouverture peuvent exposer des ports réseau ou des interfaces de maintenance.
- **Usage incontrôlé de supports amovibles :** Les clés USB ou ordinateurs portables de diagnostic utilisés successivement sur des réseaux bureautiques puis directement connectés à des automates isolés brisent de fait tout isolement physique théorique (*air-gap*) `[SRC-01]`.
- **Dépendance à l'alimentation et aux télécommunications :** Les sites distants dépendent souvent d'alimentations secourues (onduleurs) et de liaisons opérateurs dont l'interruption simultanée peut priver les équipes de toute visibilité à distance `[SRC-05, SRC-06]`.

### 4. Vulnérabilités organisationnelles et de chaîne d'approvisionnement

C'est fréquemment la dimension la plus décisive — et la moins visible dans les audits purement techniques `[SRC-08, SRC-13]`.

- **Angle mort de l'inventaire :** Dans de nombreuses collectivités, ni la direction informatique ni les services techniques ne disposent d'une cartographie exhaustive et à jour de tous les équipements connectés déployés au fil des marchés publics successifs `[SRC-07, SRC-08]`.
- **Chaîne de sous-traitance et télémaintenance :** Les systèmes de climatisation, d'éclairage, d'ascenseurs ou de traitement d'eau sont souvent administrés à distance par des éditeurs ou mainteneurs externes disposant de privilèges étendus, parfois sans traçabilité ni révocation systématique des accès en fin de contrat `[SRC-11, SRC-13]`.
- **Silos internes et absence d'exercices conjoints :** Les équipes informatiques connaissent mal les contraintes de sûreté physique des installations industrielles, tandis que les équipes d'exploitation connaissent rarement les procédures d'alerte cyber. Sans exercice commun, la réponse à incident se fige dans l'urgence `[SRC-06, SRC-08]`.

---

## Transition

Ces quatre catégories ne sont pas théoriques. Les deux études de cas suivantes montrent comment leur combinaison a déjà produit des effets matériels tangibles sur des infrastructures critiques réelles.

- **Étape suivante :** [Études de cas documentées](/fr/etudes-de-cas) — *Stuxnet (2009–2010) et le réseau électrique ukrainien (2015).*
