/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "350px",
        md: "824px",
        lg: "1024px",
      },

      fontFamily: {
        calligra: ["Calligraffitti, cursive"],
      },
      backgroundImage: {
        "hero-home": "url('./img/jardim.jpg')",
        "hero-mob": "url('./img/frente.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
