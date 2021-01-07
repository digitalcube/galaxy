import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Logos } from './index';

export default {
  component: Logos,
  title: `Galaxy/Views/Logos`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Logos />;
};
