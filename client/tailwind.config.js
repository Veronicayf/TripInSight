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
        'darkgreen-bg':'#0d2519'
      }
    },
  },
  plugins: [],
}

