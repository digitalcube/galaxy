import React from 'react';
import { ArtifactProgress } from '@galaxy/shifter-dashboard';
import { defaultStorybookConfig } from '../../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: ArtifactProgress,
  title: `Shifter/Dashboard/Patterns/Artifact/Progress`,
};

export const Example = () => {
  return <ArtifactProgress />;
};
