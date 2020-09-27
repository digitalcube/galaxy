import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Animation } from '../index';

export default {
  component: Animation,
  title: `Components/Animation`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Overview = () => {
  return <Animation />;
};
