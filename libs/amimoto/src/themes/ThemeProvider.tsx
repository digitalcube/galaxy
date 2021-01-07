// galaxy.ts
import React from 'react';
import { ThemeProviderProps, ThemeProvider } from 'theme-ui';
import { amimoto } from './amimoto';

export function AmimotoThemeProvider<Theme = typeof amimoto>(
  props: Partial<ThemeProviderProps<Theme>>
): React.ReactElement {
  const theme = props.theme || amimoto;
  return <ThemeProvider theme={theme as any}>{props.children}</ThemeProvider>;
}
