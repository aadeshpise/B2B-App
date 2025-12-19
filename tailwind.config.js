/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: '#f8f3eb',
          salmon: '#e76d57',
          black: '#201315',
          brown: '#56382d',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Belleza', 'serif'],
      }
    },
  },
  plugins: [],
}