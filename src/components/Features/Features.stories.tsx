import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Features } from './Features';

export default {
  component: Features,
  title: `Containers/Features`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Features />;
};
