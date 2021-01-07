import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from './Box';

export default {
  component: Box,
  title: `Galaxy/Components/Box`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Box />;
};
