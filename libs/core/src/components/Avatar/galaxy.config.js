module.exports = {
  schema: {
    components: {
      avatar: {
        DEFAULT:
          'group w-6 h-6 rounded-full overflow-hidden text-center table cursor-pointer',
        variants: {
          light: 'bg-shifter-purle-200',
          dark: 'bg-shifter-purple-400',
        },
        components: {
          name: {
            DEFAULT: 'hidden group-hover:table-cell align-middle text-size-8',
            variants: {
              light: 'text-shifter-purple-700',
              dark: 'text-shifter-gray-200',
            },
          },
          image: {
            DEFAULT: 'relative inline object-cover w-6 h-6 border rounded-full',
            variants: {
              light: 'border-white',
              dark: 'border-shifter-purple-200',
            },
          },
        },
      },
    },
  },
};
