module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': (filenames) => [
    'pnpm run type-check',
    `pnpm run test:related ${filenames.join(' ')}`,
  ],
  // Run Prettier and ESLint on all JavaScript/TypeScript files
  '**/*.(ts|js|mdx)?(x)': (filenames) => [
    'pretty-quick --staged',
    'eslint --fix',
    `pnpm run lint ${filenames.join(' ')}`,
  ],
};
