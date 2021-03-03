import React from 'react';
import { getVariants } from '@galaxy/core';
import { DomainState } from '@galaxy/views';
import { schema } from './galaxy.config';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: DomainState,
  title: `Shifter/Dashboard/Patterns/Domain State`,
};

export const Variants = ({
  states = schema.components.domainState.variants.light,
}) => {
  return getVariants({ variants: states }).map((state, i) => {
    return <DomainState title={state.state} {...state} key={i} />;
  });
};
