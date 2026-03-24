import type { StudyPage } from '../../utils/content';

const data: StudyPage = {
  year: 2025,
  title: 'Barometro svizzero delle famiglie',
  heroImage: '/images/family-image-header.svg',
  reportUrl: '/downloads/pax-familienbarometer-studie-2025.pdf',
  mediaPackageUrl: '/downloads/medienpaket-2026.zip',

  introHeading: 'Barometro svizzero delle famiglie 2024 – in sintesi',
  leadText:
    'Il barometro familiare di Pax e Pro Familia Svizzera è uno strumento di misurazione affidabile che mostra la realtà attuale della vita delle famiglie in Svizzera e il loro cambiamento nel tempo. Viene rilevato annualmente e costituisce una base di dati solida e duratura per i dibattiti di politica familiare e sociale, nonché per le discussioni in ambito imprenditoriale.',
  introText: `<p>La terza edizione del barometro svizzero delle famiglie conferma la rilevanza costante delle questioni finanziarie per le famiglie svizzere e la percezione della loro situazione finanziaria. Insieme ai nuovi temi esaminati in questa edizione, relativi alla previdenza e alla pressione sulle famiglie, il barometro delle famiglie fornisce ancora una volta una preziosa visione della realtà delle famiglie in Svizzera e, come base di dati aggiornati, stimola il dibattito sulla politica familiare e la definizione di condizioni quadro che tengano conto delle esigenze delle famiglie.</p>`,

  chartImages: [
    '/images/2025/grafik-1-it.svg',
    '/images/2025/grafik-2-it.svg',
  ],

  summaryHeading: "Continua l'attenzione ai temi finanziari",
  summaryText: `<p>In molti ambiti esistono differenze tra la Svizzera tedesca e la Svizzera romanda e il Ticino. La situazione finanziaria risulta spesso più tesa soprattutto per le famiglie della Svizzera occidentale e del Ticino. Inoltre, l'inasprimento del contesto economico non colpisce solo i redditi più bassi, ma anche il ceto medio.</p>`,

  events: [
    {
      title: 'Bambino e carriera: una contraddizione?',
      url: 'https://live.nzz.ch/de/events/nzz-investment-live/familie-und-arbeitsleben',
      image: '/images/nzz-kind-karriere.jpg',
    },
  ],
  eventsHeading: 'Eventi',

  quotes: [
    {
      name: 'Philippe Gnaegi',
      title: 'direttore Pro Familia Svizzera',
      text: "Il barometro svizzero delle famiglie viene utilizzato una volta all'anno per determinare quali sono i temi che preoccupano maggiormente le famiglie in Svizzera. Essendo un sondaggio ricorrente, rappresenta un'autovalutazione delle famiglie sulla loro percezione della realtà della vita, e questa percezione è ciò che, in ultima analisi, influenza i loro atteggiamenti e le loro azioni.",
      image: '/images/person1.jpg',
      email: 'philippe.gnaegi@profamilia.ch',
    },
    {
      name: 'Daniel Mutz',
      title: 'responsabile Vendite & Marketing Pax',
      text: "Un'emergenza non dovrebbe comportare ulteriori pressioni finanziarie sulle famiglie. Ecco perché assicurazione e previdenza non dovrebbero essere trascurate, anche in situazioni di tensione finanziaria. Sono necessarie soluzioni semplici e comprensibili affinché le famiglie siano adeguatamente protette nonostante le sfide economiche.",
      image: '/images/person2.jpg',
      email: 'marketing@pax.ch',
    },
  ],

  pastStudies: [
    {
      year: 2023,
      label: 'Barometro svizzero delle famiglie 2023',
      url: 'https://www.pax.ch/it/su-pax/rapporti/barometro-svizzero-delle-famiglie-2023',
      external: true,
    },
    {
      year: 2024,
      label: 'Barometro svizzero delle famiglie 2024',
      url: '/it/2024',
    },
  ],

  meta: {
    title: 'Barometro delle famiglie 2025 - Pax',
    description:
      "Il Barometro svizzero delle famiglie 2025: continua l'attenzione ai temi finanziari.",
  },
};

export default data;
