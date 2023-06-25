/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF7ED",
        orange: "#FF8C38",
        green: "#115E59",
        black: "#161616"
      }
    },
  },
  plugins: [],
}