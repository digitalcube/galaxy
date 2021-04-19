import React from 'react';

import { ThankYou } from './ThankYou';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: ThankYou,
  title: `Galaxy/Components/ThankYou`,
};

export const Example = () => {
  return <ThankYou />;
};
