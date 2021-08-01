import { createContext } from 'react';

const defaultTheme = {
  // Button
  button: {
    base: [
      'align-bottom',
      'py-3',
      'px-4',
      'font-bold',
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
      large: 'px-5 py-3 rounded-lg',
      small: 'px-3 py-1 rounded-md text-sm',
      icon: {
        large: 'p-3 rounded-lg',
        small: 'p-2 rounded-md',
      },
      pagination: 'px-3 py-1 rounded-md text-xs',
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
      base: ['text-white', 'bg-purple-600', 'border', 'border-transparent'],
      active: [
        'active:bg-purple-600',
        'hover:bg-purple-700',
        'focus:ring',
        'focus:ring-purple-300',
      ],
      disabled: ['opacity-50', 'cursor-not-allowed'],
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
      base: 'text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent',
      active: [
        'active:bg-transparent',
        'hover:bg-gray-100',
        'focus:ring',
        'focus:ring-gray-300',
        'dark:hover:bg-gray-500',
        'dark:hover:text-gray-300',
        'dark:hover:bg-opacity-10',
      ],
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

/* eslint-disable-next-line */
export interface ThemeContextProps {
  theme: any;
  mode?: string | null;
  toggleMode?: any;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
});
