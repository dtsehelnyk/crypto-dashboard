/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        crypto: {
          dark: "#0f172a",  // dark bg
          primary: "#3b82f6", // blue
        },
      },
    },
  },
  plugins: [],
}