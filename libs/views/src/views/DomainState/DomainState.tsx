import React, { FC } from 'react';
import { Badge, css } from '@galaxy/core';
// import { domainState } from './galaxy.config';
import { domainStateTheme } from './DomainState.galaxy';
const { domainState } = domainStateTheme;

export const DomainState: FC<DomainState> = ({
  state,
  className,
  title,
  variants,
  variant,
}: DomainState) => {
  if (state === 'running') {
    variant = 'success';
  }

  if (state === 'generating') {
    variant = 'active';
  }

  if (state === 'pending') {
    variant = 'warning';
  }

  if (state === 'verified') {
    variant = 'verified';
  }

  if (state === 'failed') {
    variant = 'danger';
  }

  title = title ? title : state;

  const domainStateCss = css({
    variant: variant,
    variants: variants,
  });

  return (
    <Badge
      className={`${domainStateCss} ${className}`}
      variant={`${variant}`}
      label={title}
    />
  );
};

export type DomainState = {
  state: 'pending' | 'verified' | 'failed' | 'attached' | string;
  title: string;
  className?: string;
  variant?: string;
  variants?: any;
};

DomainState.defaultProps = {
  variants: domainState,
  state: 'pending',
};
