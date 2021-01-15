import React from 'react';

import { Slider } from '../index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Slider,
  title: `Galaxy/Components/Slider`,
};

export const Default = () => {
  return <Slider />;
};
