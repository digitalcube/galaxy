import React from 'react';
import { Artifact } from '@galaxy/shifter-dashboard';
import { fakerArtifact } from '@galaxy/core';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Artifact,
  title: `Shifter/Dashboard/Patterns/Artifacts/Artifact`,
};

export const Example = () => {
  return <Artifact {...fakerArtifact} />;
};
