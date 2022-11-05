/** @type {import('tailwindcss').Config} */
const defaultFonts = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '390px', // min-width
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultFonts.fontFamily.sans],
      },
      backgroundImage: {
        'main-hero-bg': 'url("/img/head-prod2.webp")',
      },
      keyframes: {
        'button-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'button-pulse': 'button-pulse 1200ms cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  daisyui: {
    themes: ['autumn'],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
