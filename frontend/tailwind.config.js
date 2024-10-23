/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors :{
      'primary': "#5f6FFF",
      'text' : "#FFFFFF",
      'online' : "#87f542"
    },
    gridTemplateColumns:{
      'auto' : 'repeat(auto-fill, minmax(200px,2fr))'
    }
  },
  plugins: [],
}