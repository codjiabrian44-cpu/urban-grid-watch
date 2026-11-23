export interface PageHeaderMeta {
  rubricPrefix: string;
  rubricScope: string;
  h1: string;
  subtitle: string;
  visualCaption: string;
  readingTimeSummary: string;
}

export interface HomePageData {
  metaTitle: string;
  metaDescription: string;
  header: PageHeaderMeta & {
    visualStateNominal: string;
    visualStateScroll: string;
    ctaQuickLabel: string;
    ctaQuickHint: string;
    ctaDeepLabel: string;
    ctaDeepHint: string;
  };
  quickRead: {
    heading: string;
    intro: string;
    bridge: string;
    factors: Array<{ num: string; title: string; detail: string }>;
    outro: string;
  };
  deepDive: {
    heading: string;
    sections: Array<{
      id: string;
      shortTitle: string;
      heading: string;
      paragraphs: string[];
      bullets?: string[];
      closingParagraph?: string;
    }>;
    signpostsHeading: string;
    nextStep: { label: string; href: string; description: string };
    directAccessLabel: string;
    directAccessLinks: Array<{ label: string; href: string }>;
  };
}

export interface VulnerabilitiesPageData {
  metaTitle: string;
  metaDescription: string;
  header: PageHeaderMeta;
  quickRead: {
    heading: string;
    intro: string;
    columns: [string, string, string];
    rows: Array<{ category: string; nature: string; example: string }>;
    takeaway: string;
  };
  deepDive: {
    heading: string;
    categories: Array<{
      id: string;
      code: string;
      heading: string;
      intro: string;
      items: string[];
    }>;
    transitionHeading: string;
    transitionText: string;
    nextStep: { label: string; href: string; description: string };
  };
}

export interface CaseStudyBlock {
  id: string;
  heading: string;
  period: string;
  metricValue: string;
  metricUnit: string;
  contextHeading: string;
  contextParagraphs: string[];
  timelineHeading: string;
  timeline: Array<{ date: string; event: string }>;
  impactHeading: string;
  impactItems: string[];
  lessonsHeading: string;
  lessonsIntro?: string;
  lessons: string[];
}

export interface CaseStudiesPageData {
  metaTitle: string;
  metaDescription: string;
  header: PageHeaderMeta & {
    safetyNoticeLabel: string;
    safetyNoticeText: string;
  };
  quickRead: {
    heading: string;
    intro: string;
    items: Array<{ title: string; period: string; metric: string; summary: string }>;
  };
  deepDive: {
    heading: string;
    cases: [CaseStudyBlock, CaseStudyBlock];
    comparisonHeading: string;
    comparisonColumns: [string, string, string];
    comparisonRows: Array<{ criterion: string; stuxnet: string; ukraine: string }>;
    nextStepLabel: string;
    nextStep: { label: string; href: string; description: string };
  };
}

export interface DefenseFrameworkPageData {
  metaTitle: string;
  metaDescription: string;
  header: PageHeaderMeta;
  quickRead: {
    heading: string;
    intro: string;
    measures: Array<{ num: string; title: string; detail: string }>;
  };
  deepDive: {
    heading: string;
    diagramTitle: string;
    diagramCaption: string;
    pillars: Array<{
      id: string;
      shortTitle: string;
      heading: string;
      intro: string;
      subIntro?: string;
      bullets: string[];
    }>;
    transitionHeading: string;
    transitionText: string;
    nextStep: { label: string; href: string; description: string };
  };
}

export interface RecommendationsPageData {
  metaTitle: string;
  metaDescription: string;
  header: PageHeaderMeta;
  quickRead: {
    heading: string;
    intro: string;
    decisionsIntro: string;
    decisions: Array<{ horizon: string; title: string; detail: string }>;
  };
  deepDive: {
    heading: string;
    accountabilityHeading: string;
    accountabilityParagraphs: string[];
    roadmapHeading: string;
    horizons: Array<{
      id: string;
      timeframe: string;
      title: string;
      actions: string[];
    }>;
    matrixHeading: string;
    matrixColumns: [string, string, string];
    matrixRows: Array<{ question: string; action: string; standard: string }>;
    conclusionHeading: string;
    conclusionText: string;
    finalStepLabel: string;
    finalStep: { label: string; href: string; description: string };
  };
}

export interface SourceLink {
  label: string;
  url: string;
}

export interface SourceEntry {
  id: string; // e.g. 'SRC-01'
  anchor: string; // e.g. 'src-01'
  group: 'stuxnet' | 'ukraine' | 'standards';
  citation: string;
  links: SourceLink[];
}

export interface SourcesPageData {
  metaTitle: string;
  metaDescription: string;
  header: PageHeaderMeta;
  quickRead: {
    heading: string;
    intro: string;
    commitments: string[];
  };
  deepDive: {
    heading: string;
    methodologyHeading: string;
    principles: string[];
    bibliographyHeading: string;
    groups: Array<{
      id: 'stuxnet' | 'ukraine' | 'standards';
      heading: string;
    }>;
    returnHeading: string;
    returnLinks: Array<{ label: string; href: string }>;
  };
}
