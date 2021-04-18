import React from 'react';

import { Pricing } from './Pricing';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Pricing,
  title: `Galaxy/Components/Pricing`,
};

export const Example = () => {
  return <Pricing />;
};
