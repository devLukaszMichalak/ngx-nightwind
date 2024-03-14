/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./projects/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("nightwind")],
}

