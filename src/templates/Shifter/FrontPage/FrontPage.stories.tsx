import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FrontPage } from '../../../templates';

export default {
  component: FrontPage,
  title: `Shifter/Templates/FrontPage`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <FrontPage />;
