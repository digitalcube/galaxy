import React from 'react';
import { FreeTierIcon } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: FreeTierIcon,
  title: `Galaxy/Icons/FreeTierIcon`,
};

export const Default = () => <FreeTierIcon />;
