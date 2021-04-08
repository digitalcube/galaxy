import React from 'react';
import { Staging as StagingPage } from './Staging';
import { fakerStaging } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: StagingPage,
  title: `Shifter/Dashboard/Pages/Sites/Site`,
};

export const Staging = () => {
  return <StagingPage {...fakerStaging} />;
};
