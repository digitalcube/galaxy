import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Slider } from '../index';

export default {
  component: Slider,
  title: `Galaxy/Containers/Slider`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Slider />;
};
