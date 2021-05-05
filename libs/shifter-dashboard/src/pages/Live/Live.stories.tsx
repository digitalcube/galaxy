import React from 'react';
import { Live } from './Live';
import { fakerOverview } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Live,
  title: `Shifter/Dashboard/Pages/Sites/Site/Live/Overview`,
};

export const Example = () => {
  return <Live {...fakerOverview} />;
};
