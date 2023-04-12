/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#EBEBEB',
        'black': '#121212',
        'dull-blue': '#3A6EA5',
        'orange': {
          400: '#FF6700',
          500: '#cc5200',
          600: '#993d00'
        },
        'dark-blue': '#004E98',
        'cyan-blue': '#339CF0'
      }
    },
  }, plugins: [
    require('@tailwindcss/forms'),
  ],
  plugins: [],
}
