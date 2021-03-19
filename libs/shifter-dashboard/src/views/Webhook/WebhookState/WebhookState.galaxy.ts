export const webhookStateTheme = {
  webhookState: {
    DEFAULT: ['inline-block', 'font-strong', 'text-size-2', 'px-3', 'rounded'],
    running: ['bg-status-success-light', 'text-status-success-dark'],
    stopped: ['bg-shifter-gray-100', 'text-shifter-gray-800'],
    generating: [
      'bg-gradient-to-r',
      'from-shifter-purple-200',
      'text-shifter-gray-800',
    ],
    starting: ['bg-status-success-light', 'text-status-success-dark'],
  },
};
