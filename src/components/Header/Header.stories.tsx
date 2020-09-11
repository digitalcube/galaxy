import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Header } from '../index';

export default {
  component: Header,
  title: `Containers/Header`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Header />;
};
