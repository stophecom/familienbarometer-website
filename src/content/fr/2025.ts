import type { StudyPage } from '../../utils/content';

const data: StudyPage = {
  year: 2025,
  title: 'Baromètre suisse des familles',
  heroImage: '/images/family-image-header.svg',
  reportUrl: '/downloads/pax-familienbarometer-studie-2025.pdf',
  mediaPackageUrl: '/downloads/medienpaket-2026.zip',

  introHeading: "Baromètre suisse de la famille 2024 – en un coup d\u2019œil",
  leadText:
    "Le Baromètre des familles de Pax et Pro Familia Suisse a été lancé en 2023. En tant qu'instrument de mesure, il reflète la réalité de vie actuelle des familles en Suisse ainsi que son évolution au fil du temps. Le Baromètre des familles est établi chaque année et crée une base de données robuste et à long terme pour les débats de politique familiale et sociale ainsi que pour les entreprises.",
  introText: `<p>Cette troisième édition du Baromètre suisse des familles met en évidence la persistance des préoccupations financières et de la manière dont les familles perçoivent leur propre situation économique en Suisse. En intégrant de nouvelles questions sur la prévoyance et la pression sur les familles, le baromètre offre un aperçu précieux de leur réalité quotidienne et fournit une base de données pertinente pour alimenter le débat politique et adapter les conditions-cadres aux besoins des familles.</p>`,

  chartImages: [
    '/images/2025/grafik-1-fr.svg',
    '/images/2025/grafik-2-fr.svg',
  ],

  summaryHeading: 'Les questions financières restent au centre des préoccupations',
  summaryText: `<p>Les préoccupations financières restent au premier plan des sujets de préoccupation des familles en Suisse, avec en tête les primes d'assurance maladie et l'inflation. Des différences régionales apparaissent sur certains sujets\u00a0: le système scolaire et la politique éducative préoccupent davantage les familles de Suisse alémanique, tandis que la violence juvénile est une source d'inquiétude plus marquée en Suisse latine. Le thème de l'usage des médias et des réseaux sociaux a gagné en importance au fil du temps, tandis que l'intérêt pour les questions climatiques, environnementales et énergétiques tend à diminuer.</p>
<p>La satisfaction des familles quant à leur propre vie familiale reste élevée, mais leurs perspectives sur l'évolution générale de leur situation en Suisse demeurent pessimistes pour les années à venir.</p>
<p>En matière de prévoyance, les familles estiment qu'il est le plus urgent d'agir dans le domaine de la prévoyance professionnelle afin de garantir le niveau des rentes et d'améliorer la protection des travailleurs à temps partiel et des bas salaires. La réduction de la redistribution des actifs des travailleurs vers les bénéficiaires de rentes est jugée moins urgente. L'AVS demeure le pilier central de la prévoyance vieillesse pour les familles, suivie par la prévoyance professionnelle et les économies du pilier 3a. Cependant, pour les ménages dont le revenu brut dépasse 100'000 CHF, la prévoyance professionnelle prend la première place, devant l'AVS.</p>
<p>Les familles interrogées considèrent que leur vie familiale est plus souvent affectée par la pression ressentie par les parents que par celle subie par leurs enfants. Le principal facteur de stress identifié est la conciliation entre vie professionnelle et vie familiale. L'amélioration de cette conciliation, en complément des mesures de soutien financier, fait partie des principales attentes des familles vis-à-vis des politiques familiales.</p>
<p>Par ailleurs, une part significative des familles continue de percevoir sa situation financière comme tendue. Près d'un tiers d'entre elles indique ainsi ne pas être en mesure d'épargner.</p>`,

  events: [
    {
      title: 'Enfant et carrière - une contradiction ?',
      url: 'https://live.nzz.ch/de/events/nzz-investment-live/familie-und-arbeitsleben',
      image: '/images/nzz-kind-karriere.jpg',
    },
  ],
  eventsHeading: 'Événements',

  quotes: [
    {
      name: 'Philippe Gnaegi',
      title: 'directeur de Pro Familia Suisse',
      text: "Le Baromètre suisse des familles détermine chaque année quels sont les sujets qui préoccupent le plus les familles en Suisse. En tant qu'enquête récurrente, le Baromètre des familles constitue une auto-évaluation des familles sur leur réalité vécue. Cette perception influence leurs attitudes et leurs actions.",
      image: '/images/person1.jpg',
      email: 'philippe.gnaegi@profamilia.ch',
    },
    {
      name: 'Daniel Mutz',
      title: 'directeur Distribution & Marketing chez Pax',
      text: "Je nach Einkommen gewichten Familien die drei Säulen unseres Vorsorgesystems unterschiedlich stark. Bereits ab einem Haushaltseinkommen von 100'000 Franken wird die berufliche Vorsorge zur zentralen Säule, während Wohneigentum als wichtige Komponente an Bedeutung gewinnt. Entscheidend ist, dass Familien ihre aktuelle und zukünftige Vorsorgesituation richtig einschätzen können und Möglichkeiten zur Hand haben, diese aktiv zu gestalten. Dazu braucht es neben klarer Information auch einfach verständliche und transparente Lösungen.",
      image: '/images/person2.jpg',
      email: 'marketing@pax.ch',
    },
  ],

  pastStudies: [
    {
      year: 2023,
      label: 'Baromètre suisse des familles 2023',
      url: 'https://www.pax.ch/fr/concernant-pax/rapports/barometre-suisse-des-familles-2023',
      external: true,
    },
    {
      year: 2024,
      label: 'Baromètre suisse des familles 2024',
      url: '/fr/2024',
    },
  ],

  meta: {
    title: 'Baromètre des familles 2025 - Pax',
    description:
      "Le Baromètre suisse des familles 2025\u00a0: les questions financières restent au centre des préoccupations.",
  },
};

export default data;
