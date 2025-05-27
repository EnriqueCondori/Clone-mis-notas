/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Example color
        
      },
      
    },
  },
  daisyui: {
    themes: ["lemonade"],
  },
  plugins: [
    require('daisyui'),
    
  ],
}

