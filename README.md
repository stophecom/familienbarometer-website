# Familienbarometer Website

Static multilingual website for the **Swiss Familienbarometer** (Family Barometer), an annual study on the living conditions of families in Switzerland, published by [Pax](https://www.pax.ch/) and [Pro Familia Schweiz](https://www.profamilia.ch/).

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (static site generation)
- **Languages:** TypeScript, HTML, CSS
- **i18n:** German, French, Italian — via Astro's built-in i18n routing
- **Fonts:** Merriweather (headings) + Roboto (body) via Google Fonts

## Getting Started

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build
```

## Adding Content for a New Year

1. Create content files in `src/content/{de,fr,it}/{year}.ts` (use an existing year as template)
2. Update `src/utils/content.ts`: add the year to `studyYears` and update `currentYear`
3. Add chart images to `public/images/{year}/`
4. Add PDF/ZIP downloads to `public/downloads/`

## Project Structure

```
src/
├── components/       # Astro components (Header, Footer, HeroSection, etc.)
├── content/          # Study content per language/year (TypeScript modules)
│   ├── de/           # German (2024, 2025, 2026)
│   ├── fr/           # French
│   └── it/           # Italian
├── layouts/          # BaseLayout with SEO, GTM, fonts
├── pages/            # Route pages ([lang]/, [lang]/[year], impressum, etc.)
├── styles/           # Global CSS with custom properties
└── utils/            # i18n helpers, content types
public/
├── downloads/        # PDF reports and ZIP media packages
└── images/           # SVG illustrations, chart graphics, photos
```

## Commands

| Command            | Action                                |
| :----------------- | :------------------------------------ |
| `npm run dev`      | Start dev server at `localhost:4321`  |
| `npm run build`    | Build for production to `./dist/`     |
| `npm run preview`  | Preview production build              |
| `npm run lint`     | Check formatting and linting          |
| `npm run format`   | Auto-format all files                 |
