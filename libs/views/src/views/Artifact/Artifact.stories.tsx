import React from 'react';
import { Artifact } from '@galaxy/views';
import { fakerArtifact } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Artifact,
  title: `Shifter/Dashboard/Patterns/Artifact`,
};

export const Example = () => {
  return <Artifact {...fakerArtifact} />;
};
