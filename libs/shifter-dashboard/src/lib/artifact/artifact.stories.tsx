import React from 'react';
import { Artifact, ArtifactProps } from './artifact';
import { fakerArtifact } from '@galaxy/faker';

import { defaultStorybookConfig } from '../../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: Artifact,
  title: `Shifter/Dashboard/Patterns/Deploys/Artifacts/Artifact`,
};

export const Example = () => {
  /* eslint-disable-next-line */
  const props: ArtifactProps = { ...fakerArtifact };

  return <Artifact {...props} />;
};
