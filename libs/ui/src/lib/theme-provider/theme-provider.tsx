import { ReactNode } from 'react';
import { ThemeContext } from '../theme-context/theme-context';

/* eslint-disable-next-line */
export interface ThemeProviderProps {
  children: ReactNode;
  value?: any;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, value } = props;
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
