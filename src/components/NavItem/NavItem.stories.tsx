import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Nav } from '../index';

export default {
  component: Nav,
  title: `Galaxy/Components/Nav`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Nav />;
};

export const Vertical = () => {
  return <Nav direction="column" />;
};
