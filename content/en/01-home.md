# Page 1: Home — Invisible Faults

**Route:** `/en/`
**Navigation Title:** Home
**Reading Time:** 45 sec (Quick Read) · 2 min 30 sec (Deep Dive)

---

## Eyebrow & Hero Hook

- **Eyebrow:** Documentary Brief · Connected Urban Infrastructure
- **Main Title (H1):** Invisible Faults
- **Subtitle:** Why a connected city rarely yields to an isolated technical feat, yet almost always falters under the combined effect of an organizational gap, human error, and an inadequately segmented network.
- **Visual Indicator (Grid Metaphor):**
  - *Nominal state:* Interconnected urban grid — Integrity monitoring active.
  - *Scroll state:* Anomaly detected on a remote-maintenance node — Preventive isolation engaged.
  - *Caption:* Each node represents an essential service (water, power, transit, public buildings). A lit signal indicates an anomaly detected by defense monitoring—never an intrusion pathway.

- **Reading Path Entry Points (CTA):**
  - Primary button: **Quick Read (5 min)** — *Core thesis, verified facts, and municipal priorities.*
  - Secondary button: **Deep Dive (20 min)** — *Full taxonomy, documented case studies, and normative framework.*

---

## In Brief (Quick Read — 45 sec)

A modern municipality relies on two historically separate digital worlds: enterprise information technology (**IT**: email, civil records, accounting) and the industrial systems that operate physical services (**OT**, *Operational Technology*: water treatment plants, traffic signals, district heating, electrical distribution).

As cities connect these assets to optimize energy consumption and enable remote maintenance, those two spheres converge. As highlighted in European Union Agency for Cybersecurity (**ENISA**) assessments of public administrations and critical services `[SRC-13]`, critical exposure rarely stems from an isolated technological flaw. It almost always emerges at the intersection of three ordinary factors:
1. **A governance gap** (unclear accountability among contractors, technical departments, and IT leadership);
2. **A human vulnerability** (operational fatigue, social engineering, or workarounds around cumbersome procedures);
3. **Insufficient network segmentation** between administrative offices and field control equipment `[SRC-05, SRC-07]`.

This brief examines those mechanisms soberly, grounded in documented historical post-mortems and international public standards.

---

## Deep Dive (2 min 30 sec)

### 1. Urban Infrastructure as a Discreet Cyber-Physical System

Residents experience urban infrastructure as a physical given: clean water flows from the tap, light rail runs on schedule, streetlights turn on at dusk, and hospitals maintain uninterrupted power. Behind this continuity operates a hidden layer of sensors, programmable logic controllers (PLCs), and supervisory control and data acquisition (SCADA) platforms—collectively known as **Operational Technology (OT)** `[SRC-07]`.

For decades, this equipment operated in isolation on proprietary protocols and physically separated networks. Its primary mandate was never data confidentiality, but **continuous availability** and **physical safety**, across hardware lifecycles often spanning fifteen to twenty years `[SRC-07, SRC-11]`.

### 2. The Paradox of IT/OT Convergence

To lower operating costs, manage energy transitions, and allow remote diagnostics by specialized contractors, municipalities and utility operators progressively connected industrial control environments to corporate networks and the internet `[SRC-07, SRC-11]`. While convergence delivers genuine operational benefits, it fundamentally reshapes risk exposure:
- **Enterprise IT** is exposed daily to external communications (email, laptops, web browsers).
- **Operational Technology (OT)** was often never engineered to withstand unexpected network traffic, and rebooting or patching equipment may be impossible without interrupting an essential public service `[SRC-07, SRC-11]`.

When the boundary between these two environments becomes porous—through shared remote access or uncontrolled removable media—a disruption originating in administrative IT can reach physical field equipment `[SRC-01, SRC-05]`.

### 3. What This Site Demonstrates—and What It Refuses to Show

This site is built for decision-makers, elected officials, international jury members, and citizens seeking an accurate, sober understanding of urban resilience.

- **What we analyze:** The structural categories of vulnerability (technical, human, physical, organizational), verified lessons from two landmark historical incidents (*Stuxnet* and the *2015 Ukrainian power grid outage*), and a realistic defense framework grounded in public standards (NIST SP 800-82 Rev. 3, NIST CSF 2.0, ISA/IEC 62443, CISA Zero Trust, ANSSI guidelines, and EU Directive NIS 2).
- **What we exclude on principle:** No unsourced dramatic scenarios, no fear-mongering jargon, and no depiction of intrusion or malicious manipulation techniques. Municipal cybersecurity is fundamentally a discipline of architecture, organization, and public-service continuity.

### Navigation Signposts

- **Next step:** [Vulnerability Categories](/en/vulnerabilities) — *Understand the four fault families that weaken urban networks.*
- **Direct access:** [Verified Case Studies](/en/case-studies) · [Defense Framework](/en/defense-framework) · [Municipal Roadmap](/en/recommendations)
