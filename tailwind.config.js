/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        pink: '#C93B76',
        black: '#212936',
        gray: '#4D5562',
        white: '#E5E7EB',
        ['gray-2']: '#121826a6'
      }
    },
  },
  plugins: [],
}