import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const SiteName: FC<SiteName> = ({ name, variant }: SiteName) => {
  return <Heading className={siteNameVariants({ variant })}>{name}</Heading>;
};

export type SiteName = {
  variant?: 'light' | 'dark' | string;
  name: string;
};

const siteNameVariants = ({ variant }: SiteName) => {
  const DEFAULT = schema.components.site.components.name.DEFAULT;
  const variants = schema.components.site.components.name.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};