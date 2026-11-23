# Page 4: Defense Framework

**Route:** `/en/defense-framework`
**Navigation Title:** Defense Framework
**Reading Time:** 55 sec (Quick Read) · 4 min (Deep Dive)

---

## Page Header

- **Eyebrow:** Resilience Architecture · Public Standards
- **Main Title (H1):** Five Pillars for Defending Urban Infrastructure
- **Subtitle:** A pragmatic model combining network segmentation, Zero Trust principles, non-intrusive detection, human readiness, and manual fallback capability.
- **Visual Indicator (Grid Metaphor):** Dynamic reorganization of the node grid into compartmentalized zones and conduits (IEC 62443 / Purdue Model). When an anomaly is detected on an interconnection conduit, it remains contained within its zone without reaching the operational core.

---

## In Brief (Quick Read — 55 sec)

Defending a connected city is not about stacking expensive tools onto a disorganized network. Grounded in **NIST SP 800-82 Rev. 3** `[SRC-07]`, the **ISA/IEC 62443** standards series `[SRC-09]`, **CISA's Zero Trust Maturity Model v2.0** `[SRC-10]`, and **ANSSI** guidelines `[SRC-11]`, urban defense rests on **five complementary measures**:

1. **Strict IT/OT Segmentation:** Physically and logically separate enterprise office networks (IT) from operational control networks (OT) through dedicated demilitarized zones `[SRC-07, SRC-09]`.
2. **Graduated Zero Trust Adoption:** Eliminate implicit trust based solely on internal network location; systematically verify identity, device posture, and least-privilege access `[SRC-10]`.
3. **Passive Anomaly Detection:** Observe industrial network traffic non-intrusively to spot abnormal behavior without disrupting physical processes `[SRC-11]`.
4. **Training and Operational Hygiene:** Equip technical and administrative teams to recognize social engineering and follow access and removable-media controls `[SRC-01, SRC-05]`.
5. **Incident Response and Manual Fallback:** Maintain tested offline backups, run joint IT/OT exercises, and preserve manual local service-continuity procedures `[SRC-05, SRC-06]`.

---

## Deep Dive (4 min)

### Pillar 1 — IT/OT Segmentation via Zones and Conduits

The foundational principle set out in **ISA/IEC 62443** `[SRC-09]` and **NIST SP 800-82 Rev. 3** `[SRC-07]` is to reject flat networks where every device can communicate freely with every other device.

- **Layered Compartmentalization (Purdue Model):** Corporate systems (email, administration) remain separated from SCADA supervisory servers—and further still from field controllers—by buffer zones (industrial DMZs) that strictly filter authorized traffic `[SRC-07]`.
- **Controlled Remote Maintenance Flows:** Contractor remote access must never terminate directly on a field controller. As recommended by ANSSI guidance `[SRC-11]` and the CISA advisory following the 2015 Ukrainian outage `[SRC-05]`, remote sessions must pass through dedicated, time-bound, logged gateways protected by multi-factor authentication (MFA).
- **Concrete Benefit:** If an administrative workstation is compromised, the incident stays contained within the office zone and never reaches valves, traffic controllers, or substations.

### Pillar 2 — Zero Trust Principles Adapted to Urban Environments

Published in April 2023, CISA's **Zero Trust Maturity Model (v2.0)** structures the shift away from the legacy "castle-and-moat" posture—where any actor inside the perimeter enjoys automatic trust `[SRC-10]`. It is organized around **five pillars** (*Identity, Devices, Networks, Applications & Workloads, Data*) and three cross-cutting capabilities (*Governance, Visibility & Analytics, Automation & Orchestration*) `[SRC-10]`.

For a municipality, adoption follows four progressive stages (*Traditional, Initial, Advanced, Optimal*) `[SRC-10]`:
- **Strict Least Privilege:** A street-lighting maintenance account can access only lighting controllers in its designated sector, never potable water supervision.
- **Continuous Verification of Identities and Devices:** Portable diagnostic laptops are permitted to connect to the OT network only after posture verification and within an approved maintenance window `[SRC-10, SRC-11]`.
- **Adapting to OT Constraints:** Where a legacy controller cannot run a modern security agent, Zero Trust controls are enforced at access gateways, managed switches, and administrative accounts `[SRC-07, SRC-10]`.

### Pillar 3 — Anomaly Detection and Non-Intrusive Monitoring

A central lesson from *Stuxnet* `[SRC-02]` and **ANSSI**'s *Detection Doctrine for Industrial Systems* (2020) `[SRC-11]` lies in distinguishing **operational safety** from **security detection**.

- **Never Disrupt the Physical Process:** Unlike office IT environments, detection tools deployed in OT must operate **passively** (via network traffic mirroring, without active scanning that could overload or stall a real-time controller) `[SRC-07, SRC-11]`.
- **Priority Monitoring at Interconnection Points:** ANSSI recommends placing detection sensors first at boundaries between enterprise IT, external networks, and remote-maintenance zones `[SRC-11]`.
- **Correlation Against Nominal Behavior:** A field controller runs a stable, predictable cycle. An unexpected connection, a configuration change outside a maintenance window, or an unusual file transfer triggers an alert intelligible to both cybersecurity staff and plant operators `[SRC-11]`.

### Pillar 4 — Human Readiness, Contractors, and Operational Hygiene

Because social engineering and operational workarounds sit at the heart of real-world incidents `[SRC-05, SRC-13]`, human defense must be designed as a **support system** for staff rather than a punitive barrier.

- **Role-Specific Training:** Administrative personnel are trained to spot phishing attempts; OT technicians receive practical guidance on removable-media risks and diagnostic interfaces `[SRC-01, SRC-05]`.
- **Usable Security Workflows:** Streamlined, reliable secure-access tools reduce the incentive to bypass controls during urgent field repairs.
- **Third-Party and Contractor Governance:** Every public procurement contract for connected urban equipment should embed **ISA/IEC 62443**-aligned requirements: named individual accounts, removal of default passwords, logging of remote maintenance, and immediate credential revocation upon contract end `[SRC-09, SRC-11]`.

### Pillar 5 — Incident Response, Backups, and Manual Fallback

The 2015 Ukrainian power grid incident shows that ultimate resilience depends as much on recovery readiness as on prevention `[SRC-06]`. Aligned with the *Respond* and *Recover* functions of **NIST CSF 2.0** `[SRC-08]`:

- **Verified Offline Backups:** Maintain offline (immutable or physically disconnected) backups of controller configurations, network diagrams, and system images to enable clean restoration `[SRC-05]`.
- **Out-of-Band Communication Channels:** Establish coordination channels independent of the corporate IT network (dedicated telephony or field radio) `[SRC-05, SRC-06]`.
- **Preserving Manual Fallback Operations:** Ensure critical facilities can be switched and operated locally by trained crews, and test that fallback regularly in joint exercises involving executive leadership, IT, and technical operations `[SRC-06, SRC-08]`.

---

## Transition

Having a sound technical framework is not enough without clear executive and budgetary commitment. The next page translates these five pillars into a concrete roadmap for municipal decision-makers.

- **Next step:** [Conclusion & Recommendations](/en/recommendations) — *A practical roadmap for municipal leaders.*
