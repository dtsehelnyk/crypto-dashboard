/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crypto: {
          dark: "#0f172a",  // Темный фон
          primary: "#3b82f6", // Синий (для акцентов)
        },
      },
    },
  },
  plugins: [],
}