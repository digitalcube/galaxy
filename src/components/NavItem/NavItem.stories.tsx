import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { NavItem } from '../index';

export default {
  component: NavItem,
  title: `Galaxy/Components/NavItem`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <NavItem />;
};
