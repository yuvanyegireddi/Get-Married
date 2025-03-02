/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue: '#1b4571',
        customLight: '#FAEBD7',
        cusLightBlue: '#ECDFD0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        robotic: ['robotic'],
      },
    },
  },
  plugins: [
    require('daisyui')],
    daisyui: {
      themes: ["light", "dark"],  // Only enable light and dark themes
      darkTheme: "light",
      base: false,
    },
    
}

