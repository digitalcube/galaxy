import React from 'react';
import { Select } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Select,
  title: `Galaxy/Components/Select`,
};

export const Example = () => {
  return <Select />;
};
