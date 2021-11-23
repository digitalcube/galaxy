import { ModeProps } from '@galaxy/interfaces';
import { useEffect, useState } from 'react';

export const UseDarkMode = (
  usePreferences: boolean
): [
  ModeProps,
  React.Dispatch<React.SetStateAction<ModeProps>> | null,
  (() => void) | null
] => {
  if (!usePreferences) return [null, null, null];

  const [mode, setMode] = useState<ModeProps>(null);

  const toggleMode = () => {
    if (mode === 'light') {
      document.documentElement.className = '';
      document.documentElement.classList.add('dark');
      setMode('dark');
    } else {
      document.documentElement.className = '';
      document.documentElement.classList.add('light');
      setMode('light');
    }
  };

  useEffect(() => {
    const userPreference =
      !!window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    setMode(
      // use stored theme; fallback to user preference
      window.localStorage.getItem('theme') ||
        (userPreference ? 'dark' : 'light')
    );
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem('theme', mode);
      document.documentElement.classList.add(mode);
    }
  }, [mode]);

  return [mode, setMode, toggleMode];
};

export default UseDarkMode;
