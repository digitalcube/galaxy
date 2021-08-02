import { ReactNode, useLayoutEffect, useMemo } from 'react';
import { ThemeContext, defaultTheme } from '@galaxy/ui';
import { DeepMerge } from '../../utils/deep-merge/deep-merge';
import UseDarkMode from '../../utils/use-dark-mode/use-dark-mode';

/* eslint-disable-next-line */
export interface GalaxyProps {
  children: ReactNode;
  theme?: Record<string, unknown>;
  dark?: boolean;
  usePreferences?: boolean;
}

export function Galaxy(props: GalaxyProps) {
  const { children, theme: customTheme, dark, usePreferences = false } = props;

  const mergedTheme = DeepMerge(defaultTheme, customTheme);
  const [mode, setMode, toggleMode] = UseDarkMode(usePreferences);

  useLayoutEffect(() => {
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
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default Galaxy;
