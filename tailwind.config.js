/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "b-purple": "#5267DF",
        "b-red": "#FA5959",
        "b-blue": "#242A45",
        "b-grey": "#9194A2",
        "b-white": "#f7f7f7",
      }
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  plugins: [],
}
