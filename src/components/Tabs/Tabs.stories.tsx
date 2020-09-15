import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Tabs } from './Tabs';

export default {
  component: Tabs,
  title: `Components/Tabs`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Tabs />;
};
