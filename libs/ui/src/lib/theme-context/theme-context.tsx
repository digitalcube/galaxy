import { createContext } from 'react';
import { buttonTheme } from '../button/button.galaxy';

export const defaultTheme = {
  // Button
  ...buttonTheme,
};

/* eslint-disable-next-line */
export interface ThemeContextProps {
  theme: any;
  mode?: Mode;
  toggleMode?: any;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
});
