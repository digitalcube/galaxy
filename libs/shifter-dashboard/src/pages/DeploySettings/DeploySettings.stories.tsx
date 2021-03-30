import React from 'react';
import { DeploySettings as DeploySettingsPage } from './DeploySettings';
import { fakerDeploySettings } from '@galaxy/core';
import { defaultStorybookConfig } from '../../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: DeploySettingsPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/Live`,
};

export const Subdirectory = () => {
  return <DeploySettingsPage {...fakerDeploySettings} />;
};
