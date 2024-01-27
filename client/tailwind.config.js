/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#3aab47',
        'seconday-text': '#b7b7b7',
        'btn-hover': '#bc6c25',
        'cream-bg': '#fefae0',
        'darkgreen-bg':'#0d2519',
        'admin-light-bg':'#f6f6f9',
      },
      backgroundImage:{
        'vector-leaves': "url('./assets/img/vector1.jpg')",
        'bg-landscape' : "url('./assets/img/paisaje2.jpg')",
      },
      fontFamily: {
        'Mulish': ['Mulish', 'sans-serif'],
        'Nunito': ['Nunito Sans', 'sans-serif'],
        'Bebas': ['Bebas Neue', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],

      },

    },
  },
  plugins: [],
}

