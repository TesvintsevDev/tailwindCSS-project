/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      colors: {
        'logo-main': '#FFD700',
      },
      fontFamily: {
        main: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
