import React from 'react';
import { Webhook } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Webhook,
  title: `Shifter/Dashboard/Patterns/Webhooks/Webhook`,
};

export const Schemas = () => {
  return <Webhook />;
};
