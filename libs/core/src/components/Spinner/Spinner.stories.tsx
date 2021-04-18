import React from 'react';
import { Spinner } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Spinner,
  title: `Galaxy/Icons/Spinner`,
};

export const Default = () => <Spinner />;
