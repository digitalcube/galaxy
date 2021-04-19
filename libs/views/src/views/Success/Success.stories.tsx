import React from 'react';

import { Success } from './Success';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Success,
  title: `Galaxy/Components/Success`,
};

export const Example = () => {
  return <Success />;
};
