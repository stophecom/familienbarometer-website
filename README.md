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

## Access protection

The site can be hidden behind one shared password until launch. Both deploy
targets read the **same `BASIC_AUTH_PASSWORD`**, so a single variable controls
access everywhere:

| Variable              | Required | Default             | Purpose                                            |
| :-------------------- | :------- | :------------------ | :------------------------------------------------- |
| `BASIC_AUTH_PASSWORD` | to gate  | _(unset)_           | Shared password. **Set it → the site is private.** |
| `BASIC_AUTH_USER`     | no       | `familienbarometer` | Username (nginx Basic Auth prompt only).           |

**Unset `BASIC_AUTH_PASSWORD` → the site is public**, so launch needs no code
change — just clear the variable and redeploy.

### Vercel (static CDN)

`middleware.ts` at the repo root is Vercel Edge Middleware: Vercel runs it before
every request (pages, images, JS alike) and shows a branded password page, with a
30-day HMAC-signed cookie after login — changing the password logs everyone out.
Set `BASIC_AUTH_PASSWORD` in the Vercel project settings for **every** environment,
then redeploy (variables only reach deployments created after they were saved).
This mirrors the gate on `pax-interactive-history`.

### nginx container (Docker image)

`docker-entrypoint.d/40-basic-auth.sh` builds an HTTP Basic Auth password file
from the env at container start (credentials never live in the image); set the
variables on the **running container**. `/healthz` stays open for probes.
