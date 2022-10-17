/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "rgb(0, 50, 160)"
        },
        secondary: {
          500: "rgb(255, 153, 0)"
        }
      }
    },
  },
  plugins: [],
}
