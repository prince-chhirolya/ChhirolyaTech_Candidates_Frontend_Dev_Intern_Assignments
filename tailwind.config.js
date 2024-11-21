//  @type {import('tailwindcss').Config} 
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter_d65c78', 'sans-serif'], // Correctly place fontFamily under theme.extend
      },
    },
  },
  variants: {},
  plugins: [],
};
