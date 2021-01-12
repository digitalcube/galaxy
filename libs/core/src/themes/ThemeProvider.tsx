// galaxy.ts
import React from 'react';
import { ThemeProviderProps, ThemeProvider } from 'theme-ui';
import { LinkTagType, LinkTagProvider } from '../lib/link-tag-provider/link-tag-provider';
import { galaxy } from './galaxy';

export type GalaxyThemeProviderProps<Theme = typeof galaxy> = Partial<ThemeProviderProps<Theme>>
& {
  linkType: LinkTagType
}

export function GalaxyThemeProvider<Theme = typeof galaxy>(
  props: GalaxyThemeProviderProps<Theme>
): React.ReactElement {
  const theme = props.theme || galaxy;
  return (
    <ThemeProvider theme={theme as any}>
      <LinkTagProvider linkType={props.linkType}>
        {props.children}
      </LinkTagProvider>
    </ThemeProvider>
  );
}
