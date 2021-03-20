import React from 'react';
import { AutoPublish } from '@galaxy/shifter-dashboard';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: AutoPublish,
  title: `Shifter/Dashboard/Patterns/Deploys/AutoPublish`,
};

export const Example = () => {
  return <AutoPublish />;
};
