module.exports = {
  schema: {
    components: {
      card: {
        DEFAULT: 'px-3 py-6 ring rounded ring-shifter-gray-200',
        variants: {
          light: 'bg-white',
          dark: 'bg-shifter-purple-800 text-shifter-purple-200',
        },
        components: {
          heading: {
            DEFAULT: 'font-regular',
            variants: {
              light: 'text-shifter-purple-700',
              dark: 'text-shifter-gray-200',
            },
          },
        },
      },
    },
  },
};
