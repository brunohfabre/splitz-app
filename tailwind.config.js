/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#E1E1E6',
          100: '#C4C4CC',
          200: '#8D8D99',
          300: '#7C7C8A',
          400: '#505059',
          500: '#323238',
          600: '#29292E',
          700: '#202024',
          800: '#121214',
          900: '#09090A',
        },
        'text-title': '#E1E1E6',
        'text-base': '#C4C4CC',
        'text-support': '#8D8D99',
        placeholder: '#7C7C8A',
        'input-icons': '#505059',
        'shape-tertiary': '#323238',
        'shape-secondary': '#29292E',
        'shape-primary': '#202024',
        'app-background': '#121214',

        primary: '#FB8355',
      },
    },
  },
  plugins: [],
}
