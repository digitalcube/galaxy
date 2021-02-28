import React from 'react';
import { Webhooks } from '@galaxy/views';
import { fakerSiteWebhooks } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Webhooks,
  title: `Shifter/Dashboard/Patterns/Webhooks`,
};

export const Default = () => {
  return <Webhooks webhooks={fakerSiteWebhooks} />;
};
