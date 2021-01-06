module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'godwit': '#1ba0e2'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
