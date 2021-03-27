module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    filter: {
      none: 'none',
      grayscale: 'grayscale(90%)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(5px)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-filters')],
};
