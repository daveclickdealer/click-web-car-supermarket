/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/components/**/*.{js,ts,jsx,tsx}",
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      code: ["monospace"],
    },
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#e4e4e4",
        accent: "#16d9d9",
        para: "#555555",
      },
    },
  },
  plugins: [],
};
