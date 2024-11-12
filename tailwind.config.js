/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeAnimation: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        fadeBackground: 'fadeAnimation 3s infinite ease-in-out',
      },
      maxWidth:{
        "container" : "1200px"
      },
      fontFamily:{
        "playfair" : "Playfair Display, serif",
        "open-sans" : "Open Sans, sans-serif"
      },
      backgroundImage:{
        "overlay" : 'linear-gradient(to bottom, transparent, #000000);',
        "rgbaColor" :'linear-gradient(to bottom, #000, #FF0000)'
      },
      letterSpacing:{
        "ex-tracking-widest" : "2rem"
      },
    },
  },
  plugins: [],
}