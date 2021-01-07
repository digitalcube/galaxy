import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Resources } from './Resources';

export default {
  component: Resources,
  title: `Galaxy/Views/Resources`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Resources />;
};
