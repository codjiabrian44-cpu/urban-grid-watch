# Architecture du site & Navigation / Sitemap & Information Architecture

**Projet :** Failles invisibles — Cybersécurité des infrastructures urbaines (*Invisible Faults — Urban Infrastructure Cybersecurity*)
**Langue principale :** Français (`fr`) — **Langue secondaire :** Anglais (`en`)
**Public cible :** Jury international non spécialiste mais exigeant sur la rigueur factuelle, la clarté analytique et la qualité éditoriale.

---

## 1. Double parcours de lecture / Dual Reading-Depth Architecture

Conformément au cahier des charges (`BRIEF.md`), le site s'adapte immédiatement au temps disponible du lecteur via deux niveaux de lecture intégrés sur chaque page :

| Mode | Durée totale (6 pages) | Structure éditoriale | Usage |
| :--- | :--- | :--- | :--- |
| **Essentiel / Quick Read** | **~5 minutes** | Chaque page s'ouvre sur un bloc synthétique (« L'essentiel en 45 secondes » / *In Brief*), accompagné des chiffres clés vérifiés et d'un point d'ancrage visuel sur le réseau de nœuds. | Lecture rapide par un membre du jury pressé ou décideur municipal souhaitant saisir la thèse, les preuves et les priorités d'action. |
| **Approfondi / Deep Dive** | **15–20 minutes** | Développe l'analyse complète sous le bloc synthétique : distinctions conceptuelles IT/OT, chronologies documentées, encadrés méthodologiques, renvois précis aux normes et citations bibliographiques. | Lecture intégrale pour évaluation approfondie de la rigueur factuelle et de la cohérence du cadre de défense. |

Dans l'interface, un sélecteur persistant en en-tête ou en haut de page (« **Lecture rapide (5 min)** » / « **Lecture approfondie (20 min)** ») permet soit d'afficher uniquement les synthèses et repères clés, soit de déployer l'intégralité du texte analytique, sans jamais recharger ni perdre sa position.

---

## 2. Plan du site / Sitemap (6 pages)

| # | Route FR | Route EN | Titre Navigation (FR / EN) | Rôle éditorial | Durée Essentiel / Approfondie |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | `/fr/` | `/en/` | **Accueil** / **Home** | Accroche, formulation de la thèse centrale, présentation de la métaphore du réseau surveillé, entrée vers les deux parcours de lecture. | 45 s / 2 min 30 |
| **02** | `/fr/vulnerabilites` | `/en/vulnerabilities` | **Vulnérabilités** / **Vulnerabilities** | Taxonomie strictement conceptuelle en 4 axes (technique, humaine, physique, organisationnelle) expliquant pourquoi les failles s'enchaînent. | 50 s / 3 min 30 |
| **03** | `/fr/etudes-de-cas` | `/en/case-studies` | **Études de cas** / **Case Studies** | Post-mortems documentés et sourcés : **Stuxnet** (Natanz, 2009–2010) et **Réseau électrique ukrainien** (décembre 2015). Faits, chronologie, leçons retenues. | 1 min / 4 min |
| **04** | `/fr/cadre-de-defense` | `/en/defense-framework` | **Cadre de défense** / **Defense Framework** | Architecture défensive en 5 piliers : segmentation IT/OT, Zero Trust, détection d'anomalies, formation humaine, plan de réponse et mode dégradé. | 55 s / 4 min |
| **05** | `/fr/recommandations` | `/en/recommendations` | **Recommandations** / **Recommendations** | Feuille de route pragmatique en 3 horizons pour les décideurs municipaux : gouvernance, inventaire, résilience opérationnelle. | 45 s / 3 min |
| **06** | `/fr/sources` | `/en/sources` | **Sources & Méthode** / **Sources & Methodology** | Note méthodologique sur l'intégrité factuelle et la sûreté des contenus, suivie de la bibliographie complète vérifiée (`SRC-01` à `SRC-13`). | 35 s / 2 min |

**Total :** ~4 min 50 (parcours Essentiel) · ~19 min (parcours Approfondi).

---

## 3. Métaphore visuelle filée / Visual Grid Metaphor Specification

Tout au long des 6 pages, un canevas discret de points et de connexions géométriques accompagne le défilement :

- **Signification stricte :** Le réseau représente les interdépendances normales d'une infrastructure urbaine (énergie, eau, transports, gestion municipale). Lorsqu'un nœud passe à l'état d'alerte (accent rouge signal), il symbolise **exclusivement la détection d'une anomalie comportementale et son isolement défensif** (*anomalie détectée*), jamais une propagation d'attaque ni un chemin d'intrusion.
- **Correspondance par page :**
  - **Page 1 (Accueil) :** Grille complète en équilibre ; au défilement vers la thèse, un nœud périphérique signale une anomalie isolée par une boucle de détection.
  - **Page 2 (Vulnérabilités) :** Quatre grappes géométriques distinctes (technique, humaine, physique, organisationnelle) montrant la convergence des facteurs de risque sans flux offensif.
  - **Page 3 (Études de cas) :** Ligne temporelle structurée associée à deux repères de nœuds critiques (isolement rompu / télémaintenance non segmentée).
  - **Page 4 (Cadre de défense) :** Réorganisation visuelle du réseau en **zones et conduits** cloisonnés (alignement IEC 62443 / modèle de Purdue), avec barrières de contrôle entre zone IT et zone OT.
  - **Page 5 (Recommandations) :** Grille stabilisée sous supervision unifiée (gouvernance + mode dégradé vérifié).
  - **Page 6 (Sources) :** Trame éditoriale sobre et statique, privilégiant la lisibilité documentaire.

---

## 4. Libellés d'interface (UI Microcopy) — FR / EN

| Élément d'interface | Français (Principal) | Anglais (Secondaire) |
| :--- | :--- | :--- |
| Titre du site | Failles invisibles | Invisible Faults |
| Sous-titre | Cybersécurité des infrastructures urbaines | Cybersecurity of Urban Infrastructure |
| Lien d'évitement (A11y) | Aller au contenu principal | Skip to main content |
| Sélecteur de langue | Langue : FR / EN | Language: FR / EN |
| Sélecteur de densité | Lecture rapide (5 min) · Lecture approfondie (20 min) | Quick Read (5 min) · Deep Dive (20 min) |
| Étiquette bloc synthèse | L'essentiel | In Brief |
| Étiquette bloc détaillé | Analyse approfondie | Deep Dive |
| Étiquette métaphore réseau | Moniteur d'intégrité — Anomalie détectée et isolée | Integrity Monitor — Anomaly Detected and Isolated |
| Renvoi bibliographique | Voir source | View source |
| Navigation bas de page (Précédent) | Page précédente | Previous page |
| Navigation bas de page (Suivant) | Page suivante | Next page |
| Mention de sûreté (Footer) | Dossier documentaire à visée pédagogique et décisionnelle — Aucune méthode offensive décrite. | Documentary brief for educational and decision-making purposes — No offensive techniques described. |
| Lien sources (Footer) | Bibliographie vérifiée & méthodologie | Verified bibliography & methodology |
