export const toggle = {
  bezel: {
    DEFAULT:
      'relative inline-flex items-center h-6 rounded-full w-11 bg-shifter-gray-300 border border-shifter-gray-400 transition',
    states: {
      active: 'bg-status-success-default border-status-success-default',
    },
  },
  switch: {
    DEFAULT:
      'inline-block w-4 h-4 transform bg-white rounded-full translate-x-1 transition',
    states: {
      active: 'translate-x-6',
    },
  },
};

// // const toggleButtonCss = `${
// //   enabled ? `translate-x-${size / 2 + 1}` : 'translate-x-1'
// // } inline-block w-${size / 2 - 2} h-${
// //   size / 2 - 2
// // } transform bg-white rounded-full transition`;

// // const toggleBezelCss = `${
// //   enabled
// //     ? 'bg-status-success-default border-status-success-default'
// //     : 'bg-shifter-gray-300 border-shifter-gray-400'
// // } relative inline-flex h-${
// //   size / 2
// // } rounded-full w-${size} items-center border border-shifter-gray-400`;-
