import React from 'react';
import { ArtifactProgress } from '@galaxy/views';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: ArtifactProgress,
  title: `Shifter/Dashboard/Patterns/Artifact Progress`,
};

export const Example = () => {
  return <ArtifactProgress />;
};
