import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Slider } from '../index';

export default {
  component: Slider,
  title: `Galaxy/Components/Slider`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Slider />;
};
