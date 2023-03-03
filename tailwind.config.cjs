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
        'main-color': '#232254',
        'second-color': '#1e2a38'
      },
      colors: {
        'contrast-color': '#03fcb1',
        'main-color': '#232254',
        'second-color': '#1e2a38'
      },
      minHeight: {
        'main': '93%',
        'footer': '75%',
        'project': '85%'
      },
      height: {
        'mobile': '86%',
        'main': '93%',
        'line': '1px',
        'image': '95%',
        'card': '40%',
        'project': '85%',
        '2-screen': '200vh'
      },
      minWidth: {
        'card': '45%',
        'card-tablet': '60%',
        'project-tablet': '90%'
      },
      width: {
        'left': '5%',
        'center': '80%',
        'right': '5%',
        'line': '1px',
        'image': '95%',
        'card': '45%',
        'card-tablet': '60%',
        'project-tablet': '90%'
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