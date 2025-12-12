/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
        colors: {
        'res-purple': '#8a2be2',
        'another-color': 'rgb(255, 165, 0)',
      },
    },
  },
  plugins: [],
};
