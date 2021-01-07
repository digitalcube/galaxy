import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FrontPage } from './FrontPage';

export default {
  component: FrontPage,
  title: `Galaxy/Templates/FrontPage`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <FrontPage />;
