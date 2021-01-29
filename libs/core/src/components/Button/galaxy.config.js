module.exports = {
  schema: {
    components: {
      button: {
        DEFAULT: 'font-bold py-2 px-4 rounded',
        variants: {
          primary: 'bg-shifter-purple-primary hover:bg-shifter-purple-600 text-white',
          danger: 'bg-status-danger-default text-white',
          white: 'bg-white text-black',
          ghost: 'bg-transparent text-black',
          success: 'bg-status-success-default text-white',
        },
      },
    },
  },
};
