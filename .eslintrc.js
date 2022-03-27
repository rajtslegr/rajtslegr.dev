module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'tailwindcss'],
      extends: [
        'airbnb-typescript',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'next',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react', 'next'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'class-methods-use-this': 'off',
        'no-console': [
          'error',
          {
            allow: ['warn', 'error'],
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-use-before-define': 'off',
        'tailwindcss/no-custom-classname': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['**/*.mdx'],
      extends: ['plugin:mdx/recommended'],
      settings: { 'mdx/code-blocks': false },
    },
  ],
};
