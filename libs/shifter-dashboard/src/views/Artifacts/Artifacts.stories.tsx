import React from 'react';
import { Artifacts } from '@galaxy/shifter-dashboard';
import { fakerArtifacts } from '@galaxy/core';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Artifacts,
  title: `Shifter/Dashboard/Patterns/Deploys/Artifacts`,
};

export const List = () => {
  return <Artifacts artifacts={fakerArtifacts} />;
};
