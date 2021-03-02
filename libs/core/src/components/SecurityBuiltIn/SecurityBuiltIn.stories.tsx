import React from 'react';
import { SecurityBuiltIn } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SecurityBuiltIn,
  title: `Galaxy/Icons/SecurityBuiltIn`,
};

export const Default = () => <SecurityBuiltIn />;
