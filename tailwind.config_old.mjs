// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx,md}',
    './public/**/*.html'
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
      fontFamily: {
        heading: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        body: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        mystic: '0 0 20px rgba(253, 190, 1, 0.4)',
        innerGlow: 'inset 0 0 40px rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        stars: "url('/assets/bg/stars.svg')",
        gradientRadial: 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
