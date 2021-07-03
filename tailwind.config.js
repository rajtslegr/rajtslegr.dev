module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        dark: '#111827',
        card: '#1F2937',
      },
      zIndex: {
        '-1': '-1',
      },
      spacing: {
        '1/1': '100%',
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
