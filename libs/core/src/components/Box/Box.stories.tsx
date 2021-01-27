import React from 'react';

import { Box } from './Box';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Box,
  title: `Galaxy/Components/Box`,
};

export const Default = () => {
  return <Box />;
};
