import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Galaxy } from './Galaxy';

export default {
  component: Galaxy,
  title: `Components/Galaxy`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Galaxy>
    I could calculate your chance of survival, but you won’t like it.” –Marvin
  </Galaxy>
);
