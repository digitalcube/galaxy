module.exports = {
  schema: {
    components: {
      badge: {
        DEFAULT: 'inline-block font-strong text-size-2 px-3 rounded',
        variants: {
          default: 'bg-shifter-gray-100 text-shifter-gray-800',
          success: 'bg-status-success-light text-status-success-dark',
          active:
            'bg-gradient-to-r from-shifter-purple-200 text-shifter-gray-800',
        },
      },
    },
  },
};