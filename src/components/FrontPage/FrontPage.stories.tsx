import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FrontPage } from './FrontPage';

export default {
  component: FrontPage,
  title: `Templates/FrontPage`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => <FrontPage />;
