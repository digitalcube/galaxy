module.exports = {
  schema: {
    components: {
      site: {
        DEFAULT: 'ring rounded ring-shifter-gray-200',
        variants: {
          light: 'bg-white',
          dark: 'bg-shifter-purple-800 text-shifter-purple-200',
        },
        components: {
          name: {
            DEFAULT: 'font-strong text-size-6',
            variants: {
              light: 'text-shifter-purple-700',
              dark: 'text-shifter-gray-200',
            },
          },
          url: {
            DEFAULT: 'font-regular text-size-3',
            variants: {
              light: 'text-shifter-purple-primary',
              dark: 'text-shifter-gray-200',
            },
          },
        },
      },
    },
  },
};
