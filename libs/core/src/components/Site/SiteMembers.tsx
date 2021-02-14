import React, { FC } from 'react';
import classNames from 'classnames';
import { Avatar } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const SiteMembers: FC<SiteMembers> = ({ variant }: SiteMembers) => {
  return (
    <div className={`${siteMembersVariants({ variant })}`}>
      <Avatar
        variant={variant}
        img="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        name="Hello World"
      />
      <Avatar variant={variant} name="Hello World" />
      <Avatar
        variant={variant}
        img="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        name="Hello World"
      />
    </div>
  );
};

export type SiteMembers = {
  variant?: 'light' | 'dark' | string;
};

const siteMembersVariants = ({ variant }: SiteMembers) => {
  const DEFAULT = schema.components.site.components.members.DEFAULT;
  const variants = schema.components.site.components.members.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
