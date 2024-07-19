/** @type {import('tailwindcss').Config} */

const defaultTheme=require('tailwindcss/defaultTheme');

module.exports={
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      desktop: '1200px'
    },
    extend: {
      fontFamily: {
        sans: ['Mont', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      'accent': '#216cff',
      'secondary-accent': '#f447af',
      'primary': '#0f0f11',
      'secondary': '#89939a',
      'icons': '#b4bdc3',
      'elements': '#e2e6e9',
      'hover-bg': '#fafbfc',
      'white': '#ffffff',
      'green': '#27ae60',
      'red': '#eb5757',
    },
    container: {
      center: true,
    },
    boxShadow: {
      custom: '0px 3px 13px 0px rgba(23, 32, 49, 0.40)',
    }
  },
  plugins: [],
}
