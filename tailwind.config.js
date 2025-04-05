/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx,md}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#081448',
        secondary: '#282157',
        accent: '#1a2c80',
        mystic: '#4a478a',
        deepSky: '#00498e',
        gold: '#fdbe01',
        cream: '#f5f5eb',
        dark: '#0a0a0a',
      },
      //// The radial background is explicitly applied to the visible section, not hidden under layers.
       backgroundImage: {
         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
       },
      fontFamily: {
        heading: ['"Inter"', ...defaultTheme.fontFamily.sans],
        // ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        body: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

