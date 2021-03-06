export const domainState = {
  variants: {
    light: {
      DEFAULT: 'inline-block font-strong text-size-2 px-3 rounded',
      states: {
        failed: 'bg-status-danger-light text-status-danger-dark',
        attached: 'bg-status-success-light text-status-success-dark',
        verified: 'bg-shifter-gray-100 text-status-shifter-gray-800',
        pending: 'bg-status-warning-light text-status-warning-dark',
      },
    },
  },
};
