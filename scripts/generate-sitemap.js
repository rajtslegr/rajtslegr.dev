/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');

const fg = require('fast-glob');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await fg([
    'src/pages/*.tsx',
    'src/data/**/*.mdx',
    '!src/data/*.mdx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/404.tsx',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages', '')
                  .replace('data', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                  .replace('src/', '');
                const route = path === '/index' ? '' : path;
                return `
                        <url>
                            <loc>${`https://rajtslegr.dev${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
