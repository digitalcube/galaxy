import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Menu } from '../index';

export default {
  component: Menu,
  title: `Components/Menu`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Menu />;
};

export const Vertical = () => {
  return <Menu direction="column" />;
};
