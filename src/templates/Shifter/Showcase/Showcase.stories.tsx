import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Showcase } from './Showcase';

export default {
  component: Showcase,
  title: `Shifter/Templates/Showcase`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Showcase />;
