/** @type {import('tailwindcss').Config} */

export default {

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {

    extend: {
      colors:{
        primary:"#f2f7f7",
        secondary:"#f2f0ff",
        Yellow:"#f4e28d",
        blue:"#bbdde5",
        pink:"#fda599",
        teal:"#3f89a1",
        gray:"#202427"
      },
    },

  },

  plugins: [],

}

