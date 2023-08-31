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
      }
    },
  },
  plugins: [],
}

