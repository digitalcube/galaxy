import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const DomainUrl: FC<DomainUrl> = ({ url, variant }: DomainUrl) => {
  return <Heading className={siteUrlVariants({ variant })}>{url}</Heading>;
};

export type DomainUrl = {
  variant?: 'light' | 'dark' | string;
  url: string;
};

const siteUrlVariants = ({ variant }: DomainUrl) => {
  const DEFAULT = schema.components.domain.components.url.DEFAULT;
  const variants = schema.components.domain.components.url.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
