import React from 'react';
import { Dashboard } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Dashboard,
  title: `Shifter/Dashboard/Patterns/Dashboard`,
};

export const Example = () => {
  return <Dashboard />;
};
