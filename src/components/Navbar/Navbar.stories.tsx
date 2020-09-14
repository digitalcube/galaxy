import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Navbar } from '../index';

export default {
  component: Navbar,
  title: `Components/Navbar`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Navbar>Hello world</Navbar>;
};
