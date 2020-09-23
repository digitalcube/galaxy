import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Nav } from '../index';
import { Flex, NavLink } from 'theme-ui';

export default {
  component: Nav,
  title: `Components/Nav`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Nav />;
};

export const Vertical = () => {
  return <Nav kind="column" />;
};
