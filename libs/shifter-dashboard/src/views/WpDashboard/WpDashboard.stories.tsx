import React from 'react';
import { WpDashboard } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: WpDashboard,
  title: `Shifter/Dashboard/Patterns/Deploys/WpDashboard`,
};

export const Schemas = () => {
  return <WpDashboard />;
};
