import type { Edition2027Data } from '../../utils/edition2027';

/*
 * Schweizer Familienbarometer 2027 – Vorschau-Ausgabe.
 *
 * Werte 2023–2026: reale Resultate aus dem Bericht Familienbarometer 2026.
 * Werte 2027: DEMO/Platzhalter – plausible Fortschreibung des Trends, sichtbar
 * als Vorschau gekennzeichnet, bis die echte Erhebung 2027 vorliegt.
 */

const data: Edition2027Data = {
  year: 2027,
  demoYear: 2027,
  years: [2023, 2024, 2025, 2026, 2027],
  title: 'Schweizer Familienbarometer',
  reportUrl: '/downloads/Familienbarometer 2026.pdf',
  mediaPackageUrl: '/downloads/Medienpaket 2026.zip',

  previewBadge: 'Vorschau',
  previewNote: '',

  heroKicker: 'Fünf Jahre Familien in der Schweiz',
  heroLede:
    'Seit 2023 geben wir Familien eine Stimme. Die fünfte Ausgabe macht sichtbar, was bleibt, was sich verschiebt – und wohin die Entwicklung zeigt.',
  scrollCue: 'Scrollen und die Entwicklung entdecken',

  introHeading: 'Was Familien in der Schweiz bewegt',
  introLead:
    'Mit dem Schweizer Familienbarometer liefern Pro Familia Schweiz und Pax jährlich fundierte Einblicke in die Lebensrealität von Familien – und mit nun fünf Erhebungen erstmals einen belastbaren Trend über die Zeit.',
  introBody: `<p>Für die Erhebungen befragt das Beratungs- und Forschungsunternehmen Empiricon AG repräsentativ über 2'000 Familien aus allen Landesteilen. Ausgewertet wird differenziert nach Sprachregion, Anzahl und Alter der Kinder, Familientyp und Haushaltseinkommen.</p><p>Das Barometer misst die subjektive Wahrnehmung der Familien – einen entscheidenden Faktor, der Einstellungen prägt, Meinungen beeinflusst und als Grundlage für individuelles und gesellschaftliches Handeln dient. Über fünf Jahre hinweg werden damit nicht nur Momentaufnahmen, sondern Entwicklungen lesbar.</p>`,

  statsHeading: 'Fünf Erkenntnisse auf einen Blick',
  statsLead: 'Die wichtigsten Kennzahlen der Ausgabe 2027 im Überblick.',
  stats: [
    {
      value: 51,
      suffix: '%',
      label: 'Geld bleibt Top-Thema',
      description:
        'Krankenkassenprämien beschäftigen Familien weiterhin am stärksten – die Sorge um steigende Kosten bleibt das dominierende Thema.',
      icon: 'wallet',
      demo: true,
      chartId: 'flagship',
      detail:
        'Seit 2023 stehen Krankenkassenprämien fast durchgehend an der Spitze der Sorgen – von 34 % auf heute 51 %. Finanzielle Themen prägen den Familienalltag damit stärker als alle anderen und lassen übrige Themen zurück.',
    },
    {
      value: 80,
      suffix: '%',
      label: 'Hohe Zufriedenheit',
      description:
        'Vier von fünf Familien sind mit ihrem Familienleben eher oder sehr zufrieden – stabil hoch über alle fünf Erhebungen.',
      icon: 'smile',
      demo: true,
      chartId: 'zufriedenheit-chart',
      detail:
        'Die Zufriedenheit mit dem Familienleben liegt über alle fünf Erhebungen stabil bei rund 80 %. Bemerkenswert ist der Kontrast zwischen dieser hohen Zufriedenheit im Heute und dem skeptischen Blick auf die Zukunft.',
    },
    {
      value: 74,
      suffix: '%',
      label: 'Skeptischer Blick nach vorn',
      description:
        'Trotz Zufriedenheit heute erwartet die Mehrheit, dass sich die allgemeine Lage für Familien künftig eher verschlechtert.',
      icon: 'cloud-rain',
      demo: true,
      chartId: 'zufriedenheit-chart',
      detail:
        'Obwohl die Zufriedenheit heute hoch ist, erwartet eine Mehrheit eine Verschlechterung der allgemeinen Lage für Familien. Dieses Spannungsfeld zwischen zufriedenem Heute und skeptischem Morgen zieht sich seit 2023 durch.',
    },
    {
      value: 25,
      suffix: '%',
      label: 'Digitale Medien im Fokus',
      description:
        'Der Umgang mit Medien und Social Media gewinnt Jahr für Jahr an Relevanz und erreicht das Niveau klassischer Kernthemen.',
      icon: 'smartphone',
      demo: true,
      chartId: 'medien-chart',
      detail:
        'Der Umgang mit digitalen Medien hat sich von 16 % (2023) auf 25 % gesteigert – ein kontinuierlicher Anstieg, der das Thema heute auf das Niveau klassischer Kernthemen wie Bildungspolitik hebt.',
    },
    {
      value: 49,
      suffix: '%',
      label: 'Wunsch nach Finanzbildung',
      description:
        'Knapp jede zweite Familie wünscht sich mehr gute Bildungsangebote zu Finanzthemen für Kinder und Jugendliche.',
      icon: 'graduation-cap',
      demo: true,
      chartId: 'faktoren-chart',
      detail:
        'Finanzielle Ressourcen bleiben der wichtigste Hebel für ein besseres Familienleben. Entsprechend gross ist der Wunsch, der nächsten Generation früh ein solides Finanzwissen mitzugeben.',
    },
  ],

  trendHeading: 'Fünf Jahre im Verlauf',
  trendLead:
    'Welche Themen beschäftigen Familien am stärksten – und wie verschieben sich die Gewichte seit 2023? Die Linien zeichnen sich beim Scrollen.',
  flagship: {
    id: 'flagship',
    heading: 'Die Themen, die Familien am stärksten beschäftigen',
    question:
      'Welche dieser aktuellen Themen beschäftigen Ihre Familie zurzeit am stärksten? (Auswahl von drei Themen, Anteil Nennungen)',
    max: 60,
    unit: '%',
    icon: 'trending-up',
    insight:
      'Finanzielle Themen dominieren durchgehend. Auffällig ist der stetige Anstieg beim Umgang mit digitalen Medien, während Klimathemen an Relevanz verlieren.',
    series: [
      {
        label: 'Krankenkassenprämien',
        values: [34, 47, 45, 49, 51],
        color: 'coral',
      },
      {
        label: 'Inflation / steigende Preise',
        values: [22, 37, 39, 37, 35],
        color: 'gold',
      },
      {
        label: 'Gesundheit',
        values: [31, 26, 29, 26, 27],
        color: 'navy',
      },
      {
        label: 'Umgang mit Medien / Social Media',
        values: [16, 18, 20, 22, 25],
        color: 'teal',
        note: 'steigend',
      },
      {
        label: 'Klimawandel und Umweltschutz',
        values: [21, 16, 14, 13, 12],
        color: 'slate',
        note: 'rückläufig',
      },
    ],
  },

  sections: [
    {
      id: 'zufriedenheit',
      illo: 'kneelbaby',
      eyebrow: 'Zufriedenheit und Perspektiven',
      heading: 'Hohe Zufriedenheit heute, Skepsis für morgen',
      lead: 'Die Zufriedenheit mit dem Familienleben bewegt sich stabil auf hohem Niveau.',
      body: 'Die grosse Mehrheit der Befragten ist mit ihrem Familienleben eher oder sehr zufrieden. Tendenziell tiefere Werte zeigen Ein-Eltern-Familienhaushalte. Dieser Zufriedenheit steht ein mehrheitlich skeptischer Blick auf die Zukunft gegenüber – ein Spannungsfeld, das sich über alle fünf Erhebungen durchzieht.',
      chart: {
        id: 'zufriedenheit-chart',
        heading: 'Zufriedenheit mit dem Familienleben',
        question:
          'Wie zufrieden sind Sie aktuell mit Ihrem Familienleben? (Anteil «eher» und «sehr zufrieden»)',
        max: 100,
        unit: '%',
        icon: 'heart',
        insight:
          'Rund vier von fünf Familien sind zufrieden – ein bemerkenswert stabiler Wert. Gleichzeitig erwartet die Mehrheit eine Verschlechterung der allgemeinen Lage.',
        series: [
          {
            label: 'Zufrieden (gesamt)',
            values: [76, 80, 78, 79, 80],
            color: 'coral',
          },
          {
            label: 'Sehr zufrieden',
            values: [32, 30, 28, 28, 29],
            color: 'navy',
          },
          {
            label: 'Erwartet Verschlechterung',
            values: [68, 79, 72, 76, 74],
            color: 'slate',
            note: 'Blick auf die nächsten 3 Jahre',
          },
        ],
      },
    },
    {
      id: 'finanzen',
      illo: 'umbrella',
      eyebrow: 'Finanzen und Vorsorge',
      heading: 'Geld bleibt das dominierende Thema',
      lead: 'Krankenkassenprämien und steigende Preise prägen den Familienalltag seit Jahren.',
      body: 'Die Dominanz finanzieller Themen bleibt ungebrochen. Eine Erhöhung der finanziellen Ressourcen würde das Familienleben nach Einschätzung der Befragten am stärksten verbessern – besonders bei Familien mit kleinen Kindern. Mit steigendem Haushaltseinkommen nimmt der Wunsch nach mehr Freizeit zu, während die Bedeutung zusätzlicher finanzieller Mittel abnimmt.',
      chart: {
        id: 'faktoren-chart',
        heading: 'Was würde das Familienleben am meisten verbessern?',
        question:
          'Was würde Ihr Familienleben am meisten verbessern? (Auswahl von zwei Antworten)',
        max: 60,
        unit: '%',
        icon: 'wallet',
        insight:
          'Mehr finanzielle Ressourcen stehen durchgehend an der Spitze, gefolgt vom Wunsch nach mehr gemeinsamer Zeit und weniger Stress.',
        series: [
          {
            label: 'Mehr finanzielle Ressourcen',
            values: [54, 58, 57, 58, 57],
            color: 'coral',
          },
          {
            label: 'Mehr Freizeit mit der Familie',
            values: [32, 31, 32, 31, 32],
            color: 'gold',
          },
          {
            label: 'Ein tieferes Stressniveau',
            values: [27, 29, 28, 27, 28],
            color: 'teal',
          },
        ],
      },
    },
    {
      id: 'digitales',
      illo: 'media',
      eyebrow: 'Digitale Medien und Erziehung',
      heading: 'Digitale Medien als prägender Faktor',
      lead: 'Der Umgang mit Medien und Social Media gewinnt Jahr für Jahr an Bedeutung.',
      body: 'Digitale Medien sind zu einem zentralen Bestandteil des Familienlebens geworden – mit Chancen und Herausforderungen zugleich. Die grosse Mehrheit der Eltern fühlt sich grundsätzlich sicher in der Medienerziehung, wünscht sich aber stärkere Unterstützung durch Plattformen und Schulen: besseren Kinderschutz, Handyverbote im Unterricht oder klare gesetzliche Vorgaben.',
      chart: {
        id: 'medien-chart',
        heading: 'Relevanz «Umgang mit Medien / Social Media»',
        question:
          'Anteil der Familien, für die der Umgang mit Medien und Social Media zu den am stärksten beschäftigenden Themen zählt.',
        max: 40,
        unit: '%',
        icon: 'smartphone',
        insight:
          'Von 16 % (2023) auf ein Niveau, das inzwischen mit Bildungspolitik vergleichbar ist – besonders ausgeprägt in der Deutschschweiz.',
        series: [
          {
            label: 'Umgang mit Medien / Social Media',
            values: [16, 18, 20, 22, 25],
            color: 'teal',
          },
          {
            label: 'Schulwesen und Bildungspolitik',
            values: [22, 23, 23, 23, 23],
            color: 'navy',
          },
        ],
      },
    },
  ],

  summaryHeading: 'Stabilität im Heute, Unsicherheit mit Blick auf morgen',
  summaryText: `<p>Über fünf Erhebungen hinweg zeichnet das Familienbarometer ein konsistentes Bild: Familien in der Schweiz sind mehrheitlich mit ihrem Alltag zufrieden, blicken aber skeptisch in die Zukunft. Finanzielle Themen – allen voran Krankenkassenprämien und steigende Preise – bleiben das dominierende Spannungsfeld.</p><p>Neu und deutlich sichtbar ist der kontinuierliche Bedeutungsgewinn digitaler Medien im Familienalltag. Gleichzeitig wünschen sich Eltern mehr Unterstützung – bei der Medienerziehung ebenso wie bei der Vermittlung von Finanzkompetenz an die nächste Generation.</p>`,

  quotesHeading: 'Die Initiantinnen',
  quotes: [
    {
      name: 'Eva-Maria Kaufmann Rochereau',
      title: 'Direktorin und Studienleiterin, Pro Familia Schweiz',
      text: 'Fünf Jahre Familienbarometer zeigen: Trotz hoher Zufriedenheit im eigenen Familienleben blicken viele mit Sorge in die Zukunft. Entscheidend sind verlässliche Rahmenbedingungen, die Familien nachhaltig entlasten und stärken.',
      image: '/images/eva-maria.jpg',
      email: 'info@profamilia.ch',
    },
    {
      name: 'Daniel Mutz',
      title: 'Leiter Vertrieb & Marketing und Studienverantwortlicher, Pax',
      text: 'Geldthemen bewegen Familien in der Schweiz besonders stark. Umso wichtiger ist es, dem Nachwuchs ein grundlegendes Finanzwissen zu vermitteln – dabei können zusätzliche Bildungsangebote einen wichtigen Beitrag leisten.',
      image: '/images/person2.jpg',
      email: 'marketing@pax.ch',
    },
  ],

  archiveHeading: 'Vergangene Ausgaben',
  archiveLead:
    'Alle bisherigen Erhebungen bleiben als Archiv verfügbar – mit den jeweils originalen Resultaten.',
  archive: [
    {
      year: 2026,
      label: 'Familienbarometer 2026',
      url: '/de/2026',
      blurb: 'Digitale Medien, Finanzen und Vorsorge',
    },
    {
      year: 2025,
      label: 'Familienbarometer 2025',
      url: '/de/2025',
      blurb: 'Vereinbarkeit von Familie und Beruf',
    },
    {
      year: 2024,
      label: 'Familienbarometer 2024',
      url: '/de/2024',
      blurb: 'Was Familien in der Schweiz bewegt',
    },
  ],

  meta: {
    title: 'Familienbarometer 2027 (Vorschau) – Pax & Pro Familia Schweiz',
    description:
      'Schweizer Familienbarometer 2027: fünf Jahre Trend zu Finanzen, Zufriedenheit, Zukunftserwartungen und digitalen Medien.',
  },
};

export default data;
