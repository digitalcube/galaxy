import React from 'react';
import { SitesPage } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SitesPage,
  title: `Shifter/Dashboard/Pages`,
};

export const Sites = () => {
  return <SitesPage />;
};
