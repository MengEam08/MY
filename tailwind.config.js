/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#7806FA',
        secondary: '#D911FC',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        averia:["Averia Serif Libre", 'serif']
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        }
      }
    },
  },
  plugins: [],
}