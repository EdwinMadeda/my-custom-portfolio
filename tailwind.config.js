/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      color: {
        primary: '#ff014f',
        primary2: '#232323',
        secondary: '#00c0ff',
        accent: '',
        dark: '#040836',
        dark_secondary: '#202942',
        heading: '#202942',
        paragraph: '#666666',
      },
      fontFamily: {
        lemonJelly: ['LEMON_JELLY', 'cursive'],
        rainbowBridge: ['RAINBOW_BRIDGE', 'cursive'],
        roadBlast: ['ROAD_BLAST', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
