module.exports = {
  schema: {
    components: {
      select: {
        DEFAULT:
          'font-strong py-2 px-4 focus:ring-shifter-magenta-primary rounded',
        variants: {
          primary:
            'bg-shifter-purple-primary hover:bg-shifter-purple-600 focus:ring focus:bg-shifter-purple-500 text-white disabled:bg-shifter-gray-200 disabled:text-shifter-gray-300',
          danger:
            'bg-status-danger-default text-white hover:bg-status-danger-dark',
          white:
            'bg-white text-shifter-purple-primary hover:bg-shifter-gray-100 hover:text-shifter-purple-700',
          ghost:
            'bg-transparent text-shifter-purple-primary hover:bg-shifter-purple-200 focus:bg-transparent',
          success:
            'bg-status-success-default text-white hover:bg-status-success-dark',
        },
      },
    },
  },
};
