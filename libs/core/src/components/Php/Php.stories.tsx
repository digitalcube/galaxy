import React from 'react';
import { Php } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Php,
  title: `Galaxy/Components/Php`,
};

export const Default = () => <Php />;
