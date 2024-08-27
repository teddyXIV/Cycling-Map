/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#001513',
        secondary: '#6875FF',
        // secondary: '#5762D5',
        tertiary: '#50FFB1'
      },
      fontFamily: {
        main: ['Arial']
      }
    },
  },
  plugins: [],
}

