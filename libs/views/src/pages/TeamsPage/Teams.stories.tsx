import React from 'react';
import { TeamsPage } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: TeamsPage,
  title: `Shifter/Dashboard/Pages/Teams/State`,
};

export const Zero = () => {
  return <TeamsPage />;
};
