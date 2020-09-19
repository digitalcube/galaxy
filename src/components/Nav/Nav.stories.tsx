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
  return <Nav direction="column" />;
};

export const ThemeUI = () => {
  return (
    <Flex sx={{ flexDirection: 'column' }} as="nav">
      <NavLink href="#!">Home</NavLink>
      <NavLink href="#!">Blog</NavLink>
      <NavLink href="#!">About</NavLink>
    </Flex>
  );
};
