const buttonBase = ['py-3', 'px-4', 'font-bold', 'inline-flex'];

export const buttonTheme = {
  button: {
    DEFAULT: [
      'border-transparent',
      'focus:outline-none',
      'items-center',
      'rounded',
      'text-size-4',
      'transition'
    ],
    primary: [
      ...buttonBase,
      'whitespace-nowrap',
      'bg-purple-500',
      'disabled:bg-gray-200',
      'disabled:text-gray-300',
      'focus:border-2',
      'border-none',
      'focus:border-focus',
      'hover:bg-purple-800',
      'text-white',
    ],
    danger: [
      ...buttonBase,
      'bg-status-danger-default',
      'text-white',
      'hover:bg-status-danger-dark',
    ],
    white: [
      ...buttonBase,
      'bg-white',
      'border-white',
      'hover:border-gray-100',
      'text-purple-primary',
      'hover:bg-gray-100',
      'hover:text-purple-700',
    ],
    success: [
      ...buttonBase,
      'bg-status-success-default',
      'text-white',
      'hover:bg-status-success-dark',
      'font-strong',
    ],
    link: ['p-0', 'border-none', 'text-gray-800', 'hover:text-purple-800'],
    outlinePrimary: [
      ...buttonBase,
      'bg-transparent',
      'ring-2',
      'ring-purple-primary',
      'hover:bg-purple-600',
      'hover:text-white',
      'focus:ring',
      'focus:bg-purple-500',
      'text-purple-primary',
      'disabled:bg-gray-200',
      'disabled:text-gray-300',
    ],
  },
};
