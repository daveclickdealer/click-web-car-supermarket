/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
        "click-blue": "#121643",
        para: "#555555",
      },
    },
  },
  plugins: [],
};
