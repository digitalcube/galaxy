const colors = require('./libs/core/src/config/Color/tailwind.config.js');
const fontSize = require('./libs/core/src/config/FontSize/tailwind.config.js');
const fontFamily = require('./libs/core/src/config/FontFamily/tailwind.config.js');
const fontWeight = require('./libs/core/src/config/FontWeight/tailwind.config.js');
const borderRadius = require('./libs/core/src/config/BorderRadius/tailwind.config.js');
const borderWidth = require('./libs/core/src/config/BorderWidth/tailwind.config.js');
const boxShadow = require('./libs/core/src/config/BoxShadow/tailwind.config.js');
const ringWidth = require('./libs/core/src/config/RingWidth/tailwind.config.js');

module.exports = {
  // mode: 'jit',
  purge: [
    './apps/demo/**/*.{js,jsx,ts,tsx}',
    './libs/core/src/lib/**/*.{js,jsx,ts,tsx}',
    './libs/core/src/components/**/*.{js,jsx,ts,tsx}',
    './libs/shifter-dashboard/**/*.{js,jsx,ts,tsx}',
    './libs/shifter/**/*.{js,jsx,ts,tsx}',
    './libs/views/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    ...colors,
    ...fontSize,
    ...fontFamily,
    ...fontWeight,
    ...borderRadius,
    ...borderRadius,
    ...ringWidth,
    ...boxShadow,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
