import React from 'react';
import { Domain } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: Domain,
  title: `Shifter/Dashboard/Patterns/Domain`,
};

export const Example = () => {
  return <Domain />;
};
