import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const SiteTeam: FC<SiteTeam> = ({ team, variant }: SiteTeam) => {
  if (!team) return null;
  return <Heading className={siteTeamVariants({ variant })}>{team}</Heading>;
};

export type SiteTeam = {
  variant?: 'light' | 'dark' | string;
  team?: string;
};

const siteTeamVariants = ({ variant }: SiteTeam) => {
  const DEFAULT = schema.components.site.components.team.DEFAULT;
  const variants = schema.components.site.components.team.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
