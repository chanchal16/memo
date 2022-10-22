/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors:{
      'gray':'#94a3b8',
      'dark-gray':'#64748b',
      'white': '#ffffff',
    },
    fontFamily:{
      'display':['Akaya Kanadaka', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}
