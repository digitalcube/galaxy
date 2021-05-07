import React from 'react';

import { PricingTable } from './PricingTable';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: PricingTable,
  title: `Galaxy/Components/PricingTable`,
};

export const Example = () => {
  return <PricingTable />;
};
