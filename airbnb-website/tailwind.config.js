/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'coast' : 'url("./src/assets/main.jpg")',
        'room' : 'url("./src/assets/room.jpg")'
      },
      fontFamily: {
        'handlee': ["'Handlee', cursive"],
        'sacramento': ["'Sacramento', cursive"]
      },
    },
    colors: {
      'primary-dark': '#0a1424',
      'primary-light': '#ced9eb',
      'primary-medium': '#8ba1c4'
    }
  },
  plugins: [],
}

