import React from 'react';
import { Webhook } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Webhook,
  title: `Shifter/Dashboard/Patterns/Webhook`,
};

export const Schemas = () => {
  return <Webhook />;
};
