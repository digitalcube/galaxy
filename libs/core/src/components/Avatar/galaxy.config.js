module.exports = {
  schema: {
    components: {
      avatar: {
        DEFAULT:
          'group rounded-full overflow-hidden text-center table cursor-pointer',
        variants: {
          light: 'bg-shifter-purle-200',
          dark: 'bg-shifter-purple-400',
        },
        components: {
          name: {
            DEFAULT:
              'relative inline group-hover:table-cell rounded-full w-6 h-6 align-middle text-size-2 p-1',
            variants: {
              light: 'text-shifter-purple-700 bg-shifter-purple-200',
              dark: 'text-shifter-gray-200 bg-shifter-purple-600',
            },
          },
          image: {
            DEFAULT: 'relative w-6 h-6 inline object-cover rounded-full',
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
