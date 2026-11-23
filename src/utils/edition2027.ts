import type { Lang } from './i18n';

/**
 * Data model for the 2027 edition ("Vorschau"-Ausgabe).
 *
 * This is intentionally separate from the archive `StudyPage` type so the
 * redesigned 2027 experience can carry richer, chart-oriented data (multi-year
 * trend series, interactive stat tiles) without touching the 2024–2026 archive.
 *
 * IMPORTANT: The 2027 data points are DEMO / placeholder values. They are a
 * plausible extrapolation of the real 2023–2026 results from the 2026 study and
 * are flagged (`demoYear`) so the UI can mark them visibly as placeholders until
 * the real 2027 survey is available.
 */

/** A single metric tracked across the survey years. */
export interface TrendSeries {
  /** Human-readable label (localised). */
  label: string;
  /** One value per entry in `Edition2027Data.years`, in the same order. */
  values: number[];
  /** Token name of the stroke colour, e.g. 'coral' | 'navy' | 'teal' | 'gold'. */
  color: string;
  /** Optional short note shown in the legend/tooltip. */
  note?: string;
}

export interface TrendChart {
  id: string;
  heading: string;
  question: string;
  /** y-axis max in percent; defaults to 60. */
  max?: number;
  unit?: string;
  series: TrendSeries[];
  /** Short interpretation shown beside the chart. */
  insight: string;
  /** Lucide icon name for the section marker. */
  icon: string;
}

export interface StatTile {
  /** Numeric value for the animated count-up (percent by default). */
  value: number;
  suffix?: string;
  label: string;
  description: string;
  icon: string;
  /** true → value is a 2027 demo/placeholder figure. */
  demo?: boolean;
  /**
   * id of the trend chart (flagship or a section chart) revealed when the tile
   * is opened. When set, the tile becomes an interactive, expandable card.
   */
  chartId?: string;
  /** Longer explanation shown in the expanded detail panel. */
  detail?: string;
}

export interface ThemeSection {
  id: string;
  eyebrow: string;
  heading: string;
  lead: string;
  body: string;
  chart: TrendChart;
  /** Name of a line illustration (see lineart.ts) shown with the section. */
  illo?: string;
}

export interface Quote2027 {
  name: string;
  title: string;
  text: string;
  image: string;
  email?: string;
}

export interface ArchiveEntry {
  year: number;
  label: string;
  url: string;
  blurb: string;
}

export interface Edition2027Data {
  year: number;
  demoYear: number;
  /** Full list of survey years shown on the x-axis of trend charts. */
  years: number[];
  title: string;
  reportUrl: string;
  mediaPackageUrl?: string;

  previewBadge: string;
  previewNote: string;

  heroKicker: string;
  heroLede: string;
  scrollCue: string;

  introHeading: string;
  introLead: string;
  introBody: string;

  statsHeading: string;
  statsLead: string;
  stats: StatTile[];

  trendHeading: string;
  trendLead: string;
  /** The flagship multi-line trend chart ("5 Jahre auf einen Blick"). */
  flagship: TrendChart;

  sections: ThemeSection[];

  summaryHeading: string;
  summaryText: string;

  quotesHeading: string;
  quotes: Quote2027[];

  archiveHeading: string;
  archiveLead: string;
  archive: ArchiveEntry[];

  meta: { title: string; description: string };
}

/** Load the 2027 edition data for a language. Returns null if not translated yet. */
export async function getEdition2027(
  lang: Lang,
): Promise<Edition2027Data | null> {
  try {
    const module = await import(`../content/${lang}/2027.ts`);
    return module.default as Edition2027Data;
  } catch {
    return null;
  }
}
