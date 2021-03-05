// galaxy.ts
import React, { useEffect } from 'react';
import { ThemeProviderProps } from 'theme-ui';
import {
  LinkTagType,
  LinkTagProvider,
} from '../lib/link-tag-provider/link-tag-provider';
import { galaxy } from './galaxy';

export type GalaxyThemeProviderProps<Theme = typeof galaxy> = Partial<
  ThemeProviderProps<Theme>
> & {
  linkType: LinkTagType;
};

export function GalaxyThemeProvider<Theme = typeof galaxy>(
  props: GalaxyThemeProviderProps<Theme>
): React.ReactElement {
  const theme = props.theme || galaxy;
  return (
    <ThemeProvider initialTheme={galaxy}>
      <LinkTagProvider linkType={props.linkType}>
        {props.children}
      </LinkTagProvider>
    </ThemeProvider>
  );
}

/// ###
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'dark';
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    // const root = window.document.documentElement;
    // const isDark = theme === 'dark';

    // root.classList.remove(isDark ? 'light' : 'dark');
    // root.classList.add(theme);
    console.log(theme);

    localStorage.setItem('color-theme', theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
