/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

const { fontFamily, spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.gray.500'),
              '&:hover': {
                color: theme('colors.gray.700'),
              },
              code: { color: theme('colors.gray.400') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: { color: theme('colors.gray.500') },
            pre: {
              padding: 0,
              backgroundColor: 'transparent',
              overflowX: 'auto',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.gray.400'),
              '&:hover': {
                color: theme('colors.gray.200'),
              },
              code: { color: theme('colors.gray.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            pre: {
              padding: 0,
              backgroundColor: 'transparent',
            },
            hr: { borderColor: theme('colors.gray.800') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.800'),
              },
            },
          },
        },
      }),
      backgroundColor: {
        dark: '#000000',
        card: '#101010',
        'card-light': '#F5F5F5',
      },
      colors: {
        accent: {
          light: '#666666',
          DEFAULT: '#444444',
          dark: '#333333',
        },
      },
      spacing: {
        '1/1': '100%',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
