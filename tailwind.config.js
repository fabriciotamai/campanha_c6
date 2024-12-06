/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient1: '#f06a67',
        gradient2: '#f16968',
        gradient3: '#f58162',
        gradient4: '#c6804a',
        gradient5: '#f8ad52',
        gradient6: '#f8b64f',
      },
    },
    fontFamily: {
      'c6display-light': ['C6Sans-Display-Light', 'sans-serif'],
      'c6display-regular': ['C6Sans-Display-Regular', 'sans-serif'],
      'c6text-bold': ['C6Sans-Text-Bold', 'sans-serif'],
      'c6text-regular': ['C6Sans-Text-Regular', 'sans-serif'],
      'c6text-semibold': ['C6Sans-Text-Semibold', 'sans-serif'],
    },
  },
  plugins: [],
};
