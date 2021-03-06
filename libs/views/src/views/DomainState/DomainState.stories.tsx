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

export const Variants = ({
  states = domainState
}) => {
  return getVariants({ variants: states }).map((state, i) => {
    return <DomainState title={state.state} {...state} key={i} />;
  });
};
