export const buttonTheme = {
  button: {
    DEFAULT: 'font-strong focus:ring-shifter-magenta-primary rounded',
    variants: {
      outline: {
        primary:
          'py-2 px-4 bg-transparent ring-2 ring-shifter-purple-primary hover:bg-shifter-purple-600 hover:text-white focus:ring focus:bg-shifter-purple-500 text-shifter-purple-primary disabled:bg-shifter-gray-200 disabled:text-shifter-gray-300',
      },
      primary:
        'py-2 px-4 bg-shifter-purple-primary hover:bg-shifter-purple-600 focus:ring focus:bg-shifter-purple-500 text-white disabled:bg-shifter-gray-200 disabled:text-shifter-gray-300',
      danger:
        'py-2 px-4 bg-status-danger-default text-white hover:bg-status-danger-dark',
      white:
        'py-2 px-4 bg-white text-shifter-purple-primary hover:bg-shifter-gray-100 hover:text-shifter-purple-700',
      ghost:
        'py-2 px-4 bg-transparent text-shifter-purple-primary hover:bg-shifter-purple-200 focus:bg-transparent',
      success:
        'py-2 px-4 bg-status-success-default text-white hover:bg-status-success-dark',
      link: 'p-0',
    },
  },
};
