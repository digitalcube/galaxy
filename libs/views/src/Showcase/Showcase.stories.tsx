import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Showcase } from './index';

export default {
  component: Showcase,
  title: `Galaxy/Views/Showcase`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Showcase />;
};
