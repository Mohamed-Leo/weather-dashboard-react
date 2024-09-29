/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container : {
        center : true
      },
      boxShadow : {
        'custom': '4px 4px 10px 2px rgba(15,22,39,0.89)',
      }
    },
  },
  plugins: [],
}