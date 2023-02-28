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
      minHeight: {
        'main': '93%'
      },
      height: {
        'header': '7%',
        'mobile': '86%',
        'main': '93%'
      },
      width: {
        'left': '10%',
        'center': '80%',
        'right': '10%',
        'line': '1px'
      },
      transitionTimingFunction: {
        'up': 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)'
      }
    },
  },
  plugins: [],
}