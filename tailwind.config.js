/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx,tsx}',
    './components/**/*.{html,js,jsx,tsx}',
    './sections/**/*.{html,js,jsx,tsx}',
    './styles/**/*.{js,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'lady-one': "url('/public/1.png')",
        'lady-two': "url('/public/2.png')",
        'lady-three': "url('/public/3.png')",
       },


      colors: {
        'primary-black': '#f8ede7',
        'secondary-white': '#c7c7c7', 
        
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
