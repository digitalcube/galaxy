// galaxy.ts
import React from 'react';
import { ThemeProviderProps, ThemeProvider } from 'theme-ui';
import { shifter } from './shifter';

export function ShifterThemeProvider<Theme = typeof shifter>(
  props: Partial<ThemeProviderProps<Theme>>
): React.ReactElement {
  const theme = props.theme || shifter;
  return <ThemeProvider theme={theme as any}>{props.children}</ThemeProvider>;
}
