import React from 'react';
import { Toggle } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Toggle,
  title: `Galaxy/Components/Toggle`,
};

export const Active = () => {
  return <Toggle />;
};
