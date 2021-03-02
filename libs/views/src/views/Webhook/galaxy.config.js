module.exports = {
  schema: {
    components: {
      webhook: {
        DEFAULT:
          'ring rounded ring-shifter-gray-200 overflow-hidden shadow hover:shadow-lg transition-shadow flex justify-between p-4 items-start',
        variants: {
          light: 'bg-white',
          dark: 'bg-shifter-purple-800 text-shifter-purple-200',
        },
        components: {
          url: {
            DEFAULT: 'font-regular text-size-3 flex-initial',
            variants: {
              light: 'text-shifter-purple-primary',
              dark: 'text-shifter-gray-200',
            },
          },
          state: {
            DEFAULT: 'inline-block font-strong text-size-2 px-3 rounded',
            variants: {
              light: {
                state: {
                  running: 'bg-status-success-light text-status-success-dark',
                  stopped: 'bg-shifter-gray-100 text-shifter-gray-800',
                  generating:
                    'bg-gradient-to-r from-shifter-purple-200 text-shifter-gray-800',
                  starting: 'bg-status-success-light text-status-success-dark',
                },
              },
              dark: 'text-shifter-gray-200',
              state: {
                running: 'bg-status-success-light text-status-success-dark',
                stopped: 'bg-shifter-gray-100 text-shifter-gray-800',
                generating:
                  'bg-gradient-to-r from-shifter-purple-200 text-shifter-gray-800',
                starting: 'bg-status-success-light text-status-success-dark',
              },
            },
          },
        },
      },
    },
  },
};