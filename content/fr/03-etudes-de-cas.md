# Page 3 : Études de cas documentées

**Route :** `/fr/etudes-de-cas`
**Titre de navigation :** Études de cas
**Temps de lecture :** 1 min (Essentiel) · 4 min (Approfondi)

---

## En-tête de page

- **Sur-titre :** Retours d'expérience vérifiés · Post-mortems publics
- **Titre principal (H1) :** Deux précédents historiques qui ont redéfini la sécurité des infrastructures
- **Sous-titre :** Faits établis, chronologie sourcée et leçons d'architecture tirées de Stuxnet (2009–2010) et de la coupure du réseau électrique ukrainien (2015).
- **Avertissement éditorial :** Conformément à notre charte de rigueur et de sûreté, cette page rapporte exclusivement les faits publics documentés par les organismes d'analyse et agences officielles, sans détailler aucune méthode offensive ou reproductible.

---

## L'essentiel (Lecture rapide — 1 min)

Deux événements documentés servent de référence mondiale pour comprendre le passage du risque numérique à l'impact physique :

1. **Stuxnet (Natanz, 2009–2010) :** Découvert publiquement en juin 2010 `[SRC-01]`, ce programme malveillant ciblait les automates industriels pilotant les centrifugeuses IR-1 du site nucléaire de Natanz (Iran). Selon l'analyse de l'Institute for Science and International Security (ISIS), environ **1 000 centrifugeuses** (sur quelque 9 000 déployées) ont été mises hors service ou remplacées entre fin 2009 et début 2010 `[SRC-04]`. **Leçon clé :** l'isolement physique d'un réseau (*air-gap*) ne suffit pas si les supports amovibles et les interfaces de maintenance restent non maîtrisés `[SRC-01, SRC-02]`.
2. **Réseau électrique ukrainien (23 décembre 2015) :** Premier incident cyber publiquement confirmé ayant provoqué une panne d'électricité `[SRC-06]`. Trois compagnies régionales de distribution (*oblenergos*) ont subi des coupures coordonnées privant d'électricité environ **225 000 clients pendant 1 à 6 heures** `[SRC-05, SRC-06]`. **Leçon clé :** l'absence de segmentation IT/OT, le manque d'authentification multifacteur sur les accès distants et l'importance vitale du **mode dégradé manuel** ont déterminé à la fois la vulnérabilité initiale et la rapidité du rétablissement `[SRC-05, SRC-06]`.

---

## Analyse approfondie (4 min)

### Cas n° 1 — Stuxnet et le site de Natanz (2009–2010)

#### Contexte et faits établis
Le 17 juin 2010, une société de sécurité informatique (VirusBlokAda) identifie un programme malveillant d'une complexité inhabituelle, baptisé par la suite **Stuxnet** `[SRC-01]`. Les analyses publiées notamment par **Symantec Security Response** (*W32.Stuxnet Dossier*, février 2011) `[SRC-01]` et par **Ralph Langner** (*To Kill a Centrifuge*, novembre 2013) `[SRC-02]` établissent que ce programme visait spécifiquement des systèmes de contrôle industriel (ICS) équipés d'automates programmables Siemens S7 `[SRC-01, SRC-02]`.

En croisant ces travaux avec les données d'inspection de l'Agence internationale de l'énergie atomique (AIEA), l'**Institute for Science and International Security (ISIS)** publie en décembre 2010 puis en février 2011 une évaluation de l'impact matériel à l'usine d'enrichissement de Natanz, en Iran `[SRC-03, SRC-04]`.

#### Chronologie documentée
- **Fin 2009 – début 2010 :** Les relevés associés aux inspections de l'AIEA font apparaître un taux inhabituellement élevé de mise hors service et de remplacement de centrifugeuses de type IR-1 à Natanz ; ISIS estime qu'environ **1 000 centrifugeuses IR-1** (sur quelque 9 000 installées à cette période) ont dû être retirées ou remplacées `[SRC-03, SRC-04]`.
- **17 juin 2010 :** Découverte publique de Stuxnet `[SRC-01]`.
- **Décembre 2010 – février 2011 :** Publication des dossiers d'analyse technique et nucléaire reliant le ciblage spécifique du programme aux paramètres de fonctionnement des centrifugeuses IR-1 `[SRC-01, SRC-03, SRC-04]`.

#### Impact constaté et nuances factuelles
- **Effet physique documenté :** Stuxnet constitue le premier cas public attesté d'un programme informatique conçu pour provoquer une dégradation mécanique réelle d'équipements industriels `[SRC-02]`.
- **Effet stratégique mesuré :** Selon l'évaluation actualisée d'ISIS (février 2011), bien que l'expansion attendue du parc de centrifugeuses ait été perturbée et ralentie, la production globale d'uranium faiblement enrichi de l'installation s'est maintenue à un niveau relativement stable durant cette période grâce au remplacement des machines et aux ajustements opérationnels `[SRC-04]`.

#### Failles structurelles mises en évidence et leçons retenues
1. **Le mythe de l'isolement absolu (*air-gap*) :** Même sans connexion permanente à Internet, un site critique échange des fichiers de diagnostic, des mises à jour logicielles et des équipements portables de maintenance. Sans contrôle strict des supports amovibles et de la chaîne de prestation, la frontière reste perméable `[SRC-01]`.
2. **L'angle mort entre sûreté et sécurité :** Les alarmes industrielles classiques surveillent la conformité physique du procédé (température, pression, vitesse). Tant que l'opérateur ne dispose pas d'une supervision dédiée à l'intégrité informatique des automates, une anomalie logicielle peut être prise à tort pour une usure mécanique ordinaire `[SRC-02, SRC-11]`.

---

### Cas n° 2 — Le réseau électrique ukrainien (23 décembre 2015)

#### Contexte et faits établis
Le **23 décembre 2015**, trois opérateurs régionaux de distribution d'électricité en Ukraine (*oblenergos*) — **Prykarpattyaoblenergo** (région d'Ivano-Frankivsk), **Kyivoblenergo** et **Chernivtsioblenergo** — subissent des coupures de courant coordonnées et non planifiées `[SRC-05, SRC-06]`.

Documenté dans l'alerte officielle américaine **CISA / ICS-CERT IR-ALERT-H-16-056-01** (publiée le 25 février 2016, mise à jour en juillet 2021) `[SRC-05]` ainsi que dans le rapport conjoint **E-ISAC et SANS Institute** (*Analysis of the Cyber Attack on the Ukrainian Power Grid*, 18 mars 2016) `[SRC-06]`, cet événement représente la première coupure électrique publiquement confirmée comme résultant d'une cyberintrusion `[SRC-06]`. Le gouvernement américain a attribué ultérieurement cette campagne à des acteurs étatiques russes `[SRC-05]`.

#### Chronologie documentée et bilan matériel
- **Avant le 23 décembre 2015 :** Compromission préalable des réseaux d'entreprise à la suite d'actions d'ingénierie sociale et d'utilisation d'identifiants d'accès distants, permettant aux acteurs d'accéder aux environnements de supervision SCADA `[SRC-05, SRC-06]`.
- **23 décembre 2015 :** Des coupures coordonnées plongent dans le noir environ **225 000 clients** pendant **1 à 6 heures** sur les zones desservies par les trois distributeurs ; les analyses techniques documentent la mise hors tension de **30 sous-stations** chez *Prykarpattyaoblenergo* (sept postes de 110 kV et vingt-trois de 35 kV), tandis que les premiers bilans publics citaient au moins **27 sous-stations** touchées sur l'ensemble des opérateurs concernés `[SRC-05, SRC-06]`.
- **Perturbation simultanée du rétablissement :** La perte de disponibilité d'équipements informatiques de contrôle, de convertisseurs de communication en sous-station, de systèmes d'alimentation secourue et des centres d'appels clients complique le diagnostic et prive les usagers d'information `[SRC-05, SRC-06]`.
- **1 à 6 heures après le début de l'incident :** Les équipes de terrain rétablissent l'alimentation électrique en basculant les disjoncteurs **manuellement sur site** `[SRC-06]`.

#### Failles structurelles mises en évidence et leçons retenues
L'analyse conjointe de la CISA et du SANS/E-ISAC met en lumière trois enseignements directement transposables aux infrastructures urbaines :
1. **L'enchaînement IT → OT :** Ce n'est pas une faille obscure dans un équipement de haute tension qui a permis l'incident, mais la combinaison d'une compromission bureautique, d'accès distants insuffisamment protégés (absence d'authentification multifacteur) et d'une segmentation réseau trop permissive entre le SI de gestion et le réseau SCADA `[SRC-05, SRC-06]`.
2. **La paralysie de la visibilité et de la communication :** Priver un opérateur de sa console de supervision tout en saturant ses lignes téléphoniques accroît la durée de crise. Les plans de continuité doivent prévoir des canaux de communication hors bande (*out-of-band*) `[SRC-05, SRC-06]`.
3. **La valeur décisive du mode dégradé manuel :** Si la coupure n'a duré que quelques heures malgré l'ampleur de la perturbation informatique, c'est parce que les opérateurs ukrainiens disposaient de personnels formés et de procédures éprouvées pour reprendre la main manuellement et physiquement sur leurs postes `[SRC-06]`.

---

## Synthèse comparative

| Critère | Stuxnet (2009–2010) | Réseau électrique ukrainien (2015) |
| :--- | :--- | :--- |
| **Secteur touché** | Enrichissement nucléaire (Natanz) `[SRC-03]` | Distribution électrique régionale (3 *oblenergos*) `[SRC-06]` |
| **Impact vérifié** | ~1 000 centrifugeuses IR-1 remplacées `[SRC-04]` | ~225 000 clients privés de courant pendant 1 à 6 h `[SRC-06]` |
| **Point de rupture clé** | Rupture d'isolement (*air-gap*) via supports/interfaces et absence de détection OT `[SRC-01, SRC-02]` | Ingénierie sociale IT, accès distants sans MFA et faible segmentation IT/OT `[SRC-05, SRC-06]` |
| **Facteur de résilience** | Remplacement matériel des équipements `[SRC-04]` | Reprise de contrôle manuelle et locale par les équipes de terrain `[SRC-06]` |

- **Étape suivante :** [Cadre de défense](/fr/cadre-de-defense) — *Comment traduire ces leçons en architecture durable pour une collectivité.*
