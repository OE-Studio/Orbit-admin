/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'cards':'1.25rem',
      'inputs':'0.625rem',
      '5px':"0.313rem"
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      red:colors.red,
      gray:colors.coolGray,
      white:colors.white,
      black:colors.black,
      pink:colors.pink,
      brand_blue:"#093C70",
      blue_500:"#5DADEC",
      blue_50:"#EFF7FD",
      brand_blue_500:"#04274B",
      brand_blue_400:"#1D456E",
      brand_blue_300:"#356290",
      brand_blue_200:"#4E80B3",
      brand_blue_150:"#5A8FC4",
      brand_blue_100:"#669DD5",
      new_green_700:"#00AA61",
      new_green_600:"#00CC74",
      new_green_50:"#E5FFF4",
      teal_green_50:"#ECF8F6",
      teal_green_500:"#45B6A8",
      green_500:"#73B051",
      green_50:"#F1F7EE",
      neutral_100:"#F2F7FA",
      neutral_200:"#E5ECF5", //outline
      neutral_300:"#A6B0BF",
      red_500:"#EF4444",
      red_400:"#F26969",
      red_200:"#F9B4B4",
      red_50:"#FDECEC",
      gray_500:"#3D3D3D",
      gray_600:"#475467",
      gray_400:"#5B5B5B",
      gray_300:"#787878",
      gray_200:"#969696",
      gray_100:"#F2F4F7",
      gray_50:"#F9FAFB",
      cool_gray_1:"#6C747A",
      text_100:"#71879C",
      purple_400:"#B933FF",
      purple_300:"#CA66FF",
      purple_25:"#F9EFFF",
      purple_5:"#FDFAFF",
      orange_500:"#EF9645",
      orange_50:"#FDF4EC",
    },
    fontFamily: {
      'clash-regular': ["ClashGrotesk-Regular"],
      'clash-medium': ["ClashGrotesk-Medium"],
      'clash-semibold': ["ClashGrotesk-Semibold"],
      'clash-bold': ["ClashGrotesk-Bold"],
      'inter':["Inter"]
    },
  },
  plugins: [],
}
