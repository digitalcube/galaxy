import React from 'react';
import { ArtifactState } from '@galaxy/shifter-dashboard';
import { defaultStorybookConfig } from '../../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: ArtifactState,
  title: `Shifter/Dashboard/Patterns/Artifact/State`,
};

export const Example = () => {
  return <ArtifactState />;
};
