import React from 'react';
import { DeploySettings } from '@galaxy/views';
import { fakerDeploySettings } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: DeploySettings,
  title: `Shifter/Dashboard/Pages/Sites/Site/Live/DeploySettings/State`,
};

export const Zero = () => {
  console.log(fakerDeploySettings);
  return <DeploySettings {...fakerDeploySettings} />;
};
