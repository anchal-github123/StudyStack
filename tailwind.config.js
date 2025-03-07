/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primery:"#1E3A5F",
        secondary:"#FF7A00",
        tertiary:"#FAFAFA",
        Forth:"#F2F2F2",

      },
    

    },
  },
  plugins: [],
}

