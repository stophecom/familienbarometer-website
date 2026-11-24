# Familienbarometer Website

Static multilingual website for the **Schweizer Familienbarometer**, an annual study on the living conditions of families in Switzerland, published by [Pax](https://www.pax.ch/) and [Pro Familia Schweiz](https://www.profamilia.ch/).

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

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build for production to `./dist/`    |
| `npm run preview` | Preview production build             |
| `npm run lint`    | Check formatting and linting         |
| `npm run format`  | Auto-format all files                |

## Access protection (Basic Auth)

The site can be hidden behind one shared HTTP Basic Auth login, applied by nginx
in front of everything — pages, images and JavaScript alike. This is the nginx
equivalent of the shared-password gate on `pax-interactive-history` (which runs
on Vercel edge middleware; this project is a static nginx container, so the gate
lives in the container instead).

Set these on the **running container** (deployment/runtime env, not the build or
GitHub secrets):

| Variable              | Required | Default             | Purpose                                            |
| :-------------------- | :------- | :------------------ | :------------------------------------------------- |
| `BASIC_AUTH_PASSWORD` | to gate  | _(unset)_           | Shared password. **Set it → the site is private.** |
| `BASIC_AUTH_USER`     | no       | `familienbarometer` | Username for the login prompt.                     |

- The password file is generated from these at container start
  (`docker-entrypoint.d/40-basic-auth.sh`); credentials never live in the image.
- **No `BASIC_AUTH_PASSWORD` → the site is public**, so the same image goes live
  at launch by simply clearing the variable (no rebuild). Changing the password
  takes effect on the next container start.
- `/healthz` stays open for liveness/readiness probes.
