module.exports = {
  schema: {
    components: {
      input: {
        DEFAULT:
          'w-full transition pl-10 py-2 pr-4 ring focus:ring-shifter-magenta-primary focus:outline-none',
        variants: {
          primary:
            'rounded bg-white ring-shifter-purple-primary hover:ring-shifter-purple-600 focus:ring focus:ring-shifter-purple-500 text-white disabled:ring-shifter-gray-200 disabled:text-shifter-gray-300',
          danger:
            'rounded bg-white ring-status-danger-default text-white hover:ring-status-danger-dark',
          white:
            'rounded bg-white text-shifter-purple-primary hover:ring-shifter-gray-100 hover:text-shifter-purple-700',
          ghost:
            'rounded-none border-b-2 border-transparent hover:border-shifter-purple-primary hover:border-b-2 focus:border-shifter-purple-primary focus:border-b-2 bg-transparent ring-transparent text-shifter-purple-primary focus:ring-0',
          success:
            'rounded bg-white ring-status-success-default text-white hover:ring-status-success-dark',
        },
      },
    },
  },
};
