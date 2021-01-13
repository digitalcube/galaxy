import React from 'react';

import { Logos } from './index';

import { defaultStorybookConfig } from '../../../.storybook/docs'
export default {
  ...defaultStorybookConfig,
  component: Logos,
  title: `Galaxy/Views/Logos`,


};

export const Default = () => {
  return <Logos />;
};
