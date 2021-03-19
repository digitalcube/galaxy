import React from 'react';
import { Deploys } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Deploys,
  title: `Shifter/Dashboard/Patterns/Deploys`,
};

export const Example = () => {
  return <Deploys />;
};
