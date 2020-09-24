import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Benefits } from '../index';

export default {
  component: Benefits,
  title: `Containers/Benefits`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Overview = () => {
  return <Benefits />;
};
