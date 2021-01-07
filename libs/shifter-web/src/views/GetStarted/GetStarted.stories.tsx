import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { GetStarted } from './GetStarted';

export default {
  component: GetStarted,
  title: `Galaxy/Views/GetStarted`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <GetStarted />;
};

export const Variants = () => {
  return <GetStarted variant="1" />;
};
