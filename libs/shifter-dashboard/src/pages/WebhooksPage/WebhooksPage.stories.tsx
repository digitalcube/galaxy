import React from 'react';
import { WebhooksPage } from './WebhooksPage';
import { fakerMediaCdn, fakerSiteWebhooks } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: WebhooksPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/Dev`,
};

export const Webhooks = () => {
  return <WebhooksPage {...fakerSiteWebhooks as any} />;
};
