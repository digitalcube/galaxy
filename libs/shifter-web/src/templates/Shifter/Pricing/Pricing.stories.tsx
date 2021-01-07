import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Pricing } from './Pricing';

export default {
  component: Pricing,
  title: `Shifter/Templates/Pricing`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Pricing />;
