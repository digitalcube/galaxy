const colors = require('./libs/core/src/foundation/Color/tailwind.config.js');
const fontSize = require('./libs/core/src/foundation/FontSize/tailwind.config.js');
const fontFamily = require('./libs/core/src/foundation/FontFamily/tailwind.config.js');
const fontWeight = require('./libs/core/src/foundation/FontWeight/tailwind.config.js');

module.exports = {
  theme: {
    ...colors,
    ...fontSize,
    ...fontFamily,
    ...fontWeight,
  },
  plugins: [require('@tailwindcss/typography')],
};
