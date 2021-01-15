module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  darkMode: 'class',
  purge: [],
  theme: {
    darkSelector: ".dark-mode",
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
    textColor: ['group-hover', 'dark'],
    transform: ['group-hover', 'dark'],
    scale: ['group-hover', 'dark'],
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderWidth: [
      'dark'
    ],
    borderColor: [
      'dark'
    ],
    textColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
  },
  plugins: [require("tailwindcss-dark-mode")()]
}
