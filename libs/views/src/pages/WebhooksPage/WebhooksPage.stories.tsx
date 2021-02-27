import React from 'react';
import { WebhooksPage } from '@galaxy/views';
import { fakerMediaCdn } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: WebhooksPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/Dev/Webhooks/State`,
};

export const Zero = () => {
  return <WebhooksPage {...fakerMediaCdn} />;
};
