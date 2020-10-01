import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Shape } from '../index';

export default {
  component: Shape,
  title: `Galaxy/Components/Shape`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Shape />;
};
