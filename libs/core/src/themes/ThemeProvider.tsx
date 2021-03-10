// galaxy.ts
import React, { FC, PropsWithChildren, useEffect } from 'react';
import {
  LinkTagType,
  LinkTagProvider,
} from '../lib/link-tag-provider/link-tag-provider';
import '../styles/style.css'

/// ###
const getInitialTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs === 'dark' ? 'dark' : 'light'
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'dark';
};

const rawSetTheme = (theme: string) => {
  // const root = window.document.documentElement;
  // const isDark = theme === 'dark';

  // root.classList.remove(isDark ? 'light' : 'dark');
  // root.classList.add(theme);

  localStorage.setItem('color-theme', theme);
};

export const ThemeContext = React.createContext<{
  theme: 'dark' | 'light';
  setTheme?: any;
}>({
  theme: 'light',
});

export const GalaxyThemeProvider: FC<PropsWithChildren<{
  internalLinkTag?: LinkTagType
  initialTheme?: 'dark' | 'light'
}>> = ({ initialTheme, children, internalLinkTag = 'a' }) => {
  const [theme, setTheme] = React.useState(getInitialTheme);


  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LinkTagProvider linkType={internalLinkTag}>
        {children}
      </LinkTagProvider>
    </ThemeContext.Provider>
  );
};
