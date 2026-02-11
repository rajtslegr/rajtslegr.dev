import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['.astro/', 'dist/', '.vercel/', 'node_modules/', 'prisma/'],
  },

  js.configs.recommended,

  // TypeScript
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/triple-slash-reference': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },

  // React
  {
    files: ['**/*.tsx', '**/*.jsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
    },
  },

  // CommonJS config files at project root
  {
    files: ['tailwind.config.js', 'postcss.config.js', 'lint-staged.config.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // Prettier (before Astro overrides so we can disable it for .astro files)
  eslintPluginPrettier,
  eslintConfigPrettier,

  // Astro (after Prettier so the 'off' rules win)
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'prettier/prettier': 'off',
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.astro/*.js', '**/*.astro/*.ts'],
    rules: {
      'prettier/prettier': 'off',
      'no-undef': 'off',
    },
  },
);
