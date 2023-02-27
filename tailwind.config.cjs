/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'main': ['Roboto Mono', 'monospace'],
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        'main-color': '#00203FFF',
      },
      colors: {
        'contrast-color': '#faf1a0'
      },
      height: {
        'header': '7%',
        'mobile': '86%',
        'main': '93%'
      },
      width: {
        'left': '10%',
        'center': '80%',
        'right': '10%'
      }
    },
  },
  plugins: [],
}