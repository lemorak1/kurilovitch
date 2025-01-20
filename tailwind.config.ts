import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E0F7FA',
          DEFAULT: '#0077B6',
          dark: '#023E8A'
        },
        secondary: {
          light: '#CAF0F8',
          DEFAULT: '#90E0EF',
          dark: '#00B4D8'
        },
        accent: {
          red: '#EF476F',
          yellow: '#FFD166',
          green: '#06D6A0'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
