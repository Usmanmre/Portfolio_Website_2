// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'], // Correctly define Oswald font
      },
    },
  },
  plugins: [],
};
