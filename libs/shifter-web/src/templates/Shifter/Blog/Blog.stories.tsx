import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Blog } from './Blog';

export default {
  component: Blog,
  title: `Shifter/Templates/Blog`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Blog />;
