module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1700px',
      // => @media (min-width: 1700px) { ... }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      'giopio-orange': '#FB6400',
      'giopio-light-orange': '#FFF3F3',
      'giopio-black': '#26404C',
      'giopio-text': '#4A5871',
      'giopio-text-blue': '#4D94FF',
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