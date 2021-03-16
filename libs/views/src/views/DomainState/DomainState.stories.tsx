import React from 'react';
import { DomainState } from '@galaxy/views';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: DomainState,
  title: `Shifter/Dashboard/Patterns/Domain State`,
};

export const Example = () => {
  return <DomainState />;
};
