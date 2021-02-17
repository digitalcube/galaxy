module.exports = {
  schema: {
    components: {
      site: {
        DEFAULT:
          'ring rounded ring-shifter-gray-200 flex overflow-hidden shadow hover:shadow-lg transition-shadow',
        variants: {
          light: 'bg-white',
          dark: 'bg-shifter-purple-800 text-shifter-purple-200',
        },
        components: {
          name: {
            DEFAULT: 'font-strong text-size-6 flex-auto',
            variants: {
              light: 'text-shifter-purple-700',
              dark: 'text-shifter-gray-200',
            },
          },
          url: {
            DEFAULT: 'font-regular text-size-3 flex-initial',
            variants: {
              light: 'text-shifter-purple-primary',
              dark: 'text-shifter-gray-200',
            },
          },
          team: {
            DEFAULT: 'font-regular text-size-3 flex-initial',
            variants: {
              light: 'text-shifter-purple-800',
              dark: 'text-shifter-gray-200',
            },
          },
          state: {
            DEFAULT: 'font-strong text-size-2 px-3 rounded',
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
          progress: {
            DEFAULT:
              'h-1 bg-gradient-to-r from-shifter-purple-primary to-shifter-magenta-primary',
            variants: {
              light: '',
              dark: '',
            },
          },
          members: {
            DEFAULT: '-space-x-2 flex-initial',
            variants: {
              light: '',
              dark: '',
            },
          },
        },
      },
    },
  },
};
