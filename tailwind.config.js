const colors = require('tailwindcss/colors')

module.exports = {
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
    },
  },
  plugins: [],
}
