import React from 'react';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { badgeTheme } from './badge.galaxy';
import { Badge } from '@galaxy/core';

const { badge } = badgeTheme;

export default {
  ...defaultStorybookConfig,
  component: Badge,
  title: `Galaxy/Components/Badge`,
};

export const Example = () => {
  return <Badge />;
};
