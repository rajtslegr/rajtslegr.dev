# [rajtslegr.dev](https://rajtslegr.dev/)

![Vercel Deployment Status](https://therealsujitk-vercel-badge.vercel.app/?app=rajtslegr-com-git-main-rajcep)
[![CI](https://github.com/rajtslegr/rajtslegr.dev/actions/workflows/CI.yml/badge.svg)](https://github.com/rajtslegr/rajtslegr.dev/actions/workflows/CI.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Personal portfolio website & blog built with modern web technologies.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Prisma](https://www.prisma.io/) with PostgreSQL
- **Content**: MDX for blog posts
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [Formspree](https://formspree.io/)
- **Theme Switching**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com/)
- **Analytics**: Vercel Analytics & Speed Insights

## 📦 Project Structure

```
.
├── src/
│   ├── components/   # React components
│   ├── data/         # MDX blog posts and static data
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility libraries
│   ├── pages/        # Next.js pages
│   ├── styles/       # Global styles and Tailwind config
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Helper functions
├── prisma/          # Database schema and migrations
├── public/          # Static assets
└── scripts/         # Build and utility scripts
```

## 🔧 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (v10 or newer)
- [PostgreSQL](https://www.postgresql.org/) (for development)

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

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm type-check` - Run TypeScript checks
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix linting issues
- `pnpm prisma` - Run Prisma commands

## 📋 Features

- Responsive design for all device sizes
- Dark/light mode with system preference detection
- Blog with MDX content
- Performance optimized with Vercel analytics
- Contact form integration
- SEO optimized

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

- **Petr Rajtslegr** - [rajtslegr.dev](https://rajtslegr.dev)
