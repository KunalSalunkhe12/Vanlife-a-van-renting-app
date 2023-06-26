/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF7ED",
        secondary: "#FFEAD0",
        orange: "#FF8C38",
        green: "#115E59",
        black: "#161616"
      }
    },
  },
  plugins: [],
}