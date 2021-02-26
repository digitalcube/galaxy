module.exports = {
  schema: {
    components: {
      card: {
        DEFAULT: 'border rounded border-shifter-gray-200',
        variants: {
          light: '',
          dark: 'text-shifter-purple-200',
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
