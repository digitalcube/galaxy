module.exports = {
  schema: {
    components: {
      artifact: {
        DEFAULT:
          'ring rounded ring-shifter-gray-200 flex overflow-hidden shadow hover:shadow-lg transition-shadow',
        variants: {
          light: '',
          dark: 'text-shifter-purple-200',
        },
        components: {
          url: {
            DEFAULT: 'font-regular text-size-3 flex-initial',
            variants: {
              light: 'text-shifter-purple-primary',
              dark: 'text-shifter-gray-200',
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
        },
      },
    },
  },
};
