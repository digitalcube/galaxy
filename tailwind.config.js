const colors = require('./libs/core/src/config/Color/tailwind.config.js');
const fontSize = require('./libs/core/src/config/FontSize/tailwind.config.js');
const fontFamily = require('./libs/core/src/config/FontFamily/tailwind.config.js');
const fontWeight = require('./libs/core/src/config/FontWeight/tailwind.config.js');
const borderRadius = require('./libs/core/src/config/BorderRadius/tailwind.config.js');
const borderWidth = require('./libs/core/src/config/BorderWidth/tailwind.config.js');
const ringWidth = require('./libs/core/src/config/RingWidth/tailwind.config.js');

module.exports = {
  theme: {
    ...colors,
    ...fontSize,
    ...fontFamily,
    ...fontWeight,
    ...borderRadius,
    ...borderRadius,
    ...ringWidth,
  },
  variants: {
    extend: {
      display: ['group-hover'],
      borderWidth: ['hover', 'focus'],
      borderColor: ['active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
