import React from 'react';

import { Copyright } from './Copyright';

import { defaultStorybookConfig } from '../../../.storybook/docs'
export default {
  ...defaultStorybookConfig,
  component: Copyright,
  title: `Galaxy/Components/Copyright`,


};

export const Default = () => {
  return <Copyright />;
};
