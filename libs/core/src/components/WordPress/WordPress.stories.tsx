import React from 'react';
import { WordPress } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: WordPress,
  title: `Galaxy/Icons/WordPress`,
};

export const Default = () => <WordPress />;
