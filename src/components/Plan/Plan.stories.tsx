import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Plan } from './Plan';

export default {
  component: Plan,
  title: `Components/Plan`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Plan />;
