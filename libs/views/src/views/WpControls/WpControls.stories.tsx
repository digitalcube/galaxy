import React from 'react';
import { WpControls } from '@galaxy/views';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: WpControls,
  title: `Shifter/Dashboard/Patterns/WpControls`,
};

export const Schemas = () => {
  return <WpControls />;
};
