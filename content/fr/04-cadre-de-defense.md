# Page 4 : Cadre de défense

**Route :** `/fr/cadre-de-defense`
**Titre de navigation :** Cadre de défense
**Temps de lecture :** 55 s (Essentiel) · 4 min (Approfondi)

---

## En-tête de page

- **Sur-titre :** Architecture de résilience · Référentiels publics
- **Titre principal (H1) :** Cinq piliers pour défendre une infrastructure urbaine
- **Sous-titre :** Un modèle pragmatique combinant cloisonnement réseau, principes Zero Trust, détection non intrusive, culture humaine et capacité de reprise manuelle.
- **Repère visuel (Métaphore du réseau) :** Réorganisation dynamique du réseau de nœuds en zones et conduits cloisonnés (IEC 62443 / modèle de Purdue). Lorsqu'une anomalie est détectée sur un conduit d'interconnexion, elle reste contenue dans sa zone sans atteindre le cœur opérationnel.

---

## L'essentiel (Lecture rapide — 55 s)

La défense d'une ville connectée ne consiste pas à empiler des outils coûteux sur un réseau désorganisé. En s'appuyant sur le **NIST SP 800-82 Rev. 3** `[SRC-07]`, la série normative **ISA/IEC 62443** `[SRC-09]`, le **Zero Trust Maturity Model v2.0 de la CISA** `[SRC-10]` et les guides de l'**ANSSI** `[SRC-11]`, elle repose sur **cinq mesures complémentaires** :

1. **Segmentation stricte IT/OT :** Séparer physiquement et logiquement les réseaux bureautiques (IT) des réseaux de conduite technique (OT) via des zones démilitarisées dédiées `[SRC-07, SRC-09]`.
2. **Application graduée du Zero Trust :** Supprimer la confiance implicite liée au seul fait d'être connecté au réseau interne ; vérifier systématiquement l'identité, l'état du terminal et le droit d'accès minimal `[SRC-10]`.
3. **Détection passive d'anomalies :** Observer le trafic industriel de façon non intrusive pour repérer les comportements anormaux sans perturber le procédé physique `[SRC-11]`.
4. **Formation et hygiène opérationnelle :** Préparer les équipes techniques et administratives à reconnaître l'ingénierie sociale et à respecter les règles d'accès et de supports amovibles `[SRC-01, SRC-05]`.
5. **Plan de réponse et mode dégradé :** Disposer de sauvegardes hors ligne testées, d'exercices conjoints IT/OT et de procédures manuelles de continuité de service `[SRC-05, SRC-06]`.

---

## Analyse approfondie (4 min)

### Pilier 1 — Segmentation IT/OT par zones et conduits

Le principe fondamental énoncé par la norme **ISA/IEC 62443** `[SRC-09]` et le guide **NIST SP 800-82 Rev. 3** `[SRC-07]` consiste à refuser les réseaux plats où chaque équipement peut dialoguer librement avec tous les autres.

- **Cloisonnement en niveaux (Modèle de Purdue) :** Les systèmes bureautiques (messagerie, gestion) restent séparés des serveurs de supervision SCADA et, plus bas encore, des automates de terrain par des zones tampons (DMZ industrielles) qui filtrent strictement les flux autorisés `[SRC-07]`.
- **Maîtrise des flux de télémaintenance :** Les accès distants des prestataires ne doivent jamais aboutir directement sur un automate. Comme le recommande la doctrine de l'ANSSI `[SRC-11]` et l'alerte CISA consécutive à l'incident ukrainien de 2015 `[SRC-05]`, ils passent par des passerelles dédiées, temporaires, journalisées et protégées par une authentification multifacteur (MFA).
- **Bénéfice concret :** Si un poste administratif est compromis, l'incident demeure contenu dans la zone bureautique et n'atteint pas les vannes, feux ou sous-stations.

### Pilier 2 — Principes Zero Trust adaptés à l'environnement urbain

Publié en avril 2023, le **Zero Trust Maturity Model (v2.0)** de la CISA structure l'abandon du modèle historique « château fort » — où tout acteur situé à l'intérieur du périmètre bénéficie d'une confiance automatique `[SRC-10]`. Il s'articule autour de **cinq piliers** (*Identité, Appareils, Réseaux, Applications & charges de travail, Données*) et de trois capacités transverses (*Gouvernance, Visibilité & analytique, Automatisation & orchestration*) `[SRC-10]`.

Pour une collectivité, l'adoption suit quatre paliers progressifs (*Traditional, Initial, Advanced, Optimal*) `[SRC-10]` :
- **Moindre privilège strict :** Un compte de maintenance d'éclairage public n'a accès qu'aux contrôleurs d'éclairage de son secteur géographique, jamais à la supervision de l'eau potable.
- **Vérification continue des identités et des terminaux :** Les consoles portables de diagnostic ne sont autorisées à se raccorder au réseau OT qu'après vérification de leur conformité et dans une fenêtre d'intervention validée `[SRC-10, SRC-11]`.
- **Adaptation aux contraintes OT :** Là où un automate ancien ne peut pas exécuter d'agent de sécurité moderne, les contrôles Zero Trust s'appliquent au niveau des passerelles d'accès, des commutateurs administrables et des comptes d'administration `[SRC-07, SRC-10]`.

### Pilier 3 — Détection d'anomalies et supervision non intrusive

Un enseignement majeur de *Stuxnet* `[SRC-02]` et des travaux de l'**ANSSI** (*Doctrine de détection pour les systèmes industriels*, 2020) `[SRC-11]` réside dans la distinction entre **sûreté de fonctionnement** et **détection de sécurité**.

- **Ne jamais perturber le procédé physique :** Contrairement à l'informatique de bureau, les outils de détection déployés en environnement OT doivent fonctionner de manière **passive** (par recopie de flux réseau, sans balayage actif susceptible de saturer ou de figer un automate temps réel) `[SRC-07, SRC-11]`.
- **Surveillance prioritaire des points de passage :** L'ANSSI recommande de positionner en priorité les sondes de détection aux interconnexions entre le SI de gestion (IT), les réseaux distants et les zones de télémaintenance `[SRC-11]`.
- **Corrélation avec le comportement nominal :** Un automate exécute un cycle stable et prévisible. L'apparition d'une connexion inhabituelle, d'une modification de configuration hors fenêtre de maintenance ou d'un transfert inattendu déclenche une alerte lisible à la fois par l'équipe cyber et par l'exploitant `[SRC-11]`.

### Pilier 4 — Facteur humain, sous-traitance et hygiène opérationnelle

Puisque l'ingénierie sociale et les erreurs de manipulation figurent au cœur des incidents réels `[SRC-05, SRC-13]`, la défense humaine doit être conçue comme un **système de soutien** aux équipes, non comme une contrainte punitive.

- **Formation contextualisée par métier :** Les agents administratifs sont formés à identifier les tentatives d'hameçonnage ; les techniciens OT sont sensibilisés aux risques liés aux supports amovibles et aux bornes de diagnostic `[SRC-01, SRC-05]`.
- **Ergonomie des procédures sécurisées :** Des outils d'accès sécurisés simples d'emploi réduisent la tentation de contourner les règles lors d'interventions urgentes.
- **Maîtrise des tiers et prestataires :** Toute clause de marché public portant sur un équipement urbain connecté intègre les exigences de la série **IEC 62443** (comptes nominatifs, absence de mots de passe par défaut, journalisation des télémaintenances, révocation immédiate en fin de contrat) `[SRC-09, SRC-11]`.

### Pilier 5 — Plan de réponse à incident, sauvegardes et mode dégradé

L'incident ukrainien de 2015 démontre que la résilience finale se joue autant dans la préparation de la reprise que dans la prévention `[SRC-06]`. En alignement avec les fonctions *Répondre* et *Rétablir* du **NIST CSF 2.0** `[SRC-08]` :

- **Sauvegardes hors ligne et vérifiées :** Conserver hors réseau (immuables ou physiquement déconnectées) les configurations d'automates, schémas réseau et images système afin de permettre une reconstruction propre `[SRC-05]`.
- **Canaux de communication de secours :** Prévoir des moyens de coordination indépendants du réseau informatique compromis (téléphonie dédiée ou radio de terrain) `[SRC-05, SRC-06]`.
- **Maintien du mode dégradé manuel :** S'assurer que les installations critiques peuvent être basculées et pilotées localement par des équipes entraînées, et tester régulièrement ce basculement lors d'exercices associant direction générale, direction des systèmes d'information (DSI) et services techniques `[SRC-06, SRC-08]`.

---

## Transition

Disposer d'un cadre technique rigoureux ne suffit pas sans décision politique et budgétaire claire. La page suivante traduit ces cinq piliers en feuille de route concrète pour les décideurs municipaux.

- **Étape suivante :** [Conclusion & Recommandations](/fr/recommandations) — *La feuille de route des décideurs municipaux.*
