import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Copyright } from './Copyright';

export default {
  component: Copyright,
  title: `Galaxy/Components/Copyright`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Copyright />;
};
