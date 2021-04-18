import React from 'react';

import { Checkout } from './Checkout';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Checkout,
  title: `Galaxy/Components/Checkout`,
};

export const Example = () => {
  return <Checkout />;
};
