/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#33272a",
        secondary: "#aaa6c3",
        tertiary: "#ffc6c7",
        "black-100": "#594a4e",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        paragraph: "#594a4e",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
