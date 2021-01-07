import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Solutions } from './index';

export default {
  component: Solutions,
  title: `Galaxy/Views/Solutions`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Solutions />;
};
