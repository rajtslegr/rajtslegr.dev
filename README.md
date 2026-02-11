# [rajtslegr.dev](https://rajtslegr.dev/)

![Vercel Deployment Status](https://therealsujitk-vercel-badge.vercel.app/?app=rajtslegr-com-git-main-rajcep)
[![CI](https://github.com/rajtslegr/rajtslegr.dev/actions/workflows/CI.yml/badge.svg)](https://github.com/rajtslegr/rajtslegr.dev/actions/workflows/CI.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Personal portfolio website and blog built with Astro and React islands. Statically generated and deployed on Vercel.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build/) with [React 18](https://react.dev/) islands
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with PostCSS
- **Content**: MDX blog posts with [rehype-pretty-code](https://github.com/rehype-pretty/rehype-pretty-code) syntax highlighting
- **Animations**: [Framer Motion 11](https://www.framer.com/motion/)
- **Form Handling**: [Formspree](https://formspree.io/)
- **Theme**: Custom `useTheme` hook (localStorage-based with system preference detection)
- **Deployment**: [Vercel](https://vercel.com/) (static output)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Project Structure

```
src/
├── components/      # React components hydrated as islands (client:load / client:visible)
├── data/
│   └── blog/        # MDX blog post files
├── hooks/           # Custom React hooks (useTheme, useOnTop, useScrollBlock)
├── layouts/         # Layout.astro — main HTML shell with meta, OG tags, theme script
├── lib/             # Data fetching (GitHub, Strava, iRacing, Last.fm, photos, posts)
├── pages/           # Astro pages (.astro) that compose React components
├── styles/          # Global styles and code highlight theme
├── types/           # TypeScript type definitions
└── utils/           # Helper functions
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v24 (see `.nvmrc`)
- [pnpm](https://pnpm.io/) v10+

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rajtslegr/rajtslegr.dev.git
   cd rajtslegr.dev
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file from the example:

   ```bash
   cp .env.example .env
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `pnpm dev`        | Start Astro dev server                       |
| `pnpm build`      | Build static site for production             |
| `pnpm preview`    | Preview the production build locally         |
| `pnpm type-check` | Run Astro check and TypeScript type checking |
| `pnpm lint`       | Run ESLint                                   |
| `pnpm lint:fix`   | Auto-fix linting issues                      |

## Dashboard Integrations

The `/dashboard` page aggregates data from several external services:

| Integration | Fetch Strategy            | Env Variables                                                      |
| ----------- | ------------------------- | ------------------------------------------------------------------ |
| **Last.fm** | Client-side (useSWR)      | `PUBLIC_LASTFM_API_KEY`                                            |
| **Strava**  | Build-time                | `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_REFRESH_TOKEN` |
| **iRacing** | Build-time (Garage61 API) | `GARAGE61_API_KEY`                                                 |
| **GitHub**  | Build-time                | `GITHUB_TOKEN` (optional)                                          |
| **Photos**  | Build-time                | --                                                                 |

## Features

- Static site generation with Astro islands architecture
- Dark/light mode with system preference detection
- Blog with MDX content and syntax-highlighted code blocks
- Dashboard with live Last.fm data and build-time Strava, iRacing, and GitHub stats
- Responsive design for all device sizes
- Contact form via Formspree
- SEO optimized with sitemap generation

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**Petr Rajtslegr** -- [rajtslegr.dev](https://rajtslegr.dev)
