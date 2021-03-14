import React from 'react';
import { AutoPublish } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: AutoPublish,
  title: `Shifter/Dashboard/Patterns/AutoPublish`,
};

export const Example = () => {
  return <AutoPublish />;
};
