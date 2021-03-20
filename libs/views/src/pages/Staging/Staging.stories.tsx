import React from 'react';
import { Staging as StagingPage } from '@galaxy/views';
import { fakerStaging } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: StagingPage,
  title: `Shifter/Dashboard/Pages/Sites/Site`,
};

export const Staging = () => {
  return <StagingPage {...fakerStaging} />;
};
