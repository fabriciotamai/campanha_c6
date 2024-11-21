/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'c6display-light': ['C6Sans-Display-Light', 'sans-serif'],
      'c6display-regular': ['C6Sans-Display-Regular', 'sans-serif'],
      'c6text-bold': ['C6Sans-Text-Bold', 'sans-serif'],
      'c6text-regular': ['C6Sans-Text-Regular', 'sans-serif'],
      'c6text-semibold': ['C6Sans-Text-Semibold', 'sans-serif'],
    },
  },
  plugins: [],
}
