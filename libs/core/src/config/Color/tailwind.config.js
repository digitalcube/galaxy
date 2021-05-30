const chroma = require('chroma-js');

const darkColorScale = [...Array(5)].map((_, i) =>
  chroma('#892885')
    .darken(i * 0.3125)
    .hex()
);

const lightColorScale = [...Array(5)].map((_, i) =>
  chroma('#892885')
    .brighten(i / 0.8)
    .hex()
);

const shifter = {
  primary: [...darkColorScale, ...lightColorScale],
};

module.exports = {
  colors: {
    ...shifter,
    // 'amimoto-black': 'rgba(2, 13, 32, 1)',
    // 'amimoto-blue-100': 'rgba(224, 240, 253, 1)',
    // 'amimoto-blue-200': 'rgba(192, 217, 248, 1)',
    // 'amimoto-blue-300': 'rgba(141, 178, 234, 1)',
    // 'amimoto-blue-400': 'rgba(74, 125, 216, 1)',
    // 'amimoto-blue-500': 'rgba(12, 57, 162, 1)',
    // 'amimoto-blue-600': 'rgba(8, 40, 132, 1)',
    // 'amimoto-blue-700': 'rgba(4, 26, 100, 1)',
    // 'amimoto-blue-800': 'rgba(2, 14, 68, 1)',
    // 'amimoto-blue-900': 'rgba(0, 7, 43, 1)',
    // 'amimoto-blue-primary': 'rgba(0, 76, 211, 1)',
    // 'amimoto-blue-secondary': 'rgba(0, 168, 255, 1)',
    // 'amimoto-gray-100': 'rgba(241, 242, 245, 1)',
    // 'amimoto-gray-200': 'rgba(210, 213, 221, 1)',
    // 'amimoto-gray-300': 'rgba(181, 183, 195, 1)',
    // 'amimoto-gray-400': 'rgba(152, 154, 169, 1)',
    // 'amimoto-gray-500': 'rgba(124, 125, 142, 1)',
    // 'amimoto-gray-600': 'rgba(99, 100, 117, 1)',
    // 'amimoto-gray-700': 'rgba(75, 75, 92, 1)',
    // 'amimoto-gray-800': 'rgba(51, 51, 65, 1)',
    // 'amimoto-gray-900': 'rgba(29, 29, 38, 1)',
    // 'galaxy-background-light': 'rgba(247, 247, 248, 1)',
    // 'galaxy-gray-100': 'rgba(246, 246, 246, 1)',
    // 'galaxy-gray-200': 'rgba(198, 198, 198, 1)',
    // 'galaxy-gray-300': 'rgba(159, 159, 159, 1)',
    // 'galaxy-gray-400': 'rgba(119, 119, 119, 1)',
    // 'galaxy-gray-500': 'rgba(80, 80, 80, 1)',
    // 'galaxy-gray-600': 'rgba(65, 65, 65, 1)',
    // 'galaxy-gray-700': 'rgba(50, 50, 50, 1)',
    // 'galaxy-gray-800': 'rgba(35, 35, 35, 1)',
    // 'galaxy-gray-900': 'rgba(20, 20, 20, 1)',
    // 'shifter-gray-50': '#F6F5F6',
    // 'shifter-gray-100': '#EDECEC',
    // 'shifter-gray-200': '#D1CFD0',
    // 'shifter-gray-300': '#B6B3B4',
    // 'shifter-gray-400': '#7F797B',
    // 'shifter-gray-500': '#756B6E',
    // 'shifter-gray-600': '#413A3C',
    // 'shifter-gray-700': '#363032',
    // 'shifter-gray-800': '#2B2628',
    // 'shifter-gray-900': '#231F21',
    // 'shifter-accent': '#F80A5B',
    // 'shifter-magenta-light': 'rgba(254, 238, 244, 1)',
    // 'shifter-magenta-primary': 'rgba(248, 10, 91, 1)',
    // 'shifter-purple-50': '#F9F4F9',
    // 'shifter-purple-100': '#F3EAF3',
    // 'shifter-purple-200': '#E2C9E1',
    // 'shifter-purple-300': '#D0A9CE',
    // 'shifter-purple-400': '#AC69AA',
    // 'shifter-purple-500': '#892885',
    // 'shifter-purple-600': '#7B2478',
    // 'shifter-purple-700': '#671E64',
    // 'shifter-purple-800': '#521850',
    // 'shifter-purple-900': '#431441',
    // 'shifter-purple-primary': 'rgba(137, 40, 133, 1)',
    // 'status-danger-dark': 'rgba(149, 0, 0, 1)',
    // 'status-danger-default': 'rgba(206, 22, 22, 1)',
    // 'status-danger-light': 'rgba(255, 233, 233, 1)',
    // 'status-success-dark': '#055C2D',
    // 'status-success-default': '#23BA7B',
    // 'status-success-light': '#D9FFE3',
    // 'status-warning-dark': '#BE6B09',
    // 'status-warning-default': '#FFA600',
    // 'status-warning-light': '#FEF4D9',
    // black: '#0C0C0D',
    // transparent: 'rgba(255, 255, 255, 0)',
    // white: '#ffffff',
    // focus: '#2EB4FF',
  },
};
