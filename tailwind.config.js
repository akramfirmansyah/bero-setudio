module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#57209D',
        'second': '#E09E00',
        'jurnal': '#1D1D1D',
        'phoneshadow': 'rgba(37, 179, 68, 0.3)',
        'hdportofolio': '#7900E2',
      },
      dropShadow: {
        'icon': '0 5px 10px #E09E00',
      },
      boxShadow: {
        'nav': '0 5px 12px #E09E004D',

      },
    },
  },
  plugins: [],
}
