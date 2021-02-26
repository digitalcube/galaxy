import React from 'react';

import { Toggle } from './Toggle';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Toggle,
  title: `Galaxy/Components/Toggle`,
};

export const On = () => {
  return <Toggle />;
};
