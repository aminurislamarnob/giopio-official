module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
    // screens: {
    //   'xl': '1147px',
    //   '2xl': '1147px',
    // },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      'giopio-orange': '#FB6400',
      'giopio-black': '#26404C',
      'giopio-text': '#4A5871',
      'white': '#ffffff',
      'giopio-red': '#fb4a59',
      'giopio-border': '#D9DEEB',
      'giopio-border-2': '#DFE4EF',
      'giopio-gray-bg': '#F5F7FF',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}