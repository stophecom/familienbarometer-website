import type { StudyPage } from '../../utils/content';

const data: StudyPage = {
  year: 2024,
  title: 'Schweizer Familienbarometer',
  heroImage: '/images/family-image-header.svg',
  reportUrl: '/downloads/pax-familienbarometer-studie-2024.pdf',

  introHeading: 'Schweizer Familienbarometer 2024 - auf einen Blick',
  leadText:
    'Das Familienbarometer von Pax und Pro Familia Schweiz bildet als fundiertes Messinstrument die aktuelle Lebensrealität von Familien in der Schweiz sowie deren Wandel über die Zeit ab. Diese wird jährlich erhoben und schafft eine robuste, langfristige Datenbasis für familien- und sozialpolitische Debatten sowie den unternehmerischen Diskurs.',
  introText: `<p>Mit dem Schweizer Familienbarometer 2024 veröffentlichen Pax und Pro Familia Schweiz zum zweiten Mal die Ergebnisse des Studienberichts. Die aktuellen Ergebnisse ermöglichen erstmals einen Vorjahresvergleich und damit das Aufzeigen einer zeitlichen Entwicklung.</p>
<p>So sind einige Befunde in der diesjährigen Befragung noch stärker ausgeprägt und es zeigt sich, dass die angespannte finanzielle Situation der Familien zunehmend Auswirkungen auf verschiedene Bereiche des Familienlebens und das Verhalten hat.</p>`,

  chartImages: [
    '/images/2024/grafik-1-de.svg',
    '/images/2024/grafik-2-de.svg',
  ],

  summaryHeading:
    'Die finanzielle Situation von Familien in der Schweiz spitzt sich zu',
  summaryText: `<p>In vielen Themen zeigen sich Unterschiede zwischen der Deutschschweiz und der Romandie sowie dem Tessin. Besonders die finanzielle Situation ist bei Familien in der Westschweiz und im Tessin häufig angespannter. Zudem sind nicht nur tiefere Einkommen, sondern auch die Mittelschicht von einer Verschärfung des ökonomischen Umfelds betroffen.</p>
<p>Die Lebenswelt der Familien in der Schweiz ist noch stärker als vor einem Jahr von finanziellen Themen geprägt. Krankenkassenprämien und allgemein steigende Kosten rücken weiter in den Vordergrund, während Themen wie Gesundheit oder Klimawandel und Umweltschutz tendenziell an Relevanz einbüssen. Für Familien deutlich in den Hintergrund gerückt ist das Thema Energieversorgung und -sicherheit.</p>
<p>Die gestiegene Relevanz finanzieller Themen macht sich auch bei den Forderungen an die Familienpolitik bemerkbar, die noch stärker auf eine monetäre Entlastung von Familien abzielen soll. In einer Verbesserung der finanziellen Situation wird klar der wichtigste Hebel zur Förderung des Familienlebens gesehen. Der Anteil von Familien, die mit ihrem Einkommen nur knapp oder gar nicht auskommen, hat gegenüber dem Vorjahr zugenommen und beträgt nun mehr als die Hälfte. Gleichzeitig haben die Möglichkeiten für Familien, Ersparnisse zu bilden, abgenommen.</p>
<p>Trotz der finanziellen Herausforderung sind die befragten Familien mit ihrem eigenen Familienleben insgesamt leicht zufriedener als im Vorjahr. Im Gegensatz dazu haben sich ihre Erwartungen zur Situation der Familien in der Schweiz in naher Zukunft merklich eingetrübt.</p>`,

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
      text: 'Die zweite Ausgabe des Familienbarometers zeigt, wie die angespannte finanzielle Situation der Familien zunehmend Auswirkungen auf verschiedene Lebensbereiche hat. So führt eine Erhöhung des Arbeitspensums zwecks Einkommenssicherung zu Herausforderungen bei der Kinderbetreuung und der Pflege von Angehörigen. Die Vereinbarkeit von Beruf und Familie wird dadurch erschwert. Finanzielle Faktoren beeinflussen auch die Familienplanung, indem die Kosten viele Familien davor abhalten, weitere Kinder zu haben.',
      image: '/images/person1.jpg',
      email: 'info@profamilia.ch',
    },
    {
      name: 'Daniel Mutz',
      title: 'Leiter Vertrieb & Marketing bei Pax',
      text: 'Trotz der finanziell angespannten Situation vieler Familien darf die Absicherung und Vorsorge nicht auf der Strecke bleiben. Die Resultate zeigen, dass die eigene Vorsorgesituation zum Teil falsch eingeschätzt wird oder gar nicht erst beurteilt werden kann. Hier gilt es mit einfachen verständlichen Lösungen gegenzusteuern, damit alle Familienmitglieder trotz den ökonomischen Herausforderungen ausreichend abgesichert sind.',
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
  ],

  meta: {
    title: 'Familienbarometer 2024 - Pax',
    description:
      'Das Schweizer Familienbarometer 2024: Die finanzielle Situation von Familien in der Schweiz spitzt sich zu.',
  },
};

export default data;
