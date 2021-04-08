import React from 'react';
import { Live } from './Live';
import { fakerOverview } from '@galaxy/core';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Live,
  title: `Shifter/Dashboard/Pages/Sites/Site/Live`,
};

export const Overview = () => {
  return <Live {...fakerOverview} />;
};
