import React from 'react';
import { WpAdmin } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: WpAdmin,
  title: `Shifter/Dashboard/Patterns/Deploys/WpAdmin`,
};

export const Schemas = () => {
  return <WpAdmin />;
};
