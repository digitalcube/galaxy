import React from 'react';
import { Domains } from '@galaxy/views';
import { fakerSiteDomains } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Domains,
  title: `Shifter/Dashboard/Patterns/Domains`,
};

export const Default = () => {
  return <Domains domains={fakerSiteDomains as any} />;
};
