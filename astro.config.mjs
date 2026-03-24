// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://familienbarometer.ch',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'fr', 'it'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-CH',
          fr: 'fr-CH',
          it: 'it-CH',
        },
      },
    }),
  ],
  build: {
    format: 'directory',
  },
});
