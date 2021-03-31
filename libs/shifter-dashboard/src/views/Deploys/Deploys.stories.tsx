import React from 'react';
import { Deploys } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
import { fakerArtifact, fakerDomainState } from '@galaxy/faker';
export default {
  ...defaultStorybookConfig,
  component: Deploys,
  title: `Shifter/Dashboard/Patterns/Deploys`,
};

export const Example = () => {
  return <Deploys {...{
    artifacts: fakerArtifact,
    state: fakerDomainState,
  } as any}/>;
};
