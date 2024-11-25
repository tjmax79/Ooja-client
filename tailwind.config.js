/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'primary': '#E41AB1FF',
        'secondary': '#038B80FF',
        'tertiary': '#F3CC0AFF',
        'quaternary': '#C6C2C2FF',
        'quinary': '#F2F2F2',
      },
      fontFamily:{
        monteserrat: ["Montserrat", "sans-serif"],
        playfair:["playfair Display", "serif"],
        iceberg:['Iceberg',"cursive","sans-serif"],

      }
    },
  },
  plugins: [],
}

