import React from 'react';
import { GuidesPage } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: GuidesPage,
  title: `Shifter/Dashboard/Pages`,
};

export const Guides = () => {
  return <GuidesPage />;
};
