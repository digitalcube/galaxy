import React from 'react';
import { Domains } from '@galaxy/shifter-dashboard';
import { fakerSiteDomains } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Domains,
  title: `Shifter/Dashboard/Patterns/Domains`,
};

export const Default = () => {
  console.log(fakerSiteDomains)
  return <Domains domains={fakerSiteDomains as any} />;
};
