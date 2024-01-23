import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#1B1B1B',
      'nomad-black': '#333236',
      gray: {
        100: '#FAFAFA',
        200: '#EEEEEE',
        300: '#DDDDDD',
        400: '#CBC9CF',
        500: '#ADAEB8',
        600: '#A4A1A4',
        700: '#79747E',
        800: '#4B4B4B',
      },
      green: {
        400: '#CED8D5',
        600: '#7AC555',
        800: '#0B3B2D',
      },
      red: {
        400: '#FFE4E0',
        800: '#FF472E',
      },
      orange: {
        400: '#FFF4E8',
        800: '#FF7C1D',
      },
      yellow: {
        800: '#FFC23D',
      },
      blue: {
        400: '#E5F3FF',
        600: '#2EB4FF',
        800: '#0085FF',
      },
      white: '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
