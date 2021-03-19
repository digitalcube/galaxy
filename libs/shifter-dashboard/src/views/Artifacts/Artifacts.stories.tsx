import React from 'react';
import { Artifacts } from '@galaxy/shifter-dashboard';
import { fakerArtifacts } from '@galaxy/core';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Artifacts,
  title: `Shifter/Dashboard/Patterns/Artifacts`,
};

export const Default = () => {
  return <Artifacts sites={fakerArtifacts} />;
};
