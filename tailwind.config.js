/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      desktop: '1200px',
    },
    extend: {
      fontFamily: {
        sans: ['Mont', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: { light: '#0f0f11', dark: '#f1f2f9' },
        accent: { light: '#216cff', dark: '#905bff', hover: '#a378ff' },
        'secondary-accent': { light: '#f447af', dark: '#eb5757' },
        white: { light: '#ffffff', dark: '#323542' },
        secondary: { light: '#89939a', dark: '#75767f' },
        icons: { light: '#b4bdc3', dark: '#4a4d58' },
        elements: { light: '#e2e6e9', dark: '#3b3e4a' },
        'hover-bg': { light: '#fafbfc', dark: '#0f1121' },
        'gray-surface': '#161827',
        green: '#27ae60',
        red: '#eb5757',
      },
      boxShadow: {
        custom: '0px 3px 13px 0px rgba(23, 32, 49, 0.40)',
        'custom-dark': '0px 3px 13px 0px rgba(276, 276, 276, 0.40)',
        'lg-dark': '0 10px 15px -3px rgba(276, 276, 276, 0.40)',
        option: '0px 2px 15px 0px rgba(0, 0, 0, 0.05)',
        card: '0 2px 16px 0 rgba(0, 0, 0, 0.1)',
        'card-dark': '0 2px 16px 0 rgba(276, 276, 276, 0.40)',
      },
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-24': 'span 24 / span 24',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
