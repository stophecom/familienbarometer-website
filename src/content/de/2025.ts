import type { StudyPage } from '../../utils/content';

const data: StudyPage = {
  year: 2025,
  title: 'Schweizer Familienbarometer',
  heroImage: '/images/family-image-header.svg',
  reportUrl: '/downloads/pax-familienbarometer-studie-2025.pdf',
  mediaPackageUrl: '/downloads/medienpaket-2026.zip',

  introHeading: 'Schweizer Familienbarometer 2025 - auf einen Blick',
  leadText:
    'Das Familienbarometer von Pax und Pro Familia Schweiz bildet als fundiertes Messinstrument die aktuelle Lebensrealität von Familien in der Schweiz sowie deren Wandel über die Zeit ab. Diese wird jährlich erhoben und schafft eine robuste, langfristige Datenbasis für familien- und sozialpolitische Debatten sowie den unternehmerischen Diskurs.',
  introText: `<p>Die dritte Ausgabe des Schweizer Familienbarometers weist auf eine hohe Konstanz hinsichtlich der Relevanz von finanziellen Themen für Familien in der Schweiz und der Wahrnehmung ihrer finanziellen Situation hin. Zusammen mit den für diese Ausgabe neu betrachteten Themen in den Bereichen Vorsorge und Druck auf Familien liefert das Familienbarometer erneut einen wertvollen Einblick in die Lebensrealität von Familien in der Schweiz und setzt als aktuelle Datengrundlage Impulse für familienpolitische Debatten sowie die Ausgestaltung von Rahmenbedingungen, die den Bedürfnissen von Familien Rechnung tragen.</p>`,

  chartImages: [
    '/images/2025/grafik-1-de.svg',
    '/images/2025/grafik-2-de.svg',
  ],

  summaryHeading: 'Finanzielle Themen weiter im Fokus',
  summaryText: `<p>Es sind weiterhin finanzielle Themen, allen voran die Krankenkassenprämien und die Inflation, die Familien in der Schweiz am stärksten beschäftigen. Bei einzelnen Themen zeigen sich auch regionale Unterschiede, so etwa beim Thema Schulwesen und Bildungspolitik, das Familien in der Deutschschweiz stärker beschäftigt, oder beim Thema Jugendgewalt, das vor allem Familien in der lateinischen Schweiz bewegt. Eine Entwicklung über die Zeit lässt sich beim Thema Umgang mit Medien und Social Media feststellen, welches in der Tendenz etwas wichtiger wurde. Eine Entwicklung in die gegenläufige Richtung lässt sich bei den Themen Klimawandel und Umweltschutz sowie Energieversorgung und -sicherheit beobachten, die jeweils über die Zeit an Relevanz verloren.</p>
<p>Weiterhin hoch ist die Zufriedenheit mit dem eigenen Familienleben, während die Erwartungen an die Entwicklung der allgemeinen Situation für Familien in der Schweiz über die kommenden Jahre unverändert pessimistisch ausfallen.</p>
<p>Beim Thema Vorsorge sehen die Familien den grössten Handlungsbedarf in der beruflichen Vorsorge bei der Sicherung des Rentenniveaus und der besseren Absicherung von Teilzeitbeschäftigten und Geringverdienenden. Die Reduzierung der Umverteilung von Berufstätigen zu Rentenbezügerinnen und -bezügern wird als weniger dringlich erachtet. Als wichtigstes Element ihrer Altersvorsorge erachten Familien die AHV, gefolgt von der beruflichen Vorsorge und Sparguthaben der Säule 3a. Bei einem Haushaltsbruttoeinkommen von mehr als CHF 100'000 rückt die berufliche Vorsorge vor die AHV auf Rang eins.</p>
<p>Die befragten Familien sehen ihr Familienleben häufiger durch den Druck auf die Eltern beeinträchtigt als durch den Druck, dem ihre Kinder ausgesetzt sind. Haupttreiber für den Druck auf die Eltern ist der Anspruch, Beruf und Familienleben zu vereinbaren. Die Förderung der Vereinbarkeit von Beruf und Familie ist neben Massnahmen zur finanziellen Entlastung der Familien auch ein zentraler Anspruch der Familien an die Familienpolitik.</p>
<p>Die eigene finanzielle Situation empfindet nach wie vor ein grosser Teil der Familien als angespannt. Dies spiegelt sich auch darin, dass knapp ein Drittel der Familien angibt, keine Ersparnisse bilden zu können.</p>`,

  events: [
    {
      title: 'Kind und Karriere - ein Widerspruch?',
      url: 'https://live.nzz.ch/de/events/nzz-investment-live/familie-und-arbeitsleben',
      image: '/images/nzz-kind-karriere.jpg',
    },
  ],
  eventsHeading: 'Events',

  quotes: [
    {
      name: 'Dr. Philippe Gnaegi',
      title: 'Direktor von Pro Familia Schweiz',
      text: 'Das Schweizer Familienbarometer ermittelt einmal im Jahr, welche Themen die Familien in der Schweiz am stärksten beschäftigen. Als wiederkehrende Befragung ist das Familienbarometer eine Selbsteinschätzung der Familien über ihre wahrgenommene Lebensrealität, und diese Wahrnehmung prägt letztlich ihre Einstellungen und ihr Handeln.',
      image: '/images/person1.jpg',
      email: 'info@profamilia.ch',
    },
    {
      name: 'Daniel Mutz',
      title: 'Leiter Vertrieb & Marketing bei Pax',
      text: "Je nach Einkommen gewichten Familien die drei Säulen unseres Vorsorgesystems unterschiedlich stark. Bereits ab einem Haushaltseinkommen von 100'000 Franken wird die berufliche Vorsorge zur zentralen Säule, während Wohneigentum als wichtige Komponente an Bedeutung gewinnt. Entscheidend ist, dass Familien ihre aktuelle und zukünftige Vorsorgesituation richtig einschätzen können und Möglichkeiten zur Hand haben, diese aktiv zu gestalten. Dazu braucht es neben klarer Information auch einfach verständliche und transparente Lösungen.",
      image: '/images/person2.jpg',
      email: 'marketing@pax.ch',
    },
  ],

  pastStudies: [
    {
      year: 2023,
      label: 'Schweizer Familienbarometer 2023',
      url: 'https://www.pax.ch/de/ueber-pax/berichte/familienbarometer-2023',
      external: true,
    },
    {
      year: 2024,
      label: 'Schweizer Familienbarometer 2024',
      url: '/de/2024',
    },
  ],

  meta: {
    title: 'Familienbarometer 2025 - Pax',
    description:
      'Das Schweizer Familienbarometer 2025: Finanzielle Themen weiter im Fokus. Vorsorge und Druck auf Familien.',
  },
};

export default data;
