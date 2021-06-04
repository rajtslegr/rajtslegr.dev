module.exports = {
  // Run tests on related files
  '**/*.spec.ts?(x)': () => 'pnpm run test:related',
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'pnpm run type-check',
  // Run ESLint on all JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `pnpm run lint ${filenames.join(' ')}`,
};
