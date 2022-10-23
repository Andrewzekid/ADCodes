/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      "primary-blue":"#1C60CE",
      "secondary-blue":"#159CE6",
      "primary-purple":"#AA2EE8",
      "secondary-purple":"#8524B5",
    },
    extend: {
      colors: {
        black: {
          100: "#231E26",
          75: "#5a565d",
          50:"#918f93",
          25:"#c8c6c9",
          10: "#e9e9ea",
          5: "#f4f3f4"
        }
      }
    },
  },
  plugins: [],
}
