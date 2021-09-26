const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#FFC247',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.red,
      red1: '#FF0000',
      rose: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      green1: 'rgba(0, 204, 45, 1)',
      blue1: 'var(--color-blue-1)',
      blue2: 'var(--color-blue-2)',
      blue3: 'var(--color-blue-3)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
