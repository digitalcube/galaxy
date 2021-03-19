import React from 'react';
import { Teams } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Teams,
  title: `Shifter/Dashboard/Pages/Teams/State`,
};

export const Zero = () => {
  return <Teams />;
};
