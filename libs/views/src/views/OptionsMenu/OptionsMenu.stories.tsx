import React from 'react';
import { OptionsMenu } from '@galaxy/views';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: OptionsMenu,
  title: `Shifter/Dashboard/Patterns/OptionsMenu`,
};

export const Example = () => {
  return <OptionsMenu />;
};
