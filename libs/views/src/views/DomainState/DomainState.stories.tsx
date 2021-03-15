import React from 'react';
import { getVariants } from '@galaxy/core';
import { DomainState } from '@galaxy/views';
import { domainState } from './galaxy.config';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: DomainState,
  title: `Shifter/Dashboard/Patterns/Domain State`,
};

export const Example = () => {
  return <DomainState />;
};
