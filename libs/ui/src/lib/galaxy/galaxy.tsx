import { ReactNode, useEffect, useMemo } from 'react';
import { ThemeContext, defaultTheme } from '../theme-context/theme-context';
import { UseDarkMode, DeepMerge } from '@galaxy/utils';

/* eslint-disable-next-line */
export interface GalaxyProps {
  children?: ReactNode;
  theme?: Record<string, unknown>;
  dark?: boolean;
  usePreferences?: boolean;
}

export function Galaxy(props: GalaxyProps) {
  const { children, theme: customTheme, dark, usePreferences = false } = props;
  const mergedTheme = DeepMerge(defaultTheme, customTheme);
  const [mode, setMode, toggleMode] = UseDarkMode(usePreferences);

  useEffect(() => {
    if (dark) {
      if (setMode != null) {
        setMode('dark');
      }
      document.documentElement.classList.add(`theme-dark`);
    }
  }, [dark, setMode]);

  const value = useMemo(
    () => ({
      theme: mergedTheme,
      mode,
      toggleMode,
    }),
    [mode, mergedTheme, toggleMode]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children ? children : ''}
    </ThemeContext.Provider>
  );
}

export default Galaxy;
