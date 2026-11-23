# Design System Plan — Failles invisibles / Invisible Faults (Checkpoint 2 — Investigation Dossier & Newspaper Front Page)

**Scope:** Static visual direction combining investigative dossier craft with broadsheet newspaper front-page hierarchy — zero GSAP or CSS animations yet.

---

## 1. Exact 8-Token Palette (Strict Enforcement)

| CSS Custom Property | Hex | Role | WCAG AA Verification |
| :--- | :--- | :--- | :--- |
| `--color-ink` | `#1A1512` | Primary warm dark brown-black ground | Base canvas |
| `--color-ink-raised` | `#231D19` | Elevated card, band, and plate surface | Surface step |
| `--color-parchment` | `#EDE4D3` | Primary prose & monumental display typography | `14.34:1` on ink · `13.19:1` on ink-raised · `7.76:1` on petrol (AAA) |
| `--color-parchment-dim` | `#B8A990` | Secondary copy, captions, metadata | `7.86:1` on ink · `7.23:1` on ink-raised (AAA; never placed on petrol) |
| `--color-petrol` | `#1F4A4D` | Fill for nominal/healthy states, active UI toggles, & secondary CTAs | Paired exclusively with `--color-petrol-text` or `--color-parchment` |
| `--color-petrol-text` | `#CFE3E0` | Text on petrol fills & nominal accent text on ink | `7.33:1` on petrol · `13.55:1` on ink · `12.46:1` on ink-raised (AAA) |
| `--color-signal` | `#F26357` | Reserved strictly for anomaly/alert, primary CTA fill (`#1A1512` ink), and one bold moment per page (never a background wash) | `5.77:1` on ink · `5.31:1` on ink-raised · `5.77:1` ink-on-signal (AA) |
| `--color-rule` | `#3A2F27` | Thin structural dividers, drafting hairlines, and borders | Decorative & structural grid |

Full pairwise mathematical and DOM contrast verification is logged in `docs/tables/contrast_check.md`.

---

## 2. Typography & Newspaper Hierarchy (`@fontsource/*` Self-Hosted)

- **Display (`Newsreader` `400`, `500`, `400 italic`):**
  - `--text-h1`: `clamp(3.15rem, 6vw, 5.5rem)` (`line-height: 1.0`, `-0.028em`) for monumental front-page authority.
  - `--text-monument`: `clamp(3.85rem, 8vw, 6.75rem)` for one signature typographic centerpiece per page.
  - `--text-quote`: `clamp(1.55rem, 2.65vw, 2.35rem)` italic for newspaper pull-quotes.
- **Body (`IBM Plex Sans` `400`, `500`, `600`):** Tight editorial column measure (`--measure: 56ch`) inside wider `1360px` asymmetric spreads.
- **Archival Coordinates & Badges (`IBM Plex Mono` `400`, `500`):** Quiet archival `[SRC-XX]` links in `--color-petrol-text` on `--color-ink-raised` / `--color-petrol` so Signal Red stays rare and authoritative.

---

## 3. Four Defensive Diagrams (Exact Palette + Depth + Varied Line Weights)

1. `GridVisual.astro` (Page 1): Warm `--color-ink` to `--color-ink-raised` gradient drafting plate, subtle dot texture, concentric calibration arcs, `--color-petrol` fills with `--color-petrol-text` strokes/centers on nominal municipal services, and a single `--color-signal` glowing isolated remote-maintenance node behind a perimeter barrier.
2. `ClusterMatrixDiagram.astro` (Page 2): 4-axis systemic resonance cartography using `--color-petrol` nominal domain enclosures, varied-weight coupling arcs, and one glowing `--color-signal` monitored indicator.
3. `ZonesConduitsDiagram.astro` (Page 4): Full-width Purdue / ISA/IEC 62443 blueprint plate with `--color-petrol` protected DMZ gateway, passive ANSSI sensor, SCADA zone, Field OT nodes, and offline backup foundation; `--color-signal` exclusively highlights the isolated anomaly inside the DMZ and its containment gate.
4. `StabilizedGridDiagram.astro` (Page 5): Unified municipal governance schematic with `--color-petrol` executive oversight and four stabilized service vaults, with `--color-signal` marking the active IT/OT containment barrier check.

---

## 4. Per-Page Typographic Moment & Varied Layout Rhythm

- **Page 1 (Accueil):** Monumental front-page `Newsreader` H1 + redesigned `GridVisual`, dense 3-column *L'essentiel* brief with oversized numerals, wide breathing **Pull Quote** break, and compact 2-column IT vs OT Petrol/Ink comparison plaque.
- **Page 2 (Vulnérabilités):** Oversized **`4`** typographic callout + verbatim pull-quote centerpiece, dense quick-read matrix, and staggered asymmetric `1.15fr / 0.85fr` & `0.85fr / 1.15fr` quadrant dossiers.
- **Page 3 (Études de cas):** Monumental twin-stat spread (**`~1 000`** vs **`~225 000`** in `Newsreader`) + broadsheet pull quotes highlighting the key lessons of Stuxnet and the 2015 Ukrainian manual recovery.
- **Page 4 (Cadre de défense):** Full-width `ZonesConduitsDiagram` + asymmetric paired pillar cards + wide breathing **`03` Passive Detection** `Newsreader` pull-quote spotlight band.
- **Page 5 (Recommandations):** Oversized **`0–3 / 3–9 / 9–18`** horizon typographic scale + `StabilizedGridDiagram` + full-width `Newsreader` italic newspaper conclusion statement.
- **Page 6 (Sources & Méthode):** Monumental **`13 / 13`** archival provenance seal in `Newsreader` (`0` unsourced claims) + breathing methodology prose + dense 2-column bibliography ledger.
