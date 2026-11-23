# Page 5 : Conclusion & Recommandations aux décideurs municipaux

**Route :** `/fr/recommandations`
**Titre de navigation :** Recommandations
**Temps de lecture :** 45 s (Essentiel) · 3 min (Approfondi)

---

## En-tête de page

- **Sur-titre :** Passage à l'action · Gouvernance locale
- **Titre principal (H1) :** Reprendre le contrôle de la ville connectée
- **Sous-titre :** Une feuille de route réaliste en trois horizons pour les maires, directions générales des services et directions techniques, alignée sur le NIST CSF 2.0 et la directive européenne NIS 2.
- **Repère visuel (Métaphore du réseau) :** Grille urbaine stabilisée sous gouvernance unifiée : chaque domaine dispose d'un répondant identifié, d'une barrière IT/OT active et d'un mode dégradé vérifié.

---

## L'essentiel (Lecture rapide — 45 s)

Pour un décideur municipal, la cybersécurité des infrastructures urbaines n'est ni un sujet purement technique, ni une dépense somptuaire : c'est une condition de **continuité des services publics** et une responsabilité directe de gouvernance désormais consacrée par le **NIST CSF 2.0** (fonction *Gouverner*, 2024) `[SRC-08]` et la **directive européenne NIS 2** `[SRC-12]`.

Trois décisions immédiates suffisent pour enclencher le changement :
1. **Connaître ce que l'on opère (0–3 mois) :** Dresser l'inventaire complet des équipements OT connectés (eau, énergie, mobilité, bâtiments) et des accès distants accordés aux prestataires `[SRC-07, SRC-11]`.
2. **Fermer les chemins les plus exposés (3–9 mois) :** Imposer la segmentation IT/OT, l'authentification multifacteur (MFA) sur toute télémaintenance et des sauvegardes hors ligne vérifiées `[SRC-05, SRC-10]`.
3. **Préparer la continuité sous contrainte (9–18 mois) :** Former élus, agents et mainteneurs, intégrer la cybersécurité dans chaque marché public et exercer annuellement le **mode dégradé manuel** `[SRC-06, SRC-09, SRC-12]`.

---

## Analyse approfondie (3 min)

### 1. Pourquoi les décideurs municipaux sont directement concernés

Dans le **NIST Cybersecurity Framework (CSF) 2.0** publié en février 2024, l'ajout de la fonction **Gouverner (*Govern*)** comme socle préalable aux cinq fonctions historiques (*Identifier, Protéger, Détecter, Répondre, Rétablir*) marque un tournant clair : la gestion du risque cyber relève de la décision stratégique, de l'allocation budgétaire et de l'arbitrage de l'exécutif, et non de la seule équipe informatique `[SRC-08]`.

En Europe, la **directive (UE) 2022/2555 (NIS 2)** élargit le périmètre des entités soumises à des exigences strictes de gestion des risques et de notification d'incidents — incluant les secteurs de l'énergie, de l'eau potable et usée, des transports et de l'administration publique — tout en engageant la responsabilité des organes de direction dans l'approbation et le suivi des mesures `[SRC-12]`.

### 2. Feuille de route actionnable en trois horizons

#### Horizon 1 (0 à 3 mois) — Visibilité et gouvernance immédiate
- **Unifier le pilotage IT et OT :** Réunir autour de la même table la Direction Générale des Services (DGS), la direction des systèmes d'information (DSI), la direction des services techniques et les délégataires de service public. Désigner un référent identifié pour chaque infrastructure critique `[SRC-08, SRC-11]`.
- **Établir l'inventaire réel des systèmes connectés et des tiers :** Recenser les automates, systèmes de gestion technique du bâtiment (GTB), bornes de recharge pour véhicules électriques ou d'information voyageurs, feux tricolores, stations de pompage et surtout la liste exhaustive des prestataires disposant d'un accès distant `[SRC-07, SRC-11]`.
- **Classer les systèmes par criticité :** S'appuyer sur la méthode de classification de l'ANSSI afin de concentrer les efforts sur les équipements dont l'arrêt ou le dysfonctionnement aurait un impact direct sur la population ou la sécurité physique `[SRC-11]`.

#### Horizon 2 (3 à 9 mois) — Réduction rapide des vulnérabilités structurelles
- **Cloisonner les réseaux IT et OT :** Isoler les réseaux bureautiques des réseaux de supervision et d'automates au moyen de pare-feux industriels et de zones démilitarisées dédiées `[SRC-05, SRC-07, SRC-09]`.
- **Sécuriser et journaliser toute télémaintenance :** Supprimer les connexions directes permanentes des prestataires ; exiger des comptes nominatifs, l'authentification multifacteur (MFA) et la validation horodatée des sessions d'intervention `[SRC-05, SRC-10, SRC-11]`.
- **Sécuriser les sauvegardes et les supports amovibles :** Constituer des sauvegardes hors ligne des configurations d'automates et encadrer strictement l'usage des clés USB et ordinateurs de maintenance `[SRC-01, SRC-05]`.

#### Horizon 3 (9 à 18 mois) — Détection, marchés publics et résilience durable
- **Déployer une détection passive aux interconnexions :** Mettre en place une surveillance non intrusive aux points d'échange entre IT, OT et prestataires externes, en lien avec les équipes de sécurité informatique ou un centre territorial de réponse aux incidents informatiques (*Computer Security Incident Response Team*, CSIRT) `[SRC-11]`.
- **Inscrire la sécurité dans la commande publique :** Intégrer dès la rédaction des cahiers des charges techniques des marchés publics des exigences inspirées de la norme **ISA/IEC 62443** et du **NIST SP 800-82 Rev. 3** : livraison sans mots de passe par défaut, documentation d'architecture réseau, capacité de mise à jour maîtrisée et clause d'assistance en cas d'incident `[SRC-07, SRC-09]`.
- **Exercer le mode dégradé chaque année :** Simuler une indisponibilité de la supervision numérique (à l'image de la bascule manuelle qui a permis de rétablir le courant en quelques heures en Ukraine en 2015) afin de vérifier que les équipes savent exploiter les services essentiels en mode local `[SRC-06]`.

### 3. Matrice décisionnelle synthétique pour l'exécutif

| Question clé du décideur | Action concrète | Référentiel d'appui |
| :--- | :--- | :--- |
| *Savons-nous quels systèmes urbains sont connectés ?* | Inventaire unifié IT/OT + registre des accès prestataires | NIST SP 800-82 Rev. 3 `[SRC-07]` · ANSSI `[SRC-11]` |
| *Une panne informatique au bureau peut-elle bloquer un service technique ?* | Segmentation stricte en zones et conduits + MFA sur accès distants | ISA/IEC 62443 `[SRC-09]` · CISA Zero Trust `[SRC-10]` |
| *Saurions-nous détecter un comportement anormal sans stopper la production ?* | Sonde passive aux interconnexions IT/OT | Doctrine de détection ANSSI `[SRC-11]` |
| *Saurions-nous assurer le service vital si l'écran de supervision s'éteint ?* | Sauvegardes hors ligne + procédures de bascule manuelle exercées annuellement | E-ISAC/SANS 2016 `[SRC-06]` · NIST CSF 2.0 `[SRC-08]` |

### Conclusion

Les failles les plus graves des infrastructures urbaines ne naissent ni d'une fatalité technologique ni d'adversaires invincibles : elles prospèrent dans l'angle mort entre les services, dans l'oubli des règles d'accès et dans l'illusion que « cela fonctionne très bien comme ça ». En traitant la cybersécurité opérationnelle comme une discipline de gouvernance, d'architecture sobre et de continuité de service public, une municipalité protège concrètement la vie quotidienne de ses habitants.

- **Dernière étape :** [Sources vérifiées & Méthodologie](/fr/sources) — *Consulter l'ensemble des références documentaires et notre charte de sûreté.*
