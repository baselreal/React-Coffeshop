/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['rubik', 'sans-serif']
      },
      screens: {
        'sm' : {'max': '768px'},
        'vsm': {'max':'576px'},
        'fold': {'max':'280px'},
        'mini': {'max':'469px'},
        'vmini': {'max': '375px'},
        'SE' : {'max': '415px'}
      }
    },
  },
  plugins: [],
};