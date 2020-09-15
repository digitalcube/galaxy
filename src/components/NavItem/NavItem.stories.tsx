import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Nav } from '../index';

export default {
  component: Nav,
  title: `Components/Nav`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Nav />;
};

export const Vertical = () => {
  return <Nav orientation="vertical" />;
};
