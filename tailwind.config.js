module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  darkMode: 'class', // or 'media' or 'class'
  purge: [],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'light-grey': '#FAFAFA',
      'dark-light': '#2B3743',
      'dark-dark': '#202D36',
    }),
    extend: {
      width: {
        'min': 'min-content'
      },
    },
  },
  variants: {
    textColor: ['group-hover'],
    transform: ['group-hover'],
    scale: ['group-hover'],
  },
  plugins: [],
}
