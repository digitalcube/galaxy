import React from 'react';
import { TeamsPage } from './TeamsPage';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: TeamsPage,
  title: `Shifter/Dashboard/Pages`,
};

export const Teams = () => {
  return <TeamsPage />;
};
