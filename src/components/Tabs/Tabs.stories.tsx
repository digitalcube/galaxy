import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Tabs } from './Tabs';

export default {
  component: Tabs,
  title: `Components/Tabs`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Tabs />;
};
