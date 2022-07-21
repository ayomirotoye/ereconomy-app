// @preval
const colors = require('tailwindcss/colors')

export const config =/* preval */ {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: {
          ...colors.blue,
          450: "#2e186a"
        },
      },
      fontFamily: {
        sanSerif: ["DM\\ Sans", "sans-serif"],
        ptSerif: ["PT\\ Sans", "sans-serif"],
      },
      screens: {
        'sm': { 'min': '640px', 'max': '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        'md': { 'min': '768px', 'max': '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        'lg': { 'min': '1024px', 'max': '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        'xl': { 'min': '1280px', 'max': '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl': { 'min': '1536px' },
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
