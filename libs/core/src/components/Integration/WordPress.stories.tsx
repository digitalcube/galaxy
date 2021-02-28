import React from 'react';
import { Integration } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Integration,
  title: `Galaxy/Components/Integration`,
};

export const Default = () => <Integration />;
