import React from 'react';
import { DeploySettings as DeploySettingsPage } from './DeploySettings';
import { fakerDeploySettings } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: DeploySettingsPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/Live/Subdirectory`,
};

export const Example = () => {
  return <DeploySettingsPage {...fakerDeploySettings} />;
};
