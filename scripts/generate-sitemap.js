/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');

const fg = require('fast-glob');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await fg([
    'src/app/**/page.tsx',
    'src/data/blog/*.mdx',
    '!src/app/api/**',
    '!src/app/not-found.tsx',
    '!src/app/error.tsx',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                // Handle blog post routes
                if (page.includes('src/data/blog/')) {
                  const fileName = page.split('/').pop().replace('.mdx', '');
                  return `
                        <url>
                            <loc>${`https://rajtslegr.dev/blog/${fileName}`}</loc>
                        </url>
                    `;
                }

                // Handle app directory routes
                const path = page
                  .replace('src/app', '')
                  .replace('/page.tsx', '')
                  .replace(/\/\[(.+)\]/, ''); // Remove dynamic route parameters

                const route = path === '' ? '' : path;
                return `
                        <url>
                            <loc>${`https://rajtslegr.dev${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
