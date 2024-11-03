/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      keyframes: {
        'progress-60': {
          '0%': { width: '0%' },
          '100%': { width: '60%' }
        },
        'progress-85': {
          '0%': { width: '0%' },
          '100%': { width: '85%' }
        },
        'progress-50': {
          '0%': { width: '0%' },
          '100%': { width: '50%' }
        },
        'progress-40': {
          '0%': { width: '0%' },
          '100%': { width: '40%' }
        }
      },
      animation: {
        'progress-60': 'progress-60 1.5s ease-out forwards',
        'progress-85': 'progress-85 1.5s ease-out forwards',
        'progress-50': 'progress-50 1.5s ease-out forwards',
        'progress-40': 'progress-40 1.5s ease-out forwards'
      }
    },
  },
  plugins: [],
};
