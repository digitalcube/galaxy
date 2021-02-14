module.exports = {
  schema: {
    components: {
      site: {
        DEFAULT: 'ring rounded ring-shifter-gray-200 flex',
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
              light: 'bg-status-success-light text-status-success-dark',
              dark: 'text-shifter-gray-200',
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
