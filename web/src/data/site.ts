import { withBase, type Lang } from '../utils/format';

export type PageKey =
  | 'home'
  | 'vulnerabilities'
  | 'caseStudies'
  | 'defenseFramework'
  | 'recommendations'
  | 'sources';

export interface RoutePair {
  key: PageKey;
  fr: string;
  en: string;
  navLabel: Record<Lang, string>;
  indexNum: string;
}

export const ROUTES: RoutePair[] = [
  {
    key: 'home',
    fr: '/fr/',
    en: '/en/',
    navLabel: { fr: 'Accueil', en: 'Home' },
    indexNum: '01',
  },
  {
    key: 'vulnerabilities',
    fr: '/fr/vulnerabilites/',
    en: '/en/vulnerabilities/',
    navLabel: { fr: 'Vulnérabilités', en: 'Vulnerabilities' },
    indexNum: '02',
  },
  {
    key: 'caseStudies',
    fr: '/fr/etudes-de-cas/',
    en: '/en/case-studies/',
    navLabel: { fr: 'Études de cas', en: 'Case Studies' },
    indexNum: '03',
  },
  {
    key: 'defenseFramework',
    fr: '/fr/cadre-de-defense/',
    en: '/en/defense-framework/',
    navLabel: { fr: 'Cadre de défense', en: 'Defense Framework' },
    indexNum: '04',
  },
  {
    key: 'recommendations',
    fr: '/fr/recommandations/',
    en: '/en/recommendations/',
    navLabel: { fr: 'Recommandations', en: 'Recommendations' },
    indexNum: '05',
  },
  {
    key: 'sources',
    fr: '/fr/sources/',
    en: '/en/sources/',
    navLabel: { fr: 'Sources & Méthode', en: 'Sources & Methodology' },
    indexNum: '06',
  },
];

export const UI_COPY: Record<
  Lang,
  {
    siteTitle: string;
    siteSubtitle: string;
    skipLink: string;
    langSwitchLabel: string;
    otherLangLabel: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    navAriaLabel: string;
    depthLabel: string;
    depthQuick: string;
    depthDeep: string;
    quickReadTag: string;
    deepDiveTag: string;
    quickReadContinueTitle: string;
    quickReadContinueHint: string;
    expandDeepDive: string;
    prevPage: string;
    nextPage: string;
    safetyMention: string;
    sourcesLinkLabel: string;
    readingSummaryLabel: string;
    homeIndexLabel: string;
  }
> = {
  fr: {
    siteTitle: 'Failles invisibles',
    siteSubtitle: 'Cybersécurité des infrastructures urbaines',
    skipLink: 'Aller au contenu principal',
    langSwitchLabel: 'Langue',
    otherLangLabel: 'Version anglaise (EN)',
    menuOpenLabel: 'Menu',
    menuCloseLabel: 'Fermer',
    navAriaLabel: 'Navigation principale du dossier',
    depthLabel: 'Densité de lecture',
    depthQuick: 'Lecture rapide (5 min)',
    depthDeep: 'Lecture approfondie (20 min)',
    quickReadTag: "L'essentiel",
    deepDiveTag: 'Analyse approfondie',
    quickReadContinueTitle: 'Mode Lecture rapide (5 min) actif',
    quickReadContinueHint:
      "L'analyse approfondie est masquée pour privilégier la synthèse décisionnelle.",
    expandDeepDive: 'Afficher l’analyse approfondie (20 min)',
    prevPage: 'Page précédente',
    nextPage: 'Page suivante',
    safetyMention:
      'Dossier documentaire à visée pédagogique et décisionnelle — Aucune méthode offensive décrite.',
    sourcesLinkLabel: 'Bibliographie vérifiée & méthodologie',
    readingSummaryLabel: 'Temps de lecture',
    homeIndexLabel: 'Dossier',
  },
  en: {
    siteTitle: 'Invisible Faults',
    siteSubtitle: 'Cybersecurity of Urban Infrastructure',
    skipLink: 'Skip to main content',
    langSwitchLabel: 'Language',
    otherLangLabel: 'French version (FR)',
    menuOpenLabel: 'Menu',
    menuCloseLabel: 'Close',
    navAriaLabel: 'Primary dossier navigation',
    depthLabel: 'Reading depth',
    depthQuick: 'Quick Read (5 min)',
    depthDeep: 'Deep Dive (20 min)',
    quickReadTag: 'In Brief',
    deepDiveTag: 'Deep Dive',
    quickReadContinueTitle: 'Quick Read (5 min) active',
    quickReadContinueHint:
      'Detailed analytical sections are collapsed to keep executive key points focused.',
    expandDeepDive: 'Show Deep Dive analysis (20 min)',
    prevPage: 'Previous page',
    nextPage: 'Next page',
    safetyMention:
      'Documentary brief for educational and decision-making purposes — No offensive techniques described.',
    sourcesLinkLabel: 'Verified bibliography & methodology',
    readingSummaryLabel: 'Reading time',
    homeIndexLabel: 'Brief',
  },
};

export function getRouteFor(key: PageKey, lang: Lang): string {
  const pair = ROUTES.find((r) => r.key === key);
  if (!pair) return withBase(`/${lang}/`);
  return withBase(pair[lang]);
}

export function getNeighbors(key: PageKey, lang: Lang): {
  prev: { title: string; href: string } | null;
  next: { title: string; href: string } | null;
} {
  const idx = ROUTES.findIndex((r) => r.key === key);
  if (idx === -1) return { prev: null, next: null };
  const prevRoute = idx > 0 ? ROUTES[idx - 1] : null;
  const nextRoute = idx < ROUTES.length - 1 ? ROUTES[idx + 1] : null;
  return {
    prev: prevRoute ? { title: prevRoute.navLabel[lang], href: withBase(prevRoute[lang]) } : null,
    next: nextRoute ? { title: nextRoute.navLabel[lang], href: withBase(nextRoute[lang]) } : null,
  };
}
