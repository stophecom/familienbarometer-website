import type { StudyPage } from '../../utils/content';

const data: StudyPage = {
  year: 2024,
  title: 'Barometro svizzero delle famiglie',
  heroImage: '/images/family-image-header.svg',
  reportUrl: '/downloads/pax-familienbarometer-studie-2024.pdf',

  introHeading: 'Barometro svizzero delle famiglie 2024 – in sintesi',
  leadText:
    'Il barometro familiare di Pax e Pro Familia Svizzera è uno strumento di misurazione affidabile che mostra la realtà attuale della vita delle famiglie in Svizzera e il loro cambiamento nel tempo. Viene rilevato annualmente e costituisce una base di dati solida e duratura per i dibattiti di politica familiare e sociale, nonché per le discussioni in ambito imprenditoriale.',
  introText: `<p>Con il barometro svizzero delle famiglie 2024, Pax e Pro Familia Svizzera pubblicano per la seconda volta i risultati del rapporto di studio. I risultati attuali consentono per la prima volta di effettuare un confronto con lo scorso anno e quindi di tracciare un'evoluzione nel tempo.</p>
<p>Alcuni risultati del sondaggio di quest'anno sono, ad esempio, ancora più evidenti e rivelano come la difficile situazione finanziaria delle famiglie abbia un impatto crescente su diversi ambiti della vita familiare.</p>`,

  chartImages: [
    '/images/2024/grafik-1-it.svg',
    '/images/2024/grafik-2-it.svg',
  ],

  summaryHeading:
    'La situazione finanziaria delle famiglie in Svizzera si aggrava',
  summaryText: `<p>In molti ambiti esistono differenze tra la Svizzera tedesca e la Svizzera romanda e il Ticino. La situazione finanziaria risulta spesso più tesa soprattutto per le famiglie della Svizzera occidentale e del Ticino. Inoltre, l'inasprimento del contesto economico non colpisce solo i redditi più bassi, ma anche il ceto medio.</p>
<p>Rispetto a un anno fa, la vita delle famiglie in Svizzera è ancora più influenzata dalle questioni finanziarie. I premi delle casse malati e l'aumento generale dei costi continuano a essere in primo piano, mentre temi come la salute o il cambiamento climatico e la protezione dell'ambiente tendono a perdere rilevanza. Per le famiglie, il tema dell'approvvigionamento e della sicurezza energetici è chiaramente diventato secondario.</p>
<p>L'accresciuta rilevanza delle questioni finanziarie si manifesta anche nelle richieste di politica familiare, che mirano in modo ancora più deciso a un alleggerimento monetario per le famiglie. Il miglioramento della situazione finanziaria costituisce evidentemente la leva più importante per la promozione della vita familiare. La percentuale di famiglie che sopravvivono a stento con il proprio reddito o non ci riescono affatto è aumentata rispetto all'anno precedente e oggi rappresenta più della metà. Allo stesso tempo, le opportunità per le famiglie di accumulare risparmi sono diminuite.</p>
<p>Nonostante le difficoltà finanziarie, le famiglie intervistate sono leggermente più soddisfatte della propria vita familiare rispetto all'anno precedente. Al contrario, le loro aspettative circa la situazione delle famiglie svizzere nel prossimo futuro sono notevolmente peggiorate.</p>`,

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
      text: "La tesa situazione finanziaria colpisce sempre più diversi ambiti della vita. Se le famiglie devono aumentare il carico di lavoro, le sfide legate alla cura dei bambini aumentano. La conciliabilità tra lavoro e famiglia diventa più difficile.",
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
  ],

  meta: {
    title: 'Barometro delle famiglie 2024 - Pax',
    description:
      'Il Barometro svizzero delle famiglie 2024: la situazione finanziaria delle famiglie in Svizzera si aggrava.',
  },
};

export default data;
