module.exports = {
  // Run tests on related files
  '**/*.spec.ts?(x)': () => 'pnpm run test:related',
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'pnpm run type-check',
  // Run Prettier and ESLint on all JavaScript/TypeScript files
  '**/*.(ts|js|mdx)?(x)': (filenames) => [
    'pretty-quick --staged',
    'eslint --fix',
    `pnpm run lint ${filenames.join(' ')}`,
  ],
};
