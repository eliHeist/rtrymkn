/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "rgb(0, 50, 160)",
          600: "#263b4c"
        },
        secondary: {
          500: "rgb(255, 153, 0)"
        },
        dark: "rgb(24, 25, 25)",
      }
    },
  },
  plugins: [],
}
