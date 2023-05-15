/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bannerLight: 'url(./src/assets/images/banner-3.JPG)',
        bannerDark: 'url(./src/assets/images/banner-2.JPG)',
      },
      fontFamily: {
        lemonJelly: ['LEMON_JELLY', 'cursive'],
        rainbowBridge: ['RAINBOW_BRIDGE', 'cursive'],
        roadBlast: ['ROAD_BLAST', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
