import React, { FC } from 'react';
import { GalaxyThemeProvider, GalaxyThemeProviderProps } from '@galaxy/core'
import { InternalLinkBaseProvider, InternalLinkBaseProviderProps } from '../internal-path-provider/internal-path-provider';

export type ShifterDashboardThemeProviderProps = GalaxyThemeProviderProps & InternalLinkBaseProviderProps;

export const ShifterDashboardThemeProvider: FC<ShifterDashboardThemeProviderProps> = (props) => (
    <InternalLinkBaseProvider {...props}>
      <GalaxyThemeProvider {...props} />
    </InternalLinkBaseProvider>
  )
