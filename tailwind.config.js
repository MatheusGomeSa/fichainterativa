module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme =>({
      ...theme('colors'),
      'primary':'#f5fbef',
      'secondary':'#3943B7',
      'Dark-secondary':'#272e7d',
      'tertiary':'#E8AA14',
      'danger':'#C1292E'
    }),
    textColor: theme =>({
      ...theme('colors'),
      'primary':'#f5fbef',
      'secondary':'#3943B7',
      'tertiary':'#E8AA14',
      'danger':'#C1292E'
    })  ,
    backgroundImage: theme =>({
      'personagem':'url("../public/rpg/eu.jpg")'
    }),
    fontFamily:{
      'lato':['Lato','sans-serif'],
      'Roboto':['Roboto','sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
