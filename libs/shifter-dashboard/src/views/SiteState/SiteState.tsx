import React, { FC } from 'react';
import { Badge, css } from '@galaxy/core';
import { siteStateTheme } from './SiteState.galaxy';
const { siteState } = siteStateTheme;

export const SiteState: FC<SiteState> = ({
  className,
  state,
  variant,
}: SiteState) => {
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

  const siteStateCss = css({ variant: variant, variants: siteState });

  return (
    <Badge
      className={`${siteStateCss} ${className}`}
      variant={`${variant}`}
      label={`${state}`}
    />
  );
};

export type SiteState = {
  state?: string;
  variants?: any;
  variant?: string;
  className?: string;
};

SiteState.defaultProps = {
  state: 'stopped',
  variant: 'primary',
  variants: siteState,
};
