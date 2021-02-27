import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const DomainState: FC<DomainState> = ({
  state,
  variant,
  className,
}: DomainState) => {
  return (
    <Heading
      className={`${siteStateVariants({ variant, state })} ${className}`}
    >
      {state}
    </Heading>
  );
};

export type DomainState = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

const siteStateVariants = ({ variant, state }: DomainState) => {
  const DEFAULT = schema.components.domain.components.state.DEFAULT;
  const variants = schema.components.domain.components.state.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light.state.running}`]: !state || state === 'running',
    [`${variants.light.state.stopped}`]: state === 'stopped',
    [`${variants.light.state.generating}`]: state === 'generating',
    [`${variants.light.state.starting}`]: state === 'starting',
  };

  return classNames(classes);
};
