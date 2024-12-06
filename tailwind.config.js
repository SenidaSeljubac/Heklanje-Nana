/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Lato as the default sans-serif font
        serif: ['Playfair Display', 'serif'], // Playfair Display for headings
      },
    },
  },
  plugins: [],
}

