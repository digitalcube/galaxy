import React from 'react';
import { Artifacts, ArtifactsProps } from '@galaxy/shifter-dashboard';
import { fakerArtifacts } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: Artifacts,
  title: `Shifter/Dashboard/Patterns/Deploys/Artifacts`,
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ArtifactsProps = {
    artifacts: fakerArtifacts,
  };

  return <Artifacts {...props} />;
};
