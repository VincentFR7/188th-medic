/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f8f9f3',
          100: '#eef0e5',
          200: '#dfe3cd',
          300: '#c6cea7',
          400: '#aaba84',
          500: '#90a26a',
          600: '#778b56',
          700: '#576841',
          800: '#4a5536',
          900: '#3a422a',
          950: '#1e231a',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};