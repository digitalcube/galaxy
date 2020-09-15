import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Menu } from '../index';

export default {
  component: Menu,
  title: `Components/Menu`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Menu />;
};

export const Vertical = () => {
  return <Menu orientation="vertical" />;
};
