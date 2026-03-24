# Familienbarometer Website

## Project Overview
Static multilingual website for the Swiss Familienbarometer (Family Barometer) study, published annually by Pax and Pro Familia Schweiz. Built with Astro.

## Tech Stack
- **SSG:** Astro v6 (static output)
- **Languages:** TypeScript, HTML, CSS
- **i18n:** 3 languages (DE, FR, IT) via Astro's built-in i18n with prefix routing
- **Styling:** Plain CSS with custom properties (design tokens)
- **Fonts:** Merriweather (headings), Roboto (body) via Google Fonts

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Check formatting and linting
- `npm run format` — Auto-format all files

## Project Structure
```
src/
├── content/          # Study data per language/year (TypeScript modules)
│   ├── de/           # German content (2024.ts, 2025.ts, 2026.ts)
│   ├── fr/           # French content
│   └── it/           # Italian content
├── components/       # Astro components (Header, Footer, HeroSection, etc.)
├── layouts/          # BaseLayout with SEO, GTM, fonts
├── pages/            # Route pages
│   ├── index.astro   # Redirects to /de/
│   └── [lang]/       # Dynamic lang routes (index, [year], impressum)
├── styles/           # Global CSS
└── utils/            # i18n helpers, content types
public/
├── images/           # All images (SVGs, PNGs, JPGs)
│   ├── slider/       # 2026 slider images
│   ├── 2025/         # 2025-specific charts
│   └── 2024/         # 2024-specific charts
└── downloads/        # PDF reports and ZIP media packages
```

## Adding Content for a New Year
1. Create `src/content/{de,fr,it}/{year}.ts` using an existing year as template
2. Update `src/utils/content.ts`: add the year to `studyYears` and update `currentYear`
3. Add chart images to `public/images/{year}/`
4. Add PDF/ZIP downloads to `public/downloads/`
5. Update past studies links in the previous year's content files

## Key Architecture Decisions
- Content is stored as TypeScript modules (not Markdown) for structured data with type safety
- Charts and slider content are images (SVG/PNG), not code-generated
- No client-side JS frameworks; only vanilla JS for dropdown/slider interactions
- Google Tag Manager ID is configured in `src/layouts/BaseLayout.astro`

## Code Style
- Use Prettier for formatting (configured in `.prettierrc`)
- Use ESLint with astro plugin for linting
- Follow existing component patterns when adding new components
- Keep CSS in component `<style>` blocks or `src/styles/global.css`
- No external CSS frameworks

## SEO
- Hreflang tags for all 3 languages + x-default
- Canonical URLs per page
- Open Graph and Twitter Card meta tags
- JSON-LD structured data (WebSite schema)
- Auto-generated sitemap via @astrojs/sitemap
