import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import rehypePrettyCode from 'rehype-pretty-code';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://rajtslegr.dev',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  adapter: vercel(),
  markdown: {
    syntaxHighlight: false,
    processor: unified({
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: { dark: 'one-dark-pro', light: 'github-light' },
          },
        ],
      ],
    }),
  },
});
