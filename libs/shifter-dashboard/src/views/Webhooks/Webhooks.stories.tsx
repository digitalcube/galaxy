import React from 'react';
import { Webhooks } from '@galaxy/shifter-dashboard';
import { fakerSiteWebhooks } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Webhooks,
  title: `Shifter/Dashboard/Patterns/Webhooks`,
};

export const Default = () => {
  return <Webhooks webhooks={fakerSiteWebhooks} />;
};
