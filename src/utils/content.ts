import type { Lang } from './i18n';

export interface StudyPage {
  year: number;
  title: string;
  heroImage: string;
  reportUrl: string;
  mediaPackageUrl?: string;
  introHeading: string;
  leadText: string;
  introText: string;
  chartImages: string[];
  sliderImages?: string[];
  summaryHeading: string;
  summaryText: string;
  quotes: Quote[];
  pastStudies: PastStudy[];
  events?: EventItem[];
  eventsHeading?: string;
  meta: MetaData;
}

export interface Quote {
  name: string;
  title: string;
  text: string;
  image: string;
  email?: string;
}

export interface PastStudy {
  year: number;
  label: string;
  url: string;
  external?: boolean;
}

export interface EventItem {
  title: string;
  url?: string;
  image?: string;
}

export interface MetaData {
  title: string;
  description: string;
}

/**
 * Load study page data for a given year and language.
 * Content files are stored as TypeScript modules in src/content/{lang}/{year}.ts
 */
export async function getStudyPage(
  lang: Lang,
  year: number,
): Promise<StudyPage | null> {
  try {
    const module = await import(`../content/${lang}/${year}.ts`);
    return module.default as StudyPage;
  } catch {
    return null;
  }
}

/** Get list of all available study years */
export const studyYears = [2026, 2025, 2024] as const;
export const currentYear = 2026;
