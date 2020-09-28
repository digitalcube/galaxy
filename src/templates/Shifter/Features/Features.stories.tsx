import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Features } from './Features';

export default {
  component: Features,
  title: `Shifter/Templates/Features`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Features />;
