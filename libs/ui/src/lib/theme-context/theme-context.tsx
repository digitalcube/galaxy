import { createContext } from 'react';

const defaultTheme = {
  input: {
    base: 'block',
  },
  button: {
    base: 'inline-flex',
    block: 'w-full',
    size: {
      regular: 'px-4 py-2',
      small: 'px-3 py-1',
      icon: {
        large: 'p-3 rounded-lg',
        small: 'p-2 rounded-md',
      },
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
