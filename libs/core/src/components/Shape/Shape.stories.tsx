import React from 'react';

import { Shape } from '../index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Shape,
  title: `Galaxy/Components/Shape`,
};

export const Default = () => {
  return <Shape />;
};
