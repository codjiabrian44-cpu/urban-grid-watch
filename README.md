# Failles invisibles — Cybersécurité des infrastructures urbaines

Bilingual documentary presentation site (**French primary / English secondary**) examining why connected urban infrastructure fails primarily through the convergence of organizational gaps, human operational constraints, and insufficiently segmented IT/OT networks—and how municipalities can defend essential public services.

---

## Prerequisites

- **Node.js:** `^20.19.0 || >=22.12.0`
- **npm:** included with Node.js (uses `web/package-lock.json` for reproducible installs)

---

## Local Development & Build

All site sources live in [`web/`](web/). Typography (`Newsreader`, `IBM Plex Sans`, `IBM Plex Mono`) is self-hosted locally via `@fontsource/*`, with zero runtime CDN requests.

```bash
cd web
npm ci
npm run dev      # Starts local Astro dev server
npm run build    # Builds static output into web/dist/
npm run preview  # Serves the built static bundle locally
```

---

## Site Structure & Route Map

The root landing page (`/`) redirects to the French primary edition (`/fr/`) and provides direct links to both language editions. Every content page includes an interactive **Quick Read (~5 min)** / **Deep Dive (~20 min)** toggle.

| # | Section | French Route (Primary) | English Route (Secondary) |
| :-: | :--- | :--- | :--- |
| `01` | Accueil / Home | `/fr/` | `/en/` |
| `02` | Vulnérabilités / Vulnerabilities | `/fr/vulnerabilites/` | `/en/vulnerabilities/` |
| `03` | Études de cas / Case Studies | `/fr/etudes-de-cas/` | `/en/case-studies/` |
| `04` | Cadre de défense / Defense Framework | `/fr/cadre-de-defense/` | `/en/defense-framework/` |
| `05` | Recommandations / Recommendations | `/fr/recommandations/` | `/en/recommendations/` |
| `06` | Sources & Méthode / Sources & Methodology | `/fr/sources/` | `/en/sources/` |

Repository layout:
- [`content/`](content/) — Bilingual reference copy and information architecture (`SITEMAP.md`, `fr/`, `en/`)
- [`web/`](web/) — Static Astro application, responsive diagrams, and motion layer
- [`docs/SOURCES.md`](docs/SOURCES.md) — Verified documentary bibliography (`SRC-01`–`SRC-13`)

---

## Editorial Rigor & Sourcing Policy

This project is strictly analytical and defensive: vulnerability categories remain at the structural and architectural level, and all visual schemas illustrate anomaly detection, segmentation, and containment rather than intrusion paths. Historical post-mortems (*Stuxnet* 2009–2010 and the *December 23, 2015 Ukrainian power grid outage*) report exclusively publicly documented facts, timelines, measured impacts, and lessons learned, with every factual claim and normative reference traced to a verified public source (`[SRC-01]`–`[SRC-13]`) cataloged in [`docs/SOURCES.md`](docs/SOURCES.md).

---

## License

See [`LICENSE`](LICENSE) for code licensing (MIT) and editorial attribution terms.
