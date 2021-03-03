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
  states = schema.components.domainState.variants.light.states,
}) => {
  return getVariants({ variants: states }).map((v, i) => {
    const { variant } = v;
    return (
      <DomainState title={variant} state={variant} key={i} />
    );
  });
};
