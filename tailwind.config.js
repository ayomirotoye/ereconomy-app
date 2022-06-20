const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: {
          ...colors.blue,
          450: "#2e186a"
        },
        neutral: colors.gray,
      },
      fontFamily: {
        sanSerif: ["DM Sans", "sans-serif"],
      },
      lineHeight: {
        'regular': '1.2'
      }
    },
  },
  plugins: [],
}
