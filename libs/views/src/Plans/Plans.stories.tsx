import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Plans } from './Plans';

export default {
  component: Plans,
  title: `Galaxy/Components/Plans`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Plans />;
};
