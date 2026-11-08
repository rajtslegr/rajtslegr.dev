# [rajtslegr.dev](https://rajtslegr.dev/)

[![CI](https://github.com/rajtslegr/rajtslegr.dev/actions/workflows/CI.yml/badge.svg)](https://github.com/rajtslegr/rajtslegr.dev/actions/workflows/CI.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Personal portfolio site built with Astro and React islands. Fully static, deployed on Cloudflare Workers.

## Tech Stack

- **Framework**: [Astro 7](https://astro.build/) with [React 19](https://react.dev/) islands
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: CSS (scroll-reveal entrance animations, `prefers-reduced-motion` aware)
- **Fonts**: Self-hosted Inter via [Fontsource](https://fontsource.org/)
- **Form Handling**: [Formspree](https://formspree.io/)
- **Theme**: Custom `useTheme` hook (localStorage-based with system preference detection)
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/) static assets (`wrangler.jsonc`, serves `./dist`)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Project Structure

```
src/
├── components/      # React components hydrated as islands (client:load)
├── data/            # Timeline content
├── hooks/           # Custom React hooks (useTheme, useOnTop, useIsMounted)
├── layouts/         # Layout.astro — main HTML shell with meta, OG tags, theme script
├── pages/           # Astro pages (.astro): index, contact, 404
├── styles/          # Global styles
└── types/           # TypeScript type definitions
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

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Available Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `pnpm dev`        | Start Astro dev server                       |
| `pnpm build`      | Build site for production                    |
| `pnpm preview`    | Preview the production build locally         |
| `pnpm cf:deploy`  | Build and deploy to Cloudflare Workers       |
| `pnpm type-check` | Run Astro check and TypeScript type checking |
| `pnpm lint`       | Run ESLint                                   |
| `pnpm lint:fix`   | Auto-fix linting issues                      |

## Deployment

Every route is prerendered into `dist/` and served as static assets by Cloudflare Workers.
Cloudflare's Workers Builds pipeline runs `pnpm run build` then `npx wrangler deploy`.

```bash
pnpm build             # static output in dist/
pnpm wrangler dev      # local preview against the real Workers runtime
pnpm cf:deploy
```

No environment variables are required.

## Features

- Static site generation with Astro islands architecture
- Dark/light mode with system preference detection
- Responsive design for all device sizes
- Contact form via Formspree
- SEO optimized with sitemap generation

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**Petr Rajtslegr** -- [rajtslegr.dev](https://rajtslegr.dev)
