/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mulish: ['Mulish', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns:{
        "section" : "repeat(3, 1fr)",
        "footer" : "0.7fr 1fr",
      },
      backgroundImage:{
        'callToActionImage': "url('/images/Rectangle 15(1).png')"
      }
    },
  },
  plugins: [],
}

