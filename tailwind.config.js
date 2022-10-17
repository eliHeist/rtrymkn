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
          500: "rgb(252, 175, 60)"
        }
      }
    },
  },
  plugins: [],
}
