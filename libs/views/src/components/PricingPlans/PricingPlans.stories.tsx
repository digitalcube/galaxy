import React from 'react';

import { PricingPlans } from './PricingPlans';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: PricingPlans,
  title: `Galaxy/Components/PricingPlans`,
};

export const Example = () => {
  return <PricingPlans />;
};
