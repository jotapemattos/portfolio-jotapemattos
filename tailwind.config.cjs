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
        'contrast-color': '#03fcb1'
      },
      minHeight: {
        'main': '93%',
        'footer': '75%'
      },
      height: {
        'header': '7%',
        'mobile': '86%',
        'main': '93%',
        'line': '1px',
        'image': '95%'
      },
      width: {
        'left': '5%',
        'center': '80%',
        'right': '5%',
        'line': '1px',
        'image': '95%'
      },
      transitionTimingFunction: {
        'up': 'all 0.25s cubic-bezier(0.645,0.045,0.355,1)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}