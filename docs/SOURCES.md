# Sources documentaires vérifiées / Verified Documentary Sources

Ce document recense l'ensemble des sources publiques vérifiées utilisées dans le site *Failles invisibles — Cybersécurité des infrastructures urbaines*. Conformément aux règles d'intégrité factuelle du projet (`AGENTS.md`), aucune affirmation factuelle sur un incident réel ou sur un référentiel normatif n'est présentée sans référence vérifiable listée ci-dessous.

This document catalogs every verified public source used across *Failles invisibles — Urban Infrastructure Cybersecurity*. In accordance with the project's factual integrity rules (`AGENTS.md`), no factual claim regarding a real incident or normative standard appears without a verifiable reference listed below.

---

## 1. Étude de cas — Stuxnet (Natanz, 2009–2010)

### [SRC-01] W32.Stuxnet Dossier (Version 1.4)
- **Auteurs / Authors :** Nicolas Falliere, Liam O Murchu, Eric Chien
- **Éditeur / Publisher :** Symantec Security Response
- **Date de publication / Publication date :** Février 2011 / February 2011
- **URL vérifiée / Verified URL :** https://archive.org/details/w32_stuxnet_dossier (archive de référence du document Symantec v1.4)
- **Affirmations appuyées / Claims supported (FR `01-accueil.md`, `02-categories-vulnerabilites.md`, `03-etudes-de-cas.md`, `04-cadre-de-defense.md`, `05-conclusion-recommandations.md` ; EN `01-home.md`, `02-vulnerability-categories.md`, `03-case-studies.md`, `04-defense-framework.md`, `05-conclusion-recommendations.md`) :**
  - Découverte publique initiale de Stuxnet en juin 2010 (17 juin 2010) à la suite de l'identification d'un échantillon par VirusBlokAda.
  - Conception ciblant spécifiquement des systèmes de contrôle industriel (ICS) et des automates programmables (PLC) Siemens utilisés dans les procédés industriels.
  - Démonstration qu'un environnement isolé physiquement (*air-gap*) reste exposé via les supports amovibles et les interfaces de maintenance.

### [SRC-02] To Kill a Centrifuge: A Technical Analysis of What Stuxnet's Creators Tried to Achieve
- **Auteur / Author :** Ralph Langner
- **Éditeur / Publisher :** The Langner Group
- **Date de publication / Publication date :** Novembre 2013 / November 2013
- **URL vérifiée / Verified URL :** https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf
- **Affirmations appuyées / Claims supported (FR `02-categories-vulnerabilites.md`, `03-etudes-de-cas.md`, `04-cadre-de-defense.md` ; EN `02-vulnerability-categories.md`, `03-case-studies.md`, `04-defense-framework.md`) :**
  - Ciblage des automates Siemens S7 pilotant les centrifugeuses d'enrichissement d'uranium IR-1 à Natanz (Iran).
  - Caractérisation de Stuxnet comme premier cas documenté d'une cyberarme provoquant une dégradation mécanique physique sur une installation industrielle critique.
  - Distinction entre la supervision de sûreté industrielle (alarmes de procédé) et la supervision de sécurité informatique.

### [SRC-03] Did Stuxnet Take Out 1,000 Centrifuges at the Natanz Enrichment Plant?
- **Auteurs / Authors :** David Albright, Paul Brannan, Christina Walrond
- **Éditeur / Publisher :** Institute for Science and International Security (ISIS)
- **Date de publication / Publication date :** 22 décembre 2010 / December 22, 2010
- **URL vérifiée / Verified URL :** https://isis-online.org/isis-reports/detail/did-stuxnet-take-out-1000-centrifuges-at-the-natanz-enrichment-plant/
- **Affirmations appuyées / Claims supported (FR `03-etudes-de-cas.md` ; EN `03-case-studies.md`) :**
  - Rapprochement entre les données d'inspection de l'Agence internationale de l'énergie atomique (AIEA) à l'usine d'enrichissement de Natanz (2009–2010) et l'analyse du ciblage industriel de Stuxnet sur les centrifugeuses IR-1.

### [SRC-04] Stuxnet Malware and Natanz: Update of ISIS December 22, 2010 Report
- **Auteurs / Authors :** David Albright, Paul Brannan, Christina Walrond
- **Éditeur / Publisher :** Institute for Science and International Security (ISIS)
- **Date de publication / Publication date :** 15 février 2011 / February 15, 2011
- **URL vérifiée / Verified URL :** https://isis-online.org/isis-reports/detail/stuxnet-malware-and-natanz-update-of-isis-december-22-2010-report
- **Affirmations appuyées / Claims supported (FR `03-etudes-de-cas.md` ; EN `03-case-studies.md`) :**
  - Estimation d'environ 1 000 centrifugeuses IR-1 (sur quelque 9 000 déployées à l'époque) mises hors service ou remplacées entre fin 2009 et début 2010.
  - Constat que, malgré ces pertes matérielles et le ralentissement de l'expansion attendue, la production globale d'uranium faiblement enrichi s'est maintenue à un niveau relativement stable grâce au remplacement des équipements et aux ajustements opérationnels.

---

## 2. Étude de cas — Réseau électrique ukrainien (23 décembre 2015)

### [SRC-05] Cyber-Attack Against Ukrainian Critical Infrastructure (ICS Alert IR-ALERT-H-16-056-01)
- **Éditeur / Publisher :** U.S. Department of Homeland Security (DHS) / Cybersecurity and Infrastructure Security Agency (CISA — anciennement ICS-CERT)
- **Date de publication / Publication date :** 25 février 2016 (mise à jour d'attribution en juillet 2021) / February 25, 2016 (attribution update July 2021)
- **URL vérifiée / Verified URL :** https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01
- **Affirmations appuyées / Claims supported (FR `01-accueil.md`, `02-categories-vulnerabilites.md`, `03-etudes-de-cas.md`, `04-cadre-de-defense.md`, `05-conclusion-recommandations.md` ; EN `01-home.md`, `02-vulnerability-categories.md`, `03-case-studies.md`, `04-defense-framework.md`, `05-conclusion-recommendations.md`) :**
  - Incident survenu le 23 décembre 2015 contre trois compagnies régionales de distribution électrique (*oblenergos*) en Ukraine.
  - Coupures coordonnées affectant environ 225 000 clients pendant plusieurs heures.
  - Compromission impliquant des accès distants vers les réseaux SCADA/ICS, l'indisponibilité délibérée d'équipements de communication, de convertisseurs série-Ethernet en sous-station, de systèmes d'alimentation secourue (onduleurs / UPS) et de centres d'appels, compliquant le diagnostic et le rétablissement.
  - Attribution officielle par le gouvernement américain à des acteurs étatiques russes.
  - Recommandations défensives : segmentation stricte entre réseau d'entreprise (IT) et réseau industriel (OT/SCADA), authentification multifacteur (MFA) sur les accès distants, sauvegardes hors ligne et contrôle des applications.

### [SRC-06] Analysis of the Cyber Attack on the Ukrainian Power Grid (Defense Use Case)
- **Auteurs / Authors :** Robert M. Lee, Michael J. Assante, Tim Conway
- **Éditeurs / Publishers :** Electricity Information Sharing and Analysis Center (E-ISAC) & SANS Institute (SANS ICS)
- **Date de publication / Publication date :** 18 mars 2016 / March 18, 2016
- **URL vérifiée / Verified URL :** https://nsarchive.gwu.edu/document/21570-sans-and-electricity-information-sharing-and (archive documentaire de la George Washington University ; catalogue SANS ICS Defense Use Cases : https://www.sans.org/ics-defense-use-cases/)
- **Affirmations appuyées / Claims supported (FR `02-categories-vulnerabilites.md`, `03-etudes-de-cas.md`, `04-cadre-de-defense.md`, `05-conclusion-recommandations.md` ; EN `02-vulnerability-categories.md`, `03-case-studies.md`, `04-defense-framework.md`, `05-conclusion-recommendations.md`) :**
  - Premier incident cyber publiquement documenté ayant provoqué une panne d'électricité sur un réseau de distribution.
  - Trois *oblenergos* affectés : *Prykarpattyaoblenergo* (région d'Ivano-Frankivsk), *Kyivoblenergo* et *Chernivtsioblenergo*.
  - Environ 225 000 consommateurs privés d'électricité pendant 1 à 6 heures à travers les zones des trois opérateurs ; le rapport E-ISAC/SANS documente la mise hors tension de 30 sous-stations chez *Prykarpattyaoblenergo* (sept postes de 110 kV et vingt-trois de 35 kV), tandis que les premiers bilans publics citaient au moins 27 sous-stations touchées à l'échelle des compagnies affectées.
  - Perturbation simultanée des ordinateurs de supervision, des convertisseurs de communication en sous-station, des systèmes d'alimentation secourue (onduleurs / UPS) et des centres d'appels, illustrant la dépendance des sites distants à l'alimentation et aux liaisons de télécommunication.
  - Rétablissement du service rendu possible en quelques heures grâce aux procédures manuelles locales des équipes d'exploitation sur le terrain.
  - Leçons tirées : séparation IT/OT, préparation au mode dégradé et exercices de réponse à incident incluant les équipes opérationnelles.

---

## 3. Référentiels normatifs, guides techniques et cadre réglementaire

### [SRC-07] NIST Special Publication 800-82 Revision 3 — Guide to Operational Technology (OT) Security
- **Éditeur / Publisher :** National Institute of Standards and Technology (NIST)
- **Date de publication / Publication date :** Septembre 2023 / September 2023
- **URL vérifiée / Verified URL :** https://csrc.nist.gov/pubs/sp/800/82/r3/final
- **Affirmations appuyées / Claims supported (FR `01-accueil.md`, `02-categories-vulnerabilites.md`, `04-cadre-de-defense.md`, `05-conclusion-recommandations.md` ; EN `01-home.md`, `02-vulnerability-categories.md`, `04-defense-framework.md`, `05-conclusion-recommendations.md`) :**
  - Élargissement du périmètre au-delà des seuls ICS traditionnels vers l'ensemble des technologies opérationnelles (OT), incluant l'automatisation des bâtiments, les transports et le contrôle d'accès physique.
  - Principes de défense en profondeur, architectures segmentées (ex. modèle de Purdue), gestion sécurisée des accès distants et adaptation des contrôles de sécurité aux contraintes de disponibilité et de sûreté physique de l'OT.

### [SRC-08] NIST Cybersecurity Framework (CSF) 2.0 (NIST CSWP 29)
- **Éditeur / Publisher :** National Institute of Standards and Technology (NIST)
- **Date de publication / Publication date :** 26 février 2024 / February 26, 2024
- **URL vérifiée / Verified URL :** https://csrc.nist.gov/pubs/cswp/29/final (page principale : https://www.nist.gov/cyberframework)
- **Affirmations appuyées / Claims supported (FR `02-categories-vulnerabilites.md`, `04-cadre-de-defense.md`, `05-conclusion-recommandations.md` ; EN `02-vulnerability-categories.md`, `04-defense-framework.md`, `05-conclusion-recommendations.md`) :**
  - Structuration de la gestion du risque cyber en six fonctions cœur : Gouverner (*Govern*, ajoutée en version 2.0), Identifier, Protéger, Détecter, Répondre et Rétablir (*Recover*).
  - Accent renforcé sur la gouvernance, la responsabilité des décideurs et la gestion des risques liés aux tiers et à la chaîne d'approvisionnement.

### [SRC-09] ISA/IEC 62443 Series of Standards — Security for Industrial Automation and Control Systems
- **Éditeurs / Publishers :** International Electrotechnical Commission (IEC) & International Society of Automation (ISA, comité ISA99)
- **Date de publication / Publication date :** Série normative active / Active standards series
- **URL vérifiée / Verified URL :** https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards (portail IEC : https://iec.ch/)
- **Affirmations appuyées / Claims supported (FR `04-cadre-de-defense.md`, `05-conclusion-recommandations.md` ; EN `04-defense-framework.md`, `05-conclusion-recommendations.md`) :**
  - Architecture en zones et conduits permettant de cloisonner les systèmes industriels et urbains selon leur niveau de criticité.
  - Exigences de sécurité couvrant l'ensemble du cycle de vie : exploitants, intégrateurs et fournisseurs d'équipements.

### [SRC-10] CISA Zero Trust Maturity Model (Version 2.0)
- **Éditeur / Publisher :** Cybersecurity and Infrastructure Security Agency (CISA)
- **Date de publication / Publication date :** Avril 2023 / April 2023
- **URL vérifiée / Verified URL :** https://www.cisa.gov/zero-trust-maturity-model (PDF officiel : https://www.cisa.gov/sites/default/files/2023-04/zero_trust_maturity_model_v2_508.pdf)
- **Affirmations appuyées / Claims supported (FR `04-cadre-de-defense.md`, `05-conclusion-recommandations.md` ; EN `04-defense-framework.md`, `05-conclusion-recommendations.md`) :**
  - Modèle de maturité Zero Trust structuré autour de cinq piliers (Identité, Appareils, Réseaux, Applications & charges de travail, Données) et de capacités transverses (Gouvernance, Visibilité & analytique, Automatisation & orchestration).
  - Progression graduée par paliers (*Traditional*, *Initial*, *Advanced*, *Optimal*) permettant d'éliminer la confiance implicite liée à la seule localisation sur le réseau.

### [SRC-11] Guides ANSSI — Cybersécurité des systèmes industriels (Classification, Mesures détaillées, Doctrine de détection)
- **Éditeur / Publisher :** Agence nationale de la sécurité des systèmes d'information (ANSSI)
- **Dates de publication / Publication dates :**
  - *La cybersécurité des systèmes industriels — Méthode de classification* et *Mesures détaillées* (v1.0 janvier 2014 ; actualisation majeure en 2025, dont v2.0 *Mesures détaillées* publiée en novembre 2025 sur la plateforme officielle *MesServicesCyber*)
  - *Doctrine de détection pour les systèmes industriels* (ANSSI-PA-084, 2 décembre 2020, indexée dans le catalogue officiel `cyber.gouv.fr/publications`)
- **URL vérifiées / Verified URLs :**
  - Méthode de classification (portail MesServicesCyber) : https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels-methode-de-classification
  - Mesures détaillées (portail MesServicesCyber) : https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels-mesures-detaillees
  - Catalogue des publications ANSSI (dont ANSSI-PA-084) : https://cyber.gouv.fr/publications
- **Affirmations appuyées / Claims supported (FR `01-accueil.md`, `02-categories-vulnerabilites.md`, `03-etudes-de-cas.md`, `04-cadre-de-defense.md`, `05-conclusion-recommandations.md` ; EN `01-home.md`, `02-vulnerability-categories.md`, `03-case-studies.md`, `04-defense-framework.md`, `05-conclusion-recommendations.md`) :**
  - Classification des systèmes industriels selon leur criticité pour proportionner les exigences de sécurité.
  - Distinction entre la supervision opérationnelle de production/sûreté et la détection de compromission informatique sans perturber le procédé physique.
  - Surveillance prioritaire aux points d'interconnexion entre SI de gestion (IT), réseaux distants et zones de télémaintenance.

### [SRC-12] Directive (UE) 2022/2555 (Directive NIS 2)
- **Éditeur / Publisher :** Parlement européen et Conseil de l'Union européenne (EUR-Lex)
- **Date de publication / Publication date :** Décembre 2022 / December 2022
- **URL vérifiée / Verified URL :** https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2555 (version française : https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022L2555 ; identifiant permanent ELI : http://data.europa.eu/eli/dir/2022/2555/oj)
- **Affirmations appuyées / Claims supported (FR `05-conclusion-recommandations.md` ; EN `05-conclusion-recommendations.md`) :**
  - Extension des obligations européennes de gestion des risques et de notification d'incidents aux opérateurs de services essentiels et importants (énergie, eau, transports, administration publique).
  - Responsabilisation directe des organes de direction dans l'approbation et le suivi des mesures de cybersécurité.

### [SRC-13] ENISA Threat Landscape (2023 & 2024)
- **Éditeur / Publisher :** Agence de l'Union européenne pour la cybersécurité (ENISA)
- **Dates de publication / Publication dates :** Octobre 2023 / Septembre 2024
- **URL vérifiées / Verified URLs :**
  - https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023
  - https://www.enisa.europa.eu/publications/enisa-threat-landscape-2024
- **Affirmations appuyées / Claims supported (FR `01-accueil.md`, `02-categories-vulnerabilites.md`, `04-cadre-de-defense.md` ; EN `01-home.md`, `02-vulnerability-categories.md`, `04-defense-framework.md`) :**
  - Exposition croissante des administrations publiques, des services municipaux et des infrastructures interconnectées aux perturbations opérationnelles, à l'ingénierie sociale et aux failles de la chaîne d'approvisionnement numérique.
