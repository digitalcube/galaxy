import React from 'react';
import { ArtifactPreview } from '@galaxy/views';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: ArtifactPreview,
  title: `Shifter/Dashboard/Patterns/Artifact Preview`,
};

export const Example = () => {
  return <ArtifactPreview />;
};
