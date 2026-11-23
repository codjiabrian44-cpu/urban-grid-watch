import type {
  HomePageData,
  VulnerabilitiesPageData,
  CaseStudiesPageData,
  DefenseFrameworkPageData,
  RecommendationsPageData,
  SourcesPageData,
} from './types';

export const EN_HOME: HomePageData = {
  metaTitle: 'Invisible Faults — Cybersecurity of Urban Infrastructure',
  metaDescription:
    'Why a connected city rarely yields to an isolated technical feat, yet almost always falters under the combined effect of an organizational gap, human error, and an inadequately segmented network.',
  header: {
    rubricPrefix: 'Documentary Brief',
    rubricScope: 'Connected Urban Infrastructure',
    h1: 'Invisible Faults',
    subtitle:
      'Why a connected city rarely yields to an isolated technical feat, yet almost always falters under the combined effect of an organizational gap, human error, and an inadequately segmented network.',
    visualStateNominal:
      'Nominal state: Interconnected urban grid — Integrity monitoring active.',
    visualStateScroll:
      'Anomaly detected on a remote-maintenance node — Preventive isolation engaged.',
    visualCaption:
      'Each node represents an essential service (water, power, transit, public buildings). A lit signal indicates an anomaly detected by defense monitoring—never an intrusion pathway.',
    readingTimeSummary: '45 sec (Quick Read) / 2 min 30 sec (Deep Dive)',
    ctaQuickLabel: 'Quick Read (5 min)',
    ctaQuickHint: 'Core thesis, verified facts, and municipal priorities.',
    ctaDeepLabel: 'Deep Dive (20 min)',
    ctaDeepHint: 'Full taxonomy, documented case studies, and normative framework.',
  },
  quickRead: {
    heading: 'In Brief (Quick Read — 45 sec)',
    intro:
      'A modern municipality relies on two historically separate digital worlds: enterprise information technology (**IT**: email, civil records, accounting) and the industrial systems that operate physical services (**OT**, *Operational Technology*: water treatment plants, traffic signals, district heating, electrical distribution).',
    bridge:
      'As cities connect these assets to optimize energy consumption and enable remote maintenance, those two spheres converge. As highlighted in European Union Agency for Cybersecurity (**ENISA**) assessments of public administrations and critical services `[SRC-13]`, critical exposure rarely stems from an isolated technological flaw. It almost always emerges at the intersection of three ordinary factors:',
    factors: [
      {
        num: '01',
        title: 'A governance gap',
        detail:
          'unclear accountability among contractors, technical departments, and IT leadership',
      },
      {
        num: '02',
        title: 'A human vulnerability',
        detail:
          'operational fatigue, social engineering, or workarounds around cumbersome procedures',
      },
      {
        num: '03',
        title: 'Insufficient network segmentation',
        detail: 'between administrative offices and field control equipment `[SRC-05, SRC-07]`',
      },
    ],
    outro:
      'This brief examines those mechanisms soberly, grounded in documented historical post-mortems and international public standards.',
  },
  deepDive: {
    heading: 'Deep Dive (2 min 30 sec)',
    sections: [
      {
        id: 'cyber-physical',
        shortTitle: '1. Cyber-physical system',
        heading: '1. Urban Infrastructure as a Discreet Cyber-Physical System',
        paragraphs: [
          'Residents experience urban infrastructure as a physical given: clean water flows from the tap, light rail runs on schedule, streetlights turn on at dusk, and hospitals maintain uninterrupted power. Behind this continuity operates a hidden layer of sensors, programmable logic controllers (PLCs), and supervisory control and data acquisition (SCADA) platforms—collectively known as **Operational Technology (OT)** `[SRC-07]`.',
          'For decades, this equipment operated in isolation on proprietary protocols and physically separated networks. Its primary mandate was never data confidentiality, but **continuous availability** and **physical safety**, across hardware lifecycles often spanning fifteen to twenty years `[SRC-07, SRC-11]`.',
        ],
      },
      {
        id: 'it-ot-convergence',
        shortTitle: '2. IT/OT Convergence',
        heading: '2. The Paradox of IT/OT Convergence',
        paragraphs: [
          'To lower operating costs, manage energy transitions, and allow remote diagnostics by specialized contractors, municipalities and utility operators progressively connected industrial control environments to corporate networks and the internet `[SRC-07, SRC-11]`. While convergence delivers genuine operational benefits, it fundamentally reshapes risk exposure:',
        ],
        bullets: [
          '**Enterprise IT** is exposed daily to external communications (email, laptops, web browsers).',
          '**Operational Technology (OT)** was often never engineered to withstand unexpected network traffic, and rebooting or patching equipment may be impossible without interrupting an essential public service `[SRC-07, SRC-11]`.',
        ],
        closingParagraph:
          'When the boundary between these two environments becomes porous—through shared remote access or uncontrolled removable media—a disruption originating in administrative IT can reach physical field equipment `[SRC-01, SRC-05]`.',
      },
      {
        id: 'scope-charter',
        shortTitle: '3. Scope & exclusions',
        heading: '3. What This Site Demonstrates—and What It Refuses to Show',
        paragraphs: [
          'This site is built for decision-makers, elected officials, international jury members, and citizens seeking an accurate, sober understanding of urban resilience.',
        ],
        bullets: [
          '**What we analyze:** The structural categories of vulnerability (technical, human, physical, organizational), verified lessons from two landmark historical incidents (*Stuxnet* and the *2015 Ukrainian power grid outage*), and a realistic defense framework grounded in public standards (NIST SP 800-82 Rev. 3, NIST CSF 2.0, ISA/IEC 62443, CISA Zero Trust, ANSSI guidelines, and EU Directive NIS 2).',
          '**What we exclude on principle:** No unsourced dramatic scenarios, no fear-mongering jargon, and no depiction of intrusion or malicious manipulation techniques. Municipal cybersecurity is fundamentally a discipline of architecture, organization, and public-service continuity.',
        ],
      },
    ],
    signpostsHeading: 'Navigation Signposts',
    nextStep: {
      label: 'Vulnerability Categories',
      href: '/en/vulnerabilities/',
      description: 'Understand the four fault families that weaken urban networks.',
    },
    directAccessLabel: 'Direct access',
    directAccessLinks: [
      { label: 'Verified Case Studies', href: '/en/case-studies/' },
      { label: 'Defense Framework', href: '/en/defense-framework/' },
      { label: 'Municipal Roadmap', href: '/en/recommendations/' },
    ],
  },
};

export const EN_VULNERABILITIES: VulnerabilitiesPageData = {
  metaTitle: 'Vulnerability Categories — Invisible Faults',
  metaDescription:
    'Conceptual taxonomy of urban infrastructure vulnerabilities: technical, human, physical, and organizational.',
  header: {
    rubricPrefix: 'Conceptual Taxonomy',
    rubricScope: 'Strategic Level',
    h1: 'Four Vulnerability Families, One Systemic Fragility',
    subtitle:
      'Understanding where urban infrastructure breakpoints lie—without ever confusing risk analysis with an offensive manual.',
    visualCaption:
      'Four distinct geometric clusters (Technical, Human, Physical, Organizational). When a signal lights up in one cluster, monitoring highlights its cross-dependencies with the other three domains.',
    readingTimeSummary: '50 sec (Quick Read) / 3 min 30 sec (Deep Dive)',
  },
  quickRead: {
    heading: 'In Brief (Quick Read — 50 sec)',
    intro:
      'Incidents affecting critical infrastructure almost never rely on a single dramatic flaw. Instead, they leverage the alignment of weaknesses across **four complementary categories**, as documented in reference frameworks such as **NIST SP 800-82 Rev. 3** `[SRC-07]` and **ANSSI** industrial guidelines `[SRC-11]`:',
    columns: ['Category', 'Nature of Risk', 'Generic Example (Conceptual Level)'],
    rows: [
      {
        category: '**1. Technical**',
        nature: 'Network architecture & hardware lifecycle',
        example:
          'IT/OT network segmentation gaps; legacy field controllers no longer receiving security updates.',
      },
      {
        category: '**2. Human**',
        nature: 'Daily operations & workload pressure',
        example:
          'Social engineering targeting operations or administrative staff; credential reuse or shared accounts for convenience.',
      },
      {
        category: '**3. Physical**',
        nature: 'Field facilities, equipment & portable media',
        example:
          'Unmonitored physical access to street-level cabinets; unverified removable media connected to supervisory workstations.',
      },
      {
        category: '**4. Organizational**',
        nature: 'Governance, contractors & procedures',
        example:
          'Incomplete OT asset inventory; third-party remote maintenance operating without oversight or verified security clauses.',
      },
    ],
    takeaway:
      'The core takeaway is clear: **patching only the technical layer leaves the other three open**.',
  },
  deepDive: {
    heading: 'Deep Dive (3 min 30 sec)',
    categories: [
      {
        id: 'technical',
        code: 'AXIS 01',
        heading: '1. Technical and Architectural Vulnerabilities',
        intro:
          'Technical vulnerabilities in urban environments stem largely from the industrial history of equipment deployed across municipal territory `[SRC-07]`.',
        items: [
          '**IT/OT network segmentation gaps:** When corporate office networks and operational control networks share common infrastructure without dedicated firewalls or demilitarized zones, a routine incident on a desktop workstation can reach supervisory control systems `[SRC-05, SRC-07]`.',
          '**Hardware and software obsolescence (*legacy* systems):** Many traffic signal controllers, pumping station PLCs, and building management systems (BMS) remain in service for 15 years or longer on operating systems that no longer receive security patches `[SRC-07, SRC-11]`.',
          '**Weak authentication or default credentials:** Across equipment deployed in large numbers throughout a city, retaining factory-default credentials or lacking multi-factor authentication on remote access gateways remains a primary risk factor documented in official post-mortems `[SRC-05]`.',
          '**Unencrypted legacy industrial protocols:** Historical fieldbus and telecontrol protocols prioritize real-time responsiveness over cryptographic verification of incoming commands `[SRC-07]`.',
        ],
      },
      {
        id: 'human',
        code: 'AXIS 02',
        heading: '2. Human and Cognitive Vulnerabilities',
        intro:
          'Municipal operators and maintenance technicians keep essential services running under constant time and budget constraints. Human vulnerabilities do not reflect individual carelessness; they reflect a mismatch between security rules and operational reality `[SRC-11, SRC-13]`.',
        items: [
          '**Social engineering and targeted phishing:** Administrative staff and technical supervisors face deceptive messages tailored to routine business workflows (invoices, urgent maintenance notices, internal documents) `[SRC-05, SRC-13]`.',
          '**Procedural workarounds under operational pressure:** During a winter district-heating outage or a rush-hour traffic control failure, authentication procedures perceived as overly slow incentivize teams to keep simplified logins or shared technician accounts.',
          '**Blurring between operational safety and cybersecurity:** Engineers trained to diagnose mechanical or electrical faults naturally interpret abnormal equipment behavior as hardware wear rather than a digital integrity anomaly `[SRC-02, SRC-11]`.',
        ],
      },
      {
        id: 'physical',
        code: 'AXIS 03',
        heading: '3. Physical and Proximity Vulnerabilities',
        intro:
          'Unlike centralized data centers, urban infrastructure is **geographically dispersed** across public space: electrical substations, telecommunications vaults, roadside traffic cabinets, and technical rooms inside schools or sports complexes `[SRC-07]`.',
        items: [
          '**Physical exposure of remote field assets:** Enclosures with weak locking mechanisms or no tamper detection can expose network ports or maintenance interfaces.',
          '**Uncontrolled use of removable media:** Diagnostic USB drives or service laptops moved between corporate networks and isolated control equipment effectively bridge any theoretical physical isolation (*air-gap*) `[SRC-01]`.',
          '**Dependence on power and telecommunications links:** Remote sites rely on uninterruptible power supplies (UPS) and carrier links whose simultaneous disruption can blind remote operators `[SRC-05, SRC-06]`.',
        ],
      },
      {
        id: 'organizational',
        code: 'AXIS 04',
        heading: '4. Organizational and Supply-Chain Vulnerabilities',
        intro:
          'This is often the most decisive dimension—and the least visible in purely technical audits `[SRC-08, SRC-13]`.',
        items: [
          '**Asset inventory blind spots:** In many municipalities, neither the IT department nor technical services maintain a complete, current registry of all connected equipment deployed across successive public procurement contracts `[SRC-07, SRC-08]`.',
          '**Subcontracting and remote maintenance chains:** Heating, ventilation, and air conditioning (HVAC), street lighting, elevators, and water treatment units are frequently administered remotely by vendors or maintenance contractors holding broad privileges, sometimes without session logging or prompt revocation when contracts end `[SRC-11, SRC-13]`.',
          '**Internal silos and lack of joint exercises:** IT teams often lack familiarity with industrial physical-safety constraints, while OT field teams rarely practice cyber incident alert workflows. Without joint exercises, crisis response stalls under pressure `[SRC-06, SRC-08]`.',
        ],
      },
    ],
    transitionHeading: 'Transition',
    transitionText:
      'These four categories are not merely theoretical. The next two historical case studies show how their convergence has already produced tangible physical impacts on real critical infrastructure.',
    nextStep: {
      label: 'Documented Case Studies',
      href: '/en/case-studies/',
      description: 'Stuxnet (2009–2010) and the Ukrainian power grid (2015).',
    },
  },
};

export const EN_CASE_STUDIES: CaseStudiesPageData = {
  metaTitle: 'Documented Case Studies — Invisible Faults',
  metaDescription:
    'Verified public post-mortems: Stuxnet (Natanz, 2009–2010) and the Ukrainian power grid outage (December 23, 2015).',
  header: {
    rubricPrefix: 'Verified Lessons Learned',
    rubricScope: 'Public Post-Mortems',
    h1: 'Two Historical Precedents That Redefined Infrastructure Security',
    subtitle:
      'Established facts, verified timelines, and architectural lessons from Stuxnet (2009–2010) and the Ukrainian power grid outage (2015).',
    visualCaption:
      'Verified timeline and architectural breakpoints (broken air-gap isolation, unsegmented remote maintenance).',
    readingTimeSummary: '1 min (Quick Read) / 4 min (Deep Dive)',
    safetyNoticeLabel: 'Editorial Notice',
    safetyNoticeText:
      'In accordance with our rigor and safety charter, this page reports exclusively on public facts documented by analytical bodies and official agencies, without detailing any offensive or reproducible method.',
  },
  quickRead: {
    heading: 'In Brief (Quick Read — 1 min)',
    intro:
      'Two documented events serve as global benchmarks for understanding how digital risk translates into physical impact:',
    items: [
      {
        title: '1. Stuxnet (Natanz, 2009–2010)',
        period: '2009–2010',
        metric: '~1,000 centrifuges',
        summary:
          'Publicly discovered in June 2010 `[SRC-01]`, this malicious software targeted industrial controllers operating IR-1 centrifuges at the Natanz nuclear facility in Iran. According to the Institute for Science and International Security (ISIS), approximately **1,000 centrifuges** (out of roughly 9,000 deployed) were taken out of service or replaced between late 2009 and early 2010 `[SRC-04]`. **Key lesson:** physical network isolation (*air-gap*) is insufficient when removable media and maintenance interfaces remain unmanaged `[SRC-01, SRC-02]`.',
      },
      {
        title: '2. Ukrainian Power Grid (December 23, 2015)',
        period: 'Dec 23, 2015',
        metric: '~225,000 customers (1–6 h)',
        summary:
          'The first publicly confirmed cyber incident to cause a power outage `[SRC-06]`. Three regional distribution utilities (*oblenergos*) experienced coordinated outages leaving approximately **225,000 customers without power for 1 to 6 hours** `[SRC-05, SRC-06]`. **Key lesson:** IT/OT segmentation gaps, the absence of multi-factor authentication on remote access, and the decisive role of **manual fallback operations** determined both initial exposure and speed of recovery `[SRC-05, SRC-06]`.',
      },
    ],
  },
  deepDive: {
    heading: 'Deep Dive (4 min)',
    cases: [
      {
        id: 'stuxnet',
        heading: 'Case Study 1 — Stuxnet and the Natanz Facility (2009–2010)',
        period: 'Natanz, 2009–2010',
        metricValue: '~1,000',
        metricUnit: 'IR-1 centrifuges decommissioned / replaced (of ~9,000)',
        contextHeading: 'Context and Established Facts',
        contextParagraphs: [
          'On June 17, 2010, cybersecurity firm VirusBlokAda identified an unusually complex piece of malicious software later named **Stuxnet** `[SRC-01]`. Analyses published by **Symantec Security Response** (*W32.Stuxnet Dossier*, February 2011) `[SRC-01]` and **Ralph Langner** (*To Kill a Centrifuge*, November 2013) `[SRC-02]` established that the software specifically targeted industrial control systems (ICS) equipped with Siemens S7 programmable logic controllers (PLCs) `[SRC-01, SRC-02]`.',
          'By cross-referencing those findings with International Atomic Energy Agency (IAEA) inspection data, the **Institute for Science and International Security (ISIS)** published assessments in December 2010 and February 2011 evaluating the physical impact at the Natanz Fuel Enrichment Plant in Iran `[SRC-03, SRC-04]`.',
        ],
        timelineHeading: 'Documented Timeline',
        timeline: [
          {
            date: 'Late 2009 – early 2010',
            event:
              'Records associated with IAEA inspections reflected an unusually high rate of decommissioning and replacement of IR-1 centrifuges at Natanz; ISIS estimated that approximately **1,000 IR-1 centrifuges** (out of roughly 9,000 installed during that period) had to be removed or replaced `[SRC-03, SRC-04]`.',
          },
          {
            date: 'June 17, 2010',
            event: 'Public discovery of Stuxnet `[SRC-01]`.',
          },
          {
            date: 'December 2010 – February 2011',
            event:
              "Publication of technical and nuclear non-proliferation analyses linking Stuxnet's specific industrial targeting to the operating parameters of IR-1 centrifuges `[SRC-01, SRC-03, SRC-04]`.",
          },
        ],
        impactHeading: 'Observed Impact and Factual Nuances',
        impactItems: [
          '**Documented physical effect:** Stuxnet represents the first publicly confirmed instance of software engineered to cause real-world mechanical degradation of industrial equipment `[SRC-02]`.',
          "**Measured strategic effect:** According to ISIS's updated February 2011 assessment, while the expected expansion of operational centrifuge cascades was disrupted and slowed, overall low-enriched uranium output remained relatively steady during that timeframe due to machine replacements and operational adjustments `[SRC-04]`.",
        ],
        lessonsHeading: 'Structural Gaps Highlighted and Lessons Learned',
        lessons: [
          '**The myth of absolute isolation (*air-gap*):** Even without a permanent internet connection, a critical facility exchanges diagnostic files, software updates, and portable maintenance equipment. Without strict controls over removable media and contractor workflows, the boundary remains permeable `[SRC-01]`.',
          '**The blind spot between safety and security:** Traditional industrial alarms monitor physical process conformity (temperature, pressure, rotational speed). Without dedicated monitoring of controller integrity, a software-induced anomaly can be misdiagnosed as routine mechanical wear `[SRC-02, SRC-11]`.',
        ],
      },
      {
        id: 'ukraine-2015',
        heading: 'Case Study 2 — The Ukrainian Power Grid (December 23, 2015)',
        period: 'Ukraine, Dec 23, 2015',
        metricValue: '~225,000',
        metricUnit: 'customers without electricity for 1 to 6 hours',
        contextHeading: 'Context and Established Facts',
        contextParagraphs: [
          'On **December 23, 2015**, three regional electricity distribution utilities in Ukraine (*oblenergos*)—**Prykarpattyaoblenergo** (Ivano-Frankivsk region), **Kyivoblenergo**, and **Chernivtsioblenergo**—suffered coordinated, unscheduled power outages `[SRC-05, SRC-06]`.',
          'Documented in U.S. official advisory **CISA / ICS-CERT IR-ALERT-H-16-056-01** (published February 25, 2016; updated July 2021) `[SRC-05]` and the joint **E-ISAC and SANS Institute** report (*Analysis of the Cyber Attack on the Ukrainian Power Grid*, March 18, 2016) `[SRC-06]`, this event stands as the first publicly confirmed blackout caused by a cyber intrusion `[SRC-06]`. The U.S. government subsequently attributed the campaign to Russian state-sponsored cyber actors `[SRC-05]`.',
        ],
        timelineHeading: 'Documented Timeline and Material Impact',
        timeline: [
          {
            date: 'Prior to December 23, 2015',
            event:
              'Prior compromise of corporate enterprise networks involving social engineering and remote access credentials enabled actors to reach SCADA supervisory environments `[SRC-05, SRC-06]`.',
          },
          {
            date: 'December 23, 2015',
            event:
              'Coordinated outages left approximately **225,000 customers** without electricity for **1 to 6 hours** across the three utilities’ service areas; technical analyses document **30 substations** switched off at *Prykarpattyaoblenergo* (seven 110 kV and twenty-three 35 kV substations), while initial public summaries cited at least **27 substations** affected across the impacted utilities `[SRC-05, SRC-06]`.',
          },
          {
            date: 'During the outage',
            event:
              'Loss of availability across control computers, substation communications converters, backup power systems, and customer call centers complicated diagnosis and cut off public outage reporting `[SRC-05, SRC-06]`.',
          },
          {
            date: '1 to 6 hours after onset',
            event:
              'Field crews restored power by operating circuit breakers **manually on site** `[SRC-06]`.',
          },
        ],
        impactHeading: 'Verified Operational Findings',
        impactItems: [
          'Highlighted remote-site dependence on carrier telecommunications links and uninterruptible power supplies `[SRC-05, SRC-06]`.',
          'Demonstrated the decisive value of local manual switching to limit public service disruption duration `[SRC-06]`.',
        ],
        lessonsHeading: 'Structural Gaps Highlighted and Lessons Learned',
        lessonsIntro:
          'Joint analysis by CISA and E-ISAC/SANS points to three lessons directly applicable to urban infrastructure:',
        lessons: [
          '**The IT-to-OT chain:** The outage did not stem from an obscure flaw in high-voltage equipment, but from the convergence of corporate network compromise, inadequately protected remote access (lack of multi-factor authentication), and permissive segmentation between enterprise IT and SCADA networks `[SRC-05, SRC-06]`.',
          '**Paralysis of visibility and communications:** Depriving operators of supervisory consoles while saturating telephone lines extends crisis duration. Continuity plans must establish out-of-band communication channels `[SRC-05, SRC-06]`.',
          '**The decisive value of manual fallback operations:** The blackout lasted only hours despite severe digital disruption because Ukrainian utilities maintained trained personnel and practiced procedures to resume physical, local control of substations `[SRC-06]`.',
        ],
      },
    ],
    comparisonHeading: 'Comparative Summary',
    comparisonColumns: ['Criterion', 'Stuxnet (2009–2010)', 'Ukrainian Power Grid (2015)'],
    comparisonRows: [
      {
        criterion: '**Sector affected**',
        stuxnet: 'Nuclear enrichment (Natanz) `[SRC-03]`',
        ukraine: 'Regional power distribution (3 *oblenergos*) `[SRC-06]`',
      },
      {
        criterion: '**Verified impact**',
        stuxnet: '~1,000 IR-1 centrifuges replaced `[SRC-04]`',
        ukraine: '~225,000 customers without power for 1–6 h `[SRC-06]`',
      },
      {
        criterion: '**Key breakpoint**',
        stuxnet:
          'Broken *air-gap* via media/interfaces & lack of OT detection `[SRC-01, SRC-02]`',
        ukraine:
          'Corporate social engineering, remote access without MFA & weak IT/OT segmentation `[SRC-05, SRC-06]`',
      },
      {
        criterion: '**Resilience factor**',
        stuxnet: 'Physical equipment replacement `[SRC-04]`',
        ukraine: 'Local manual control recovery by field crews `[SRC-06]`',
      },
    ],
    nextStepLabel: 'Next step',
    nextStep: {
      label: 'Defense Framework',
      href: '/en/defense-framework/',
      description: 'Translating these lessons into durable municipal architecture.',
    },
  },
};

export const EN_DEFENSE_FRAMEWORK: DefenseFrameworkPageData = {
  metaTitle: 'Defense Framework — Invisible Faults',
  metaDescription:
    'Five-pillar urban defense architecture: IT/OT segmentation, Zero Trust, passive anomaly detection, human readiness, and manual fallback.',
  header: {
    rubricPrefix: 'Resilience Architecture',
    rubricScope: 'Public Standards',
    h1: 'Five Pillars for Defending Urban Infrastructure',
    subtitle:
      'A pragmatic model combining network segmentation, Zero Trust principles, non-intrusive detection, human readiness, and manual fallback capability.',
    visualCaption:
      'Dynamic reorganization of the node grid into compartmentalized zones and conduits (IEC 62443 / Purdue Model). When an anomaly is detected on an interconnection conduit, it remains contained within its zone without reaching the operational core.',
    readingTimeSummary: '55 sec (Quick Read) / 4 min (Deep Dive)',
  },
  quickRead: {
    heading: 'In Brief (Quick Read — 55 sec)',
    intro:
      "Defending a connected city is not about stacking expensive tools onto a disorganized network. Grounded in **NIST SP 800-82 Rev. 3** `[SRC-07]`, the **ISA/IEC 62443** standards series `[SRC-09]`, **CISA's Zero Trust Maturity Model v2.0** `[SRC-10]`, and **ANSSI** guidelines `[SRC-11]`, urban defense rests on **five complementary measures**:",
    measures: [
      {
        num: '01',
        title: 'Strict IT/OT Segmentation',
        detail:
          'Physically and logically separate enterprise office networks (IT) from operational control networks (OT) through dedicated demilitarized zones `[SRC-07, SRC-09]`.',
      },
      {
        num: '02',
        title: 'Graduated Zero Trust Adoption',
        detail:
          'Eliminate implicit trust based solely on internal network location; systematically verify identity, device posture, and least-privilege access `[SRC-10]`.',
      },
      {
        num: '03',
        title: 'Passive Anomaly Detection',
        detail:
          'Observe industrial network traffic non-intrusively to spot abnormal behavior without disrupting physical processes `[SRC-11]`.',
      },
      {
        num: '04',
        title: 'Training and Operational Hygiene',
        detail:
          'Equip technical and administrative teams to recognize social engineering and follow access and removable-media controls `[SRC-01, SRC-05]`.',
      },
      {
        num: '05',
        title: 'Incident Response and Manual Fallback',
        detail:
          'Maintain tested offline backups, run joint IT/OT exercises, and preserve manual local service-continuity procedures `[SRC-05, SRC-06]`.',
      },
    ],
  },
  deepDive: {
    heading: 'Deep Dive (4 min)',
    diagramTitle: 'Zones and Conduits Architecture (ISA/IEC 62443 & Purdue Model)',
    diagramCaption:
      'Defensive compartmentalization schematic: corporate office networks (IT) are separated from SCADA supervision and field controllers (OT) via an industrial DMZ enforcing multi-factor authentication (MFA) and passive monitoring. Any anomaly detected at the interconnection conduit stays contained in the DMZ.',
    pillars: [
      {
        id: 'pillar-1',
        shortTitle: '1. IT/OT Segmentation',
        heading: 'Pillar 1 — IT/OT Segmentation via Zones and Conduits',
        intro:
          'The foundational principle set out in **ISA/IEC 62443** `[SRC-09]` and **NIST SP 800-82 Rev. 3** `[SRC-07]` is to reject flat networks where every device can communicate freely with every other device.',
        bullets: [
          '**Layered Compartmentalization (Purdue Model):** Corporate systems (email, administration) remain separated from SCADA supervisory servers—and further still from field controllers—by buffer zones (industrial DMZs) that strictly filter authorized traffic `[SRC-07]`.',
          '**Controlled Remote Maintenance Flows:** Contractor remote access must never terminate directly on a field controller. As recommended by ANSSI guidance `[SRC-11]` and the CISA advisory following the 2015 Ukrainian outage `[SRC-05]`, remote sessions must pass through dedicated, time-bound, logged gateways protected by multi-factor authentication (MFA).',
          '**Concrete Benefit:** If an administrative workstation is compromised, the incident stays contained within the office zone and never reaches valves, traffic controllers, or substations.',
        ],
      },
      {
        id: 'pillar-2',
        shortTitle: '2. Zero Trust Principles',
        heading: 'Pillar 2 — Zero Trust Principles Adapted to Urban Environments',
        intro:
          'Published in April 2023, CISA’s **Zero Trust Maturity Model (v2.0)** structures the shift away from the legacy "castle-and-moat" posture—where any actor inside the perimeter enjoys automatic trust `[SRC-10]`. It is organized around **five pillars** (*Identity, Devices, Networks, Applications & Workloads, Data*) and three cross-cutting capabilities (*Governance, Visibility & Analytics, Automation & Orchestration*) `[SRC-10]`.',
        subIntro:
          'For a municipality, adoption follows four progressive stages (*Traditional, Initial, Advanced, Optimal*) `[SRC-10]`:',
        bullets: [
          '**Strict Least Privilege:** A street-lighting maintenance account can access only lighting controllers in its designated sector, never potable water supervision.',
          '**Continuous Verification of Identities and Devices:** Portable diagnostic laptops are permitted to connect to the OT network only after posture verification and within an approved maintenance window `[SRC-10, SRC-11]`.',
          '**Adapting to OT Constraints:** Where a legacy controller cannot run a modern security agent, Zero Trust controls are enforced at access gateways, managed switches, and administrative accounts `[SRC-07, SRC-10]`.',
        ],
      },
      {
        id: 'pillar-3',
        shortTitle: '3. Passive Detection',
        heading: 'Pillar 3 — Anomaly Detection and Non-Intrusive Monitoring',
        intro:
          "A central lesson from *Stuxnet* `[SRC-02]` and **ANSSI**'s *Detection Doctrine for Industrial Systems* (2020) `[SRC-11]` lies in distinguishing **operational safety** from **security detection**.",
        bullets: [
          '**Never Disrupt the Physical Process:** Unlike office IT environments, detection tools deployed in OT must operate **passively** (via network traffic mirroring, without active scanning that could overload or stall a real-time controller) `[SRC-07, SRC-11]`.',
          '**Priority Monitoring at Interconnection Points:** ANSSI recommends placing detection sensors first at boundaries between enterprise IT, external networks, and remote-maintenance zones `[SRC-11]`.',
          '**Correlation Against Nominal Behavior:** A field controller runs a stable, predictable cycle. An unexpected connection, a configuration change outside a maintenance window, or an unusual file transfer triggers an alert intelligible to both cybersecurity staff and plant operators `[SRC-11]`.',
        ],
      },
      {
        id: 'pillar-4',
        shortTitle: '4. Human Readiness',
        heading: 'Pillar 4 — Human Readiness, Contractors, and Operational Hygiene',
        intro:
          'Because social engineering and operational workarounds sit at the heart of real-world incidents `[SRC-05, SRC-13]`, human defense must be designed as a **support system** for staff rather than a punitive barrier.',
        bullets: [
          '**Role-Specific Training:** Administrative personnel are trained to spot phishing attempts; OT technicians receive practical guidance on removable-media risks and diagnostic interfaces `[SRC-01, SRC-05]`.',
          '**Usable Security Workflows:** Streamlined, reliable secure-access tools reduce the incentive to bypass controls during urgent field repairs.',
          '**Third-Party and Contractor Governance:** Every public procurement contract for connected urban equipment should embed **ISA/IEC 62443**-aligned requirements: named individual accounts, removal of default passwords, logging of remote maintenance, and immediate credential revocation upon contract end `[SRC-09, SRC-11]`.',
        ],
      },
      {
        id: 'pillar-5',
        shortTitle: '5. Recovery & Fallback',
        heading: 'Pillar 5 — Incident Response, Backups, and Manual Fallback',
        intro:
          'The 2015 Ukrainian power grid incident shows that ultimate resilience depends as much on recovery readiness as on prevention `[SRC-06]`. Aligned with the *Respond* and *Recover* functions of **NIST CSF 2.0** `[SRC-08]`:',
        bullets: [
          '**Verified Offline Backups:** Maintain offline (immutable or physically disconnected) backups of controller configurations, network diagrams, and system images to enable clean restoration `[SRC-05]`.',
          '**Out-of-Band Communication Channels:** Establish coordination channels independent of the corporate IT network (dedicated telephony or field radio) `[SRC-05, SRC-06]`.',
          '**Preserving Manual Fallback Operations:** Ensure critical facilities can be switched and operated locally by trained crews, and test that fallback regularly in joint exercises involving executive leadership, IT, and technical operations `[SRC-06, SRC-08]`.',
        ],
      },
    ],
    transitionHeading: 'Transition',
    transitionText:
      'Having a sound technical framework is not enough without clear executive and budgetary commitment. The next page translates these five pillars into a concrete roadmap for municipal decision-makers.',
    nextStep: {
      label: 'Conclusion & Recommendations',
      href: '/en/recommendations/',
      description: 'A practical roadmap for municipal leaders.',
    },
  },
};

export const EN_RECOMMENDATIONS: RecommendationsPageData = {
  metaTitle: 'Conclusion & Recommendations for Municipal Decision-Makers — Invisible Faults',
  metaDescription:
    'Three-horizon municipal roadmap (0-3 months, 3-9 months, 9-18 months) aligned with NIST CSF 2.0 and the EU NIS 2 Directive.',
  header: {
    rubricPrefix: 'From Analysis to Action',
    rubricScope: 'Local Governance',
    h1: 'Reclaiming Control of the Connected City',
    subtitle:
      'A realistic three-horizon roadmap for mayors, chief administrative officers, and technical directors, aligned with NIST CSF 2.0 and the EU NIS 2 Directive.',
    visualCaption:
      'Urban grid stabilized under unified governance: each service domain has an assigned owner, an active IT/OT boundary, and a tested manual fallback mode.',
    readingTimeSummary: '45 sec (Quick Read) / 3 min (Deep Dive)',
  },
  quickRead: {
    heading: 'In Brief (Quick Read — 45 sec)',
    intro:
      'For a municipal leader, urban infrastructure cybersecurity is neither a purely technical issue nor an optional expense: it is a precondition for **public-service continuity** and a direct governance duty now enshrined in **NIST CSF 2.0** (*Govern* function, 2024) `[SRC-08]` and the **European NIS 2 Directive** `[SRC-12]`.',
    decisionsIntro: 'Three immediate decisions are enough to drive meaningful change:',
    decisions: [
      {
        horizon: '0–3 months',
        title: '1. Know what you operate',
        detail:
          'Build a complete inventory of connected OT equipment (water, power, transit, buildings) and contractor remote-access paths `[SRC-07, SRC-11]`.',
      },
      {
        horizon: '3–9 months',
        title: '2. Close the highest-exposure paths',
        detail:
          'Enforce IT/OT segmentation, multi-factor authentication (MFA) on all remote maintenance, and verified offline backups `[SRC-05, SRC-10]`.',
      },
      {
        horizon: '9–18 months',
        title: '3. Prepare continuity under pressure',
        detail:
          'Train elected officials, staff, and contractors; embed cybersecurity into every procurement contract; and drill **manual fallback operations** annually `[SRC-06, SRC-09, SRC-12]`.',
      },
    ],
  },
  deepDive: {
    heading: 'Deep Dive (3 min)',
    accountabilityHeading: '1. Why Municipal Decision-Makers Are Directly Accountable',
    accountabilityParagraphs: [
      'In **NIST Cybersecurity Framework (CSF) 2.0** (released February 2024), adding **Govern** as the foundational function alongside the five historical functions (*Identify, Protect, Detect, Respond, Recover*) marks a clear shift: cyber risk management is a matter of executive strategy, budget allocation, and leadership arbitration—not merely an IT department task `[SRC-08]`.',
      'In Europe, **Directive (EU) 2022/2555 (NIS 2)** expands risk-management and incident-reporting obligations across essential and important sectors—including energy, drinking water and wastewater, transport, and public administration—while placing direct accountability on management bodies to approve and oversee cybersecurity measures `[SRC-12]`.',
    ],
    roadmapHeading: '2. Actionable Roadmap Across Three Horizons',
    horizons: [
      {
        id: 'horizon-1',
        timeframe: '0 to 3 Months',
        title: 'Horizon 1 — Immediate Visibility and Governance',
        actions: [
          '**Unify IT and OT oversight:** Bring the Chief Administrative Officer, CIO/IT Director, Technical Services Director, and public-service concessionaires to the same table. Assign a named accountable owner for every critical infrastructure domain `[SRC-08, SRC-11]`.',
          '**Establish a real inventory of connected systems and third parties:** Catalog field controllers, building management systems (BMS), electric-vehicle (EV) charging or transit kiosks, traffic signals, pumping stations, and—above all—every contractor holding remote access `[SRC-07, SRC-11]`.',
          "**Classify systems by criticality:** Use ANSSI's classification methodology to focus effort first on equipment whose outage or malfunction would directly impact residents or physical safety `[SRC-11]`.",
        ],
      },
      {
        id: 'horizon-2',
        timeframe: '3 to 9 Months',
        title: 'Horizon 2 — Rapid Reduction of Structural Vulnerabilities',
        actions: [
          '**Compartmentalize IT and OT networks:** Isolate corporate office networks from supervisory and field-controller networks using industrial firewalls and dedicated demilitarized zones `[SRC-05, SRC-07, SRC-09]`.',
          '**Secure and log all remote maintenance:** Eliminate standing direct contractor connections; require named user accounts, multi-factor authentication (MFA), and time-stamped session approval `[SRC-05, SRC-10, SRC-11]`.',
          '**Protect backups and removable media:** Maintain offline backups of controller configurations and strictly govern diagnostic USB drives and service laptops `[SRC-01, SRC-05]`.',
        ],
      },
      {
        id: 'horizon-3',
        timeframe: '9 to 18 Months',
        title: 'Horizon 3 — Detection, Procurement, and Lasting Resilience',
        actions: [
          '**Deploy passive detection at interconnections:** Implement non-intrusive monitoring at exchange points between IT, OT, and external contractors, in coordination with security operations or a regional Computer Security Incident Response Team (CSIRT) `[SRC-11]`.',
          '**Embed security into public procurement:** Include technical requirements drawn from **ISA/IEC 62443** and **NIST SP 800-82 Rev. 3** in tender specifications: delivery with zero default passwords, network architecture documentation, controlled patching capability, and incident-support clauses `[SRC-07, SRC-09]`.',
          '**Drill manual fallback every year:** Simulate a loss of digital supervision (mirroring the manual local switching that restored power within hours in Ukraine in 2015) to verify that field crews can sustain essential services locally `[SRC-06]`.',
        ],
      },
    ],
    matrixHeading: '3. Executive Decision Matrix',
    matrixColumns: ['Key Leadership Question', 'Concrete Action', 'Supporting Standard'],
    matrixRows: [
      {
        question: '*Do we know which urban systems are connected?*',
        action: 'Unified IT/OT inventory + contractor access registry',
        standard: 'NIST SP 800-82 Rev. 3 `[SRC-07]` / ANSSI `[SRC-11]`',
      },
      {
        question: '*Could an office IT incident disrupt a field utility?*',
        action: 'Strict zone/conduit segmentation + MFA on remote access',
        standard: 'ISA/IEC 62443 `[SRC-09]` / CISA Zero Trust `[SRC-10]`',
      },
      {
        question: '*Could we spot abnormal behavior without halting operations?*',
        action: 'Passive monitoring at IT/OT interconnection points',
        standard: 'ANSSI Detection Doctrine `[SRC-11]`',
      },
      {
        question: '*Could we sustain vital services if supervisory screens go dark?*',
        action: 'Offline backups + annual manual fallback drills',
        standard: 'E-ISAC/SANS 2016 `[SRC-06]` / NIST CSF 2.0 `[SRC-08]`',
      },
    ],
    conclusionHeading: 'Conclusion',
    conclusionText:
      'The most severe faults in urban infrastructure stem neither from technological inevitability nor from invincible adversaries: they grow in the blind spots between departments, in forgotten access credentials, and in the assumption that "it has always worked fine." By treating operational cybersecurity as a discipline of governance, disciplined architecture, and public-service continuity, a municipality tangibly protects the daily life of its residents.',
    finalStepLabel: 'Final step',
    finalStep: {
      label: 'Verified Sources & Methodology',
      href: '/en/sources/',
      description: 'Review our complete bibliography and content-safety charter.',
    },
  },
};

export const EN_SOURCES_PAGE: SourcesPageData = {
  metaTitle: 'Verified Sources & Methodology — Invisible Faults',
  metaDescription:
    'Editorial methodology on factual integrity, content safety charter, and verified public bibliography (SRC-01 to SRC-13).',
  header: {
    rubricPrefix: 'Factual Integrity',
    rubricScope: 'Content Safety',
    h1: 'Documentary Sources and Editorial Methodology',
    subtitle:
      'Every historical fact and architectural recommendation presented on this site relies on verifiable public publications.',
    visualCaption:
      'Sober, static editorial layout dedicated to documentary inspection and source verification.',
    readingTimeSummary: '35 sec (Quick Read) / 2 min (Deep Dive)',
  },
  quickRead: {
    heading: 'In Brief (Quick Read — 35 sec)',
    intro: 'This brief upholds two strict commitments:',
    commitments: [
      '**1. Complete factual traceability:** No figure, date, or finding about a real incident is stated without explicit citation of a verified institutional, technical, or academic public source (`[SRC-01]` to `[SRC-13]`).',
      '**2. Content safety charter:** This site takes an exclusively analytical and defensive approach. It never describes, depicts, or implies any method of intrusion, vulnerability exploitation, or malicious manipulation against any real or fictional infrastructure.',
    ],
  },
  deepDive: {
    heading: 'Deep Dive — Methodology and Complete Bibliography (2 min)',
    methodologyHeading: '1. Methodological Principles and Safety Charter',
    principles: [
      '**Strict separation between conceptual vulnerability and attack technique:** Vulnerabilities are classified by structural category (network segmentation, access governance, social engineering, physical exposure, asset inventory) to inform decision-making without exposing offensive methods.',
      '**Factual post-mortems only:** Historical incidents (*Stuxnet* and *Ukraine 2015*) are presented solely through their verified timelines, measured impacts, and the organizational or architectural gaps they revealed, as established by analytical bodies and competent national agencies.',
      '**Alignment with open public standards:** All defensive recommendations derive from internationally recognized public corpora (NIST, ISA/IEC, CISA, ANSSI, ENISA, European Parliament).',
    ],
    bibliographyHeading: '2. Verified Bibliography',
    groups: [
      { id: 'stuxnet', heading: 'A. Stuxnet Case Study (2009–2010)' },
      { id: 'ukraine', heading: 'B. Ukrainian Power Grid Case Study (December 23, 2015)' },
      { id: 'standards', heading: 'C. Defense Frameworks, Standards, and Regulatory Corpus' },
    ],
    returnHeading: 'Return Navigation',
    returnLinks: [
      { label: 'Home', href: '/en/' },
      { label: 'Vulnerability Categories', href: '/en/vulnerabilities/' },
      { label: 'Case Studies', href: '/en/case-studies/' },
      { label: 'Defense Framework', href: '/en/defense-framework/' },
      { label: 'Recommendations', href: '/en/recommendations/' },
    ],
  },
};
