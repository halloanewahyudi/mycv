/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#042A2B',
        'secondary': '#FFC300',
        'tertiary': '#F5F5F5',
      }
    },
  },
  plugins: [],
}