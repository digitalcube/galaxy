import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Navbar } from '../index';

export default {
  component: Navbar,
  title: `Galaxy/Components/Navbar`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Navbar>Hello world</Navbar>;
};
