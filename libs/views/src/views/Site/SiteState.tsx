import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const SiteState: FC<SiteState> = ({
  state,
  variant,
  className,
}: SiteState) => {
  return (
    <Heading
      className={`${siteStateVariants({ variant, state })} ${className}`}
    >
      {state}
    </Heading>
  );
};

export type SiteState = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string | boolean;
  className?: string;
};

const siteStateVariants = ({ variant, state }: SiteState) => {
  const DEFAULT = schema.components.site.components.state.DEFAULT;
  const variants = schema.components.site.components.state.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light.state.running}`]: !state || state === 'running',
    [`${variants.light.state.stopped}`]: state === 'stopped',
    [`${variants.light.state.generating}`]: state === 'generating',
    [`${variants.light.state.starting}`]: state === 'starting',
  };

  return classNames(classes);
};
