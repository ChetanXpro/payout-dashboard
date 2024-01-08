/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "inter-variable": ["Inter Variable", "sans-serif"],
        "inter-variable-italic": ["Inter Variable Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
