// galaxy.ts
import React from 'react';
import { ThemeProviderProps, ThemeProvider } from 'theme-ui';
import { galaxy } from './galaxy';

export function GalaxyThemeProvider<Theme = typeof galaxy>(
  props: ThemeProviderProps<Theme>
): React.ReactElement {
  const theme = props.theme || galaxy;
  return <ThemeProvider theme={theme as any}>{props.children}</ThemeProvider>;
}
