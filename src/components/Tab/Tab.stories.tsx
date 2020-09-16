import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Tab } from '../index';

export default {
  component: Tab,
  title: `Components/Tab`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Tab />;
};
