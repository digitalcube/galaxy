// galaxy.ts
import React from 'react';
import { GalaxyThemeProvider,GalaxyThemeProviderProps } from '@galaxy/core'
import { shifter } from './shifter';

export function ShifterThemeProvider<Theme = typeof shifter>(
  props: GalaxyThemeProviderProps<Theme>
): React.ReactElement {
  const theme = props.theme || shifter;
  return (
    <GalaxyThemeProvider {...props} theme={theme as any}>
      {props.children}
    </GalaxyThemeProvider>);
}
