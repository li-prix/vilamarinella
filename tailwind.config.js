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
      backgroundImage: {
        hero: "url('./Assets/Images/jardim.jpg')",
        heromob: "url('./Assets/Images/frente3.jpg')",
      },
    },
  },
  plugins: [],
};
