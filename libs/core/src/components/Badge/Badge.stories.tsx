import React from 'react';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { badgeTheme } from './Badge.galaxy';
import { Badge, getVariants } from '@galaxy/core';

const { badge } = badgeTheme;

export default {
  ...defaultStorybookConfig,
  component: Badge,
  title: `Galaxy/Components/Badge`,
};

export const Example = () => {
  return <Badge />;
};
