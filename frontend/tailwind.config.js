/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-white": "#FFFFFF",
        "brand-blue": "#6DCFEE",
        "brand-light-blue": "#D1F4FF",
        "brand-dark-blue": "#5BB0CB",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { translateY: 10, opacity: 0 },
          "100%": { translateY: 0, opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
