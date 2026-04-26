import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './types/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '480px' },
        xxs: { max: '360px' },
      },
      colors: {
        charcoal: {
          DEFAULT: '#2b2a27',
          2: '#3d3830',
          3: '#7a6e63',
        },
        'warm-white': {
          DEFAULT: '#f7f3ee',
          2: '#ede5dc',
          3: '#d9cbbe',
        },
        dusty: {
          pink: '#e8c5c0',
          'pink-2': '#d4a0a4',
          'pink-bg': '#f0dade',
          'pink-dk': '#7a4455',
        },
        sage: {
          DEFAULT: '#a8b89a',
          dk: '#4a5e3e',
          bg: '#d8e4d1',
          mid: '#6b7c5e',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', "'Helvetica Neue'", 'sans-serif'],
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
