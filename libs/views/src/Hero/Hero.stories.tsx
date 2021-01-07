import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Hero } from './index';

export default {
  component: Hero,
  title: `Galaxy/Views/Hero`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Hero />;
};
