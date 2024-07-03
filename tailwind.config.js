/** @type {import('tailwindcss').Config} */



module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {

      colors: {
        primary: '#1E3A8A', // Example primary color (blue)
        secondary: '#FBBF24', // Example secondary color (yellow)
        background: '#F3F4F6', // Example background color (light gray)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
