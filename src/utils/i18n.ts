export const languages = {
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalizedUrl(path: string, lang: Lang): string {
  return `/${lang}${path}`;
}

/** Common UI translations used in layout/components */
export const ui = {
  de: {
    'nav.language': 'Sprache',
    'nav.currentStudy': 'Aktuelle Studie',
    'nav.summary': 'Zusammenfassung',
    'nav.responsibles': 'Verantwortliche',
    'nav.pastStudies': 'Vergangene Studien',
    'nav.archive': 'Archiv',
    'nav.events': 'Events',
    'footer.impressum': 'Impressum',
    'footer.initiators': 'Initiantinnen',
    'footer.collaboration': 'In Zusammenarbeit mit',
    'footer.privacy': 'Datenschutz',
    'footer.legal': 'Rechtliche Hinweise',
    'header.report': 'Bericht',
    'header.mediaPackage': 'Medienpaket',
    'skip.content': 'Zum Inhalt springen',
    'aria.menu': 'Menü',
    'aria.closeMenu': 'Menü schliessen',
    'aria.mainNav': 'Hauptnavigation',
    'aria.home': 'Zur Startseite',
    'aria.prevSlide': 'Vorherige Folie',
    'aria.nextSlide': 'Nächste Folie',
    'aria.slide': 'Folie',
    'aria.shareLinkedIn': 'Auf LinkedIn teilen',
    'aria.shareX': 'Auf X teilen',
    'aria.shareEmail': 'Per E-Mail teilen',
    'alt.family': 'Illustration einer Familie',
    'alt.chart': 'Grafik',
  },
  fr: {
    'nav.language': 'Langue',
    'nav.currentStudy': 'Étude actuelle',
    'nav.summary': 'Résumé',
    'nav.responsibles': 'Responsables',
    'nav.pastStudies': 'Études passées',
    'nav.archive': 'Archives',
    'nav.events': 'Événements',
    'footer.impressum': 'Mentions légales',
    'footer.initiators': 'Initiatrices',
    'footer.collaboration': 'En collaboration avec',
    'footer.privacy': 'Protection des données',
    'footer.legal': 'Mentions légales',
    'header.report': 'Rapport',
    'header.mediaPackage': 'Dossier de presse',
    'skip.content': 'Aller au contenu',
    'aria.menu': 'Menu',
    'aria.closeMenu': 'Fermer le menu',
    'aria.mainNav': 'Navigation principale',
    'aria.home': "Vers la page d'accueil",
    'aria.prevSlide': 'Diapositive précédente',
    'aria.nextSlide': 'Diapositive suivante',
    'aria.slide': 'Diapositive',
    'aria.shareLinkedIn': 'Partager sur LinkedIn',
    'aria.shareX': 'Partager sur X',
    'aria.shareEmail': 'Partager par e-mail',
    'alt.family': "Illustration d'une famille",
    'alt.chart': 'Graphique',
  },
  it: {
    'nav.language': 'Lingua',
    'nav.currentStudy': 'Studio attuale',
    'nav.summary': 'Riassunto',
    'nav.responsibles': 'Responsabili',
    'nav.pastStudies': 'Studi precedenti',
    'nav.archive': 'Archivio',
    'nav.events': 'Eventi',
    'footer.impressum': 'Colophon',
    'footer.initiators': 'Promotrici',
    'footer.collaboration': 'In collaborazione con',
    'footer.privacy': 'Protezione dei dati',
    'footer.legal': 'Avvertenze legali',
    'header.report': 'Rapporto',
    'header.mediaPackage': 'Cartella stampa',
    'skip.content': 'Vai al contenuto',
    'aria.menu': 'Menu',
    'aria.closeMenu': 'Chiudi menu',
    'aria.mainNav': 'Navigazione principale',
    'aria.home': 'Alla pagina iniziale',
    'aria.prevSlide': 'Diapositiva precedente',
    'aria.nextSlide': 'Diapositiva successiva',
    'aria.slide': 'Diapositiva',
    'aria.shareLinkedIn': 'Condividi su LinkedIn',
    'aria.shareX': 'Condividi su X',
    'aria.shareEmail': 'Condividi via e-mail',
    'alt.family': 'Illustrazione di una famiglia',
    'alt.chart': 'Grafico',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['de']): string {
  return ui[lang][key] ?? ui.de[key] ?? key;
}
