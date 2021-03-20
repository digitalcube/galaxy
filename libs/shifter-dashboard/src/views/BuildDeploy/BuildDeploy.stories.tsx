import React from 'react';
import { BuildDeploy } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: BuildDeploy,
  title: `Shifter/Dashboard/Patterns/Deploys/BuildDeploy`,
};

export const Schemas = () => {
  return <BuildDeploy />;
};
