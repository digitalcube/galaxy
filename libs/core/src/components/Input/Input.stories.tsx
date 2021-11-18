import React from 'react';
import { Input } from './Input';

import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: Input,
  title: `Galaxy/Components/Input`,
};

export const Example = () => {
  return <Input />;
};
