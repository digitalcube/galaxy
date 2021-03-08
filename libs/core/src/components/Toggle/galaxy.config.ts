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
