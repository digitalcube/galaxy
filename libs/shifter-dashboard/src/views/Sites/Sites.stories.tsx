import React from 'react';
import { Sites } from '@galaxy/shifter-dashboard';
import { fakerSites } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Sites,
  title: `Shifter/Dashboard/Patterns/Sites`,
};

export const Default = () => {
  return <Sites sites={fakerSites as any} />;
};
