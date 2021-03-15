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
  variant?: string;
  variants?: typeof siteState;
  className?: string;
};

SiteState.defaultProps = {
  state: 'stopped',
  variant: 'primary',
  variants: siteState,
};
