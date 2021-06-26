module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'next', // Next rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        'react/react-in-jsx-scope': 0,
        'react/display-name': 0,
        'react/prop-types': 0,
        'jsx-a11y/anchor-is-valid': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            argsIgnorePattern: '^_',
          },
        ],
        'no-console': [
          2,
          {
            allow: ['warn', 'error'],
          },
        ],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
    {
      env: { jest: true },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
    },
  ],
};
