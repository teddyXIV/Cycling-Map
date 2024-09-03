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
        tblack: ["Titillium-Black", "sans-serif"],
        tbold: ["Titillium-Bold", "sans-serif"],
        tregular: ["Titillium-Regular", "sans-serif"],
        tsemibold: ["Titillium-Semibold", "sans-serif"],
        tthin: ["Titillium-Thin", "sans-serif"],
        tlight: ["Titillium-Light", "sans-serif"]
      }
    },
  },
  plugins: [],
}


