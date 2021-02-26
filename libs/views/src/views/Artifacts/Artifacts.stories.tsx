import React from 'react';
import { Sites } from '@galaxy/views';
import { fakerGenerator } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Sites,
  title: `Shifter/Dashboard/Patterns/Sites`,
};

const siteSchema = {
  name: '{{company.companyName}}',
  url: '{{internet.url}}',
  state: 'state',
  team: '{{company.companyName}}',
  img: '{{image.image}}',
  progress: 'progress',
};

const sites = fakerGenerator(siteSchema, 1, 20);

export const Default = () => {
  return <Sites sites={sites} />;
};
