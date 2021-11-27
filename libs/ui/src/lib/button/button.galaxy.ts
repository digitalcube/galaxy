// const buttonBase = ['py-3', 'px-4', 'font-bold', 'inline-flex'];

export const buttonTheme = {
  button: {
    base: [
      'whitespace-nowrap',
      'align-bottom',
      'py-3',
      'px-4',
      'font-size-6',
      'inline-flex',
      'items-center',
      'justify-center',
      'cursor-pointer',
      'transition-colors',
      'duration-150',
      'focus:outline-none',
    ],
    block: 'w-full',
    size: {
      large: 'px-5 py-3',
      small: 'px-3 py-1 text-sm',
      icon: {
        large: 'p-3',
        small: 'p-2',
      },
      pagination: 'px-3 py-1 text-xs',
    },
    // styles applied to the SVG icon
    icon: {
      larger: 'h-5 w-5',
      large: 'h-5 w-5',
      small: 'h-3 w-3',
      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1',
    },
    primary: {
      base: [
        'text-white',
        'bg-black',
        'border',
        'border-transparent',
        'rounded',
      ],
      active: [
        'active:bg-gray-600',
        'hover:bg-gray-700',
        'focus:ring',
        'focus:ring-gray-300',
      ],
      disabled: ['opacity-50', 'cursor-not-allowed'],
    },
    white: {
      base: ['text-purple-500', 'bg-white'],
      active: [
        'active:bg-gray-600',
        'hover:bg-gray-100',
        'focus:ring',
        'focus:ring-purple-300',
      ],
      disabled: ['opacity-50', 'cursor-not-allowed'],
    },
    outlinePrimary: {
      base: [
        'text-purple-500',
        'border-purple-500',
        'border-2',
        'dark:text-gray-400',
        'focus:outline-none',
      ],
      active: [
        'active:bg-transparent',
        'hover:border-gray-500',
        'focus:border-gray-500',
        'active:text-gray-500',
        'focus:ring',
        'focus:ring-gray-300',
      ],
      disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
    },
    outline: {
      base: [
        'text-gray-600',
        'border-gray-300',
        'border',
        'dark:text-gray-400',
        'focus:outline-none',
      ],
      active: [
        'active:bg-transparent',
        'hover:border-gray-500',
        'focus:border-gray-500',
        'active:text-gray-500',
        'focus:ring',
        'focus:ring-gray-300',
      ],
      disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
    },
    link: {
      base: ['p-0', 'text-gray-800'],
      active: ['focus:outline-none', 'hover:text-purple-800'],
      disabled: ['opacity-50', 'cursor-not-allowed'],
    },
    // this is the button that lives inside the DropdownItem
    dropdownItem: {
      base: [
        'inline-flex',
        'items-center',
        'cursor-pointer',
        'w-full',
        'px-2',
        'py-1',
        'text-sm',
        'font-medium',
        'transition-colors',
        'duration-150',
        'rounded-md',
        'hover:bg-gray-100',
        'hover:text-gray-800',
        'dark:hover:bg-gray-800',
        'dark:hover:text-gray-200',
      ],
    },
  },
};
