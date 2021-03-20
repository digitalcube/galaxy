import React from 'react';
import { ArtifactPreview } from '@galaxy/shifter-dashboard';
import { defaultStorybookConfig } from '../../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: ArtifactPreview,
  title: `Shifter/Dashboard/Patterns/Artifacts/Artifact/Preview`,
};

export const Example = () => {
  return <ArtifactPreview />;
};
