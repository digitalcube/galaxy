import { createContext } from 'react';
import { buttonTheme } from '../button/button.galaxy';

const defaultTheme = {
  // Button
  ...buttonTheme,
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
