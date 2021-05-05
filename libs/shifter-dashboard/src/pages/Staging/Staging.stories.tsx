import React from 'react';
import { Staging as StagingPage } from './Staging';
import { fakerStaging } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: StagingPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/Staging`,
};

export const Example = () => {
  return <StagingPage {...fakerStaging} />;
};
