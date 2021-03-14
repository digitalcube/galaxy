import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const SiteState: FC<SiteState> = ({ state, variant }: SiteState) => {
  return <Heading className={siteStateVariants({ variant })} text={state} />;
};

export type SiteState = {
  variant?: string;
  state: 'running' | 'stopped' | string;
};

const siteStateVariants = ({ variant }: SiteState) => {
  const DEFAULT = schema.components.site.components.state.DEFAULT;
  const variants = schema.components.site.components.state.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
