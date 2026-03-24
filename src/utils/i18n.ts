export const languages = {
  de: 'Deutsch',
  fr: 'Französisch',
  it: 'Italienisch',
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
  },
  fr: {
    'nav.language': 'Langue',
    'nav.currentStudy': 'Étude actuelle',
    'nav.summary': 'Résumé',
    'nav.responsibles': 'Responsables',
    'nav.pastStudies': 'Études passées',
    'nav.events': 'Events',
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
  },
  it: {
    'nav.language': 'Lingua',
    'nav.currentStudy': 'Studio attuale',
    'nav.summary': 'Riassunto',
    'nav.responsibles': 'Responsabili',
    'nav.pastStudies': 'Studi precedenti',
    'nav.events': 'Events',
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
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['de']): string {
  return ui[lang][key] ?? ui.de[key] ?? key;
}
