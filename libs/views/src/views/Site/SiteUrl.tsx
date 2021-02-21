import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const SiteUrl: FC<SiteUrl> = ({ url, variant }: SiteUrl) => {
  return <Heading className={siteUrlVariants({ variant })}>{url}</Heading>;
};

export type SiteUrl = {
  variant?: 'light' | 'dark' | string;
  url: string;
};

const siteUrlVariants = ({ variant }: SiteUrl) => {
  const DEFAULT = schema.components.site.components.url.DEFAULT;
  const variants = schema.components.site.components.url.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
