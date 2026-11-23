import type { Lang } from '../utils/format';
import type { SourceEntry } from './types';

export const SOURCES_BY_LANG: Record<Lang, SourceEntry[]> = {
  fr: [
    {
      id: 'SRC-01',
      anchor: 'src-01',
      group: 'stuxnet',
      citation:
        '**Falliere, N., O Murchu, L., & Chien, E. (Février 2011).** *W32.Stuxnet Dossier (Version 1.4).* Symantec Security Response.',
      links: [
        {
          label: 'Archive documentaire vérifiée',
          url: 'https://archive.org/details/w32_stuxnet_dossier',
        },
      ],
    },
    {
      id: 'SRC-02',
      anchor: 'src-02',
      group: 'stuxnet',
      citation:
        "**Langner, R. (Novembre 2013).** *To Kill a Centrifuge: A Technical Analysis of What Stuxnet's Creators Tried to Achieve.* The Langner Group.",
      links: [
        {
          label: 'Document officiel (PDF)',
          url: 'https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf',
        },
      ],
    },
    {
      id: 'SRC-03',
      anchor: 'src-03',
      group: 'stuxnet',
      citation:
        '**Albright, D., Brannan, P., & Walrond, C. (22 décembre 2010).** *Did Stuxnet Take Out 1,000 Centrifuges at the Natanz Enrichment Plant?* Institute for Science and International Security (ISIS).',
      links: [
        {
          label: 'Publication',
          url: 'https://isis-online.org/isis-reports/detail/did-stuxnet-take-out-1000-centrifuges-at-the-natanz-enrichment-plant/',
        },
      ],
    },
    {
      id: 'SRC-04',
      anchor: 'src-04',
      group: 'stuxnet',
      citation:
        '**Albright, D., Brannan, P., & Walrond, C. (15 février 2011).** *Stuxnet Malware and Natanz: Update of ISIS December 22, 2010 Report.* Institute for Science and International Security (ISIS).',
      links: [
        {
          label: 'Publication',
          url: 'https://isis-online.org/isis-reports/detail/stuxnet-malware-and-natanz-update-of-isis-december-22-2010-report',
        },
      ],
    },
    {
      id: 'SRC-05',
      anchor: 'src-05',
      group: 'ukraine',
      citation:
        '**U.S. Department of Homeland Security / CISA (ICS-CERT) (25 février 2016 ; mise à jour juillet 2021).** *Cyber-Attack Against Ukrainian Critical Infrastructure (ICS Alert IR-ALERT-H-16-056-01).*',
      links: [
        {
          label: 'Alerte officielle',
          url: 'https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01',
        },
      ],
    },
    {
      id: 'SRC-06',
      anchor: 'src-06',
      group: 'ukraine',
      citation:
        '**Lee, R. M., Assante, M. J., & Conway, T. (18 mars 2016).** *Analysis of the Cyber Attack on the Ukrainian Power Grid (Defense Use Case).* Electricity Information Sharing and Analysis Center (E-ISAC) & SANS Institute.',
      links: [
        {
          label: 'Archive documentaire (National Security Archive, George Washington University)',
          url: 'https://nsarchive.gwu.edu/document/21570-sans-and-electricity-information-sharing-and',
        },
        {
          label: 'Catalogue SANS ICS',
          url: 'https://www.sans.org/ics-defense-use-cases/',
        },
      ],
    },
    {
      id: 'SRC-07',
      anchor: 'src-07',
      group: 'standards',
      citation:
        '**National Institute of Standards and Technology (NIST) (Septembre 2023).** *NIST Special Publication 800-82 Revision 3: Guide to Operational Technology (OT) Security.*',
      links: [
        {
          label: 'Publication officielle',
          url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final',
        },
      ],
    },
    {
      id: 'SRC-08',
      anchor: 'src-08',
      group: 'standards',
      citation:
        '**National Institute of Standards and Technology (NIST) (26 février 2024).** *The NIST Cybersecurity Framework (CSF) 2.0 (NIST CSWP 29).*',
      links: [
        {
          label: 'Publication officielle',
          url: 'https://csrc.nist.gov/pubs/cswp/29/final',
        },
        {
          label: 'Portail',
          url: 'https://www.nist.gov/cyberframework',
        },
      ],
    },
    {
      id: 'SRC-09',
      anchor: 'src-09',
      group: 'standards',
      citation:
        '**International Electrotechnical Commission (IEC) & International Society of Automation (ISA).** *ISA/IEC 62443 Series of Standards: Security for Industrial Automation and Control Systems.*',
      links: [
        {
          label: 'Présentation officielle ISA',
          url: 'https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards',
        },
        {
          label: 'Portail IEC',
          url: 'https://iec.ch/',
        },
      ],
    },
    {
      id: 'SRC-10',
      anchor: 'src-10',
      group: 'standards',
      citation:
        '**Cybersecurity and Infrastructure Security Agency (CISA) (Avril 2023).** *Zero Trust Maturity Model (Version 2.0).*',
      links: [
        {
          label: 'Page officielle',
          url: 'https://www.cisa.gov/zero-trust-maturity-model',
        },
        {
          label: 'Document PDF',
          url: 'https://www.cisa.gov/sites/default/files/2023-04/zero_trust_maturity_model_v2_508.pdf',
        },
      ],
    },
    {
      id: 'SRC-11',
      anchor: 'src-11',
      group: 'standards',
      citation:
        "**Agence nationale de la sécurité des systèmes d'information (ANSSI) (2014–2025).** Corpus industriel (v1.0 janvier 2014 ; actualisation majeure en 2025, dont v2.0 *Mesures détaillées* publiée en novembre 2025 sur *MesServicesCyber*) & *Doctrine de détection pour les systèmes industriels* (ANSSI-PA-084, 2 décembre 2020).",
      links: [
        {
          label: 'La cybersécurité des systèmes industriels — Méthode de classification',
          url: 'https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels-methode-de-classification',
        },
        {
          label: 'La cybersécurité des systèmes industriels — Mesures détaillées',
          url: 'https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels-mesures-detaillees',
        },
        {
          label: 'Doctrine de détection pour les systèmes industriels (ANSSI-PA-084, 2 décembre 2020) & catalogue complet',
          url: 'https://cyber.gouv.fr/publications',
        },
      ],
    },
    {
      id: 'SRC-12',
      anchor: 'src-12',
      group: 'standards',
      citation:
        "**Parlement européen et Conseil de l'Union européenne (Décembre 2022).** *Directive (UE) 2022/2555 concernant des mesures destinées à assurer un niveau élevé commun de cybersécurité dans l'ensemble de l'Union (Directive NIS 2).*",
      links: [
        {
          label: 'Journal officiel EUR-Lex (FR)',
          url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022L2555',
        },
        {
          label: 'Journal officiel EUR-Lex (EN)',
          url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2555',
        },
        {
          label: 'Lien permanent ELI',
          url: 'http://data.europa.eu/eli/dir/2022/2555/oj',
        },
      ],
    },
    {
      id: 'SRC-13',
      anchor: 'src-13',
      group: 'standards',
      citation:
        "**Agence de l'Union européenne pour la cybersécurité (ENISA) (2023–2024).** *ENISA Threat Landscape 2023 & 2024.*",
      links: [
        {
          label: 'Édition 2023',
          url: 'https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023',
        },
        {
          label: 'Édition 2024',
          url: 'https://www.enisa.europa.eu/publications/enisa-threat-landscape-2024',
        },
      ],
    },
  ],
  en: [
    {
      id: 'SRC-01',
      anchor: 'src-01',
      group: 'stuxnet',
      citation:
        '**Falliere, N., O Murchu, L., & Chien, E. (February 2011).** *W32.Stuxnet Dossier (Version 1.4).* Symantec Security Response.',
      links: [
        {
          label: 'Verified archive',
          url: 'https://archive.org/details/w32_stuxnet_dossier',
        },
      ],
    },
    {
      id: 'SRC-02',
      anchor: 'src-02',
      group: 'stuxnet',
      citation:
        "**Langner, R. (November 2013).** *To Kill a Centrifuge: A Technical Analysis of What Stuxnet's Creators Tried to Achieve.* The Langner Group.",
      links: [
        {
          label: 'Official document (PDF)',
          url: 'https://www.langner.com/wp-content/uploads/2017/03/to-kill-a-centrifuge.pdf',
        },
      ],
    },
    {
      id: 'SRC-03',
      anchor: 'src-03',
      group: 'stuxnet',
      citation:
        '**Albright, D., Brannan, P., & Walrond, C. (December 22, 2010).** *Did Stuxnet Take Out 1,000 Centrifuges at the Natanz Enrichment Plant?* Institute for Science and International Security (ISIS).',
      links: [
        {
          label: 'Publication',
          url: 'https://isis-online.org/isis-reports/detail/did-stuxnet-take-out-1000-centrifuges-at-the-natanz-enrichment-plant/',
        },
      ],
    },
    {
      id: 'SRC-04',
      anchor: 'src-04',
      group: 'stuxnet',
      citation:
        '**Albright, D., Brannan, P., & Walrond, C. (February 15, 2011).** *Stuxnet Malware and Natanz: Update of ISIS December 22, 2010 Report.* Institute for Science and International Security (ISIS).',
      links: [
        {
          label: 'Publication',
          url: 'https://isis-online.org/isis-reports/detail/stuxnet-malware-and-natanz-update-of-isis-december-22-2010-report',
        },
      ],
    },
    {
      id: 'SRC-05',
      anchor: 'src-05',
      group: 'ukraine',
      citation:
        '**U.S. Department of Homeland Security / CISA (ICS-CERT) (February 25, 2016; updated July 2021).** *Cyber-Attack Against Ukrainian Critical Infrastructure (ICS Alert IR-ALERT-H-16-056-01).*',
      links: [
        {
          label: 'Official advisory',
          url: 'https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01',
        },
      ],
    },
    {
      id: 'SRC-06',
      anchor: 'src-06',
      group: 'ukraine',
      citation:
        '**Lee, R. M., Assante, M. J., & Conway, T. (March 18, 2016).** *Analysis of the Cyber Attack on the Ukrainian Power Grid (Defense Use Case).* Electricity Information Sharing and Analysis Center (E-ISAC) & SANS Institute.',
      links: [
        {
          label: 'Documentary archive (National Security Archive, George Washington University)',
          url: 'https://nsarchive.gwu.edu/document/21570-sans-and-electricity-information-sharing-and',
        },
        {
          label: 'SANS ICS catalog',
          url: 'https://www.sans.org/ics-defense-use-cases/',
        },
      ],
    },
    {
      id: 'SRC-07',
      anchor: 'src-07',
      group: 'standards',
      citation:
        '**National Institute of Standards and Technology (NIST) (September 2023).** *NIST Special Publication 800-82 Revision 3: Guide to Operational Technology (OT) Security.*',
      links: [
        {
          label: 'Official publication',
          url: 'https://csrc.nist.gov/pubs/sp/800/82/r3/final',
        },
      ],
    },
    {
      id: 'SRC-08',
      anchor: 'src-08',
      group: 'standards',
      citation:
        '**National Institute of Standards and Technology (NIST) (February 26, 2024).** *The NIST Cybersecurity Framework (CSF) 2.0 (NIST CSWP 29).*',
      links: [
        {
          label: 'Official publication',
          url: 'https://csrc.nist.gov/pubs/cswp/29/final',
        },
        {
          label: 'Portal',
          url: 'https://www.nist.gov/cyberframework',
        },
      ],
    },
    {
      id: 'SRC-09',
      anchor: 'src-09',
      group: 'standards',
      citation:
        '**International Electrotechnical Commission (IEC) & International Society of Automation (ISA).** *ISA/IEC 62443 Series of Standards: Security for Industrial Automation and Control Systems.*',
      links: [
        {
          label: 'Official ISA overview',
          url: 'https://www.isa.org/standards-and-publications/isa-standards/isa-iec-62443-series-of-standards',
        },
        {
          label: 'IEC portal',
          url: 'https://iec.ch/',
        },
      ],
    },
    {
      id: 'SRC-10',
      anchor: 'src-10',
      group: 'standards',
      citation:
        '**Cybersecurity and Infrastructure Security Agency (CISA) (April 2023).** *Zero Trust Maturity Model (Version 2.0).*',
      links: [
        {
          label: 'Official page',
          url: 'https://www.cisa.gov/zero-trust-maturity-model',
        },
        {
          label: 'PDF document',
          url: 'https://www.cisa.gov/sites/default/files/2023-04/zero_trust_maturity_model_v2_508.pdf',
        },
      ],
    },
    {
      id: 'SRC-11',
      anchor: 'src-11',
      group: 'standards',
      citation:
        "**Agence nationale de la sécurité des systèmes d'information (ANSSI) (2014–2025).** Industrial security guides (v1.0 January 2014; major 2025 update including v2.0 *Mesures détaillées* published November 2025 on *MesServicesCyber*) & *Doctrine de détection pour les systèmes industriels* (ANSSI-PA-084, December 2, 2020).",
      links: [
        {
          label: 'La cybersécurité des systèmes industriels — Méthode de classification',
          url: 'https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels-methode-de-classification',
        },
        {
          label: 'La cybersécurité des systèmes industriels — Mesures détaillées',
          url: 'https://messervices.cyber.gouv.fr/guides/la-cybersecurite-des-systemes-industriels-mesures-detaillees',
        },
        {
          label: 'Doctrine de détection pour les systèmes industriels (ANSSI-PA-084, December 2, 2020) & full catalog',
          url: 'https://cyber.gouv.fr/publications',
        },
      ],
    },
    {
      id: 'SRC-12',
      anchor: 'src-12',
      group: 'standards',
      citation:
        '**European Parliament and Council of the European Union (December 2022).** *Directive (EU) 2022/2555 on measures for a high common level of cybersecurity across the Union (NIS 2 Directive).*',
      links: [
        {
          label: 'EUR-Lex Official Journal (EN)',
          url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2555',
        },
        {
          label: 'EUR-Lex Official Journal (FR)',
          url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022L2555',
        },
        {
          label: 'ELI permanent link',
          url: 'http://data.europa.eu/eli/dir/2022/2555/oj',
        },
      ],
    },
    {
      id: 'SRC-13',
      anchor: 'src-13',
      group: 'standards',
      citation:
        '**European Union Agency for Cybersecurity (ENISA) (2023–2024).** *ENISA Threat Landscape 2023 & 2024.*',
      links: [
        {
          label: '2023 edition',
          url: 'https://www.enisa.europa.eu/publications/enisa-threat-landscape-2023',
        },
        {
          label: '2024 edition',
          url: 'https://www.enisa.europa.eu/publications/enisa-threat-landscape-2024',
        },
      ],
    },
  ],
};
