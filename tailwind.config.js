/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,css,js}"],
  theme: {
    extend: {
      screens:{
        'sm' : '390px',
        'md' : '768px',
      },
      backgroundImage: {
        'pattern-bottom-desktop' : "url('/assets/bg-pattern-bottom-desktop.svg')",
        'pattern-top-desktop' : "url('/assets/bg-pattern-top-desktop.svg')",
        'pattern-bottom-mobile' : "url('/assets/bg-pattern-bottom-mobile.svg')",
        'pattern-top-mobile' : "url('/assets/bg-pattern-top-mobile.svg')",
      },
      fontFamily: {
        'league-spartan' : '[League Spartan, sans-serif]',
      },
      colors: {
        'Very-Dark-Magenta': 'hsl(300, 43%, 22%)',
        'Soft-Pink': 'hsl(333, 80%, 67%)',
        'Dark-Grayish-Magenta': 'hsl(303, 10%, 53%)',
        'Light-Grayish-Magenta': 'hsl(300, 24%, 96%)'
      },
    },
  },
  plugins: [],
}

