module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      techText:'#A4B0B6',
      techTextActive:'#D2D8DB',
      techGrayLow:'#525E66',
      techGray:'#6D7E88',
      techGrayHigh:'#82919B',
      techBlueLow:'#030412',
      techBlue:'#080C35',
      techBlueHigh:'#0F1457',
      adventureCream:'#CDC6AE',
      adventureBrown:'#341C1C',
      adventureOrange:'#F75C03',
      adventureGreen:'#28502E',
    },
    extend: {
      animation:{
        'move': 'move 2s, ease-in-out, infinite'
      },
      keyframes:{
        'move': {
          '0%':{
            transform: 'translateX(0) translateY(0)',
          },
          '100%':{
            transform: 'translateX(10%) translateY(10%)',
          },
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
