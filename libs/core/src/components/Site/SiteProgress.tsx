import React, { FC } from 'react';
import classNames from 'classnames';
import { Section, progressClass } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const SiteProgress: FC<SiteProgress> = ({
  variant,
  progress,
}: SiteProgress) => {
  if (!progress || progress === 0) return null;
  return (
    <Section as="div" className="bg-shifter-gray-200">
      <Section
        as="div"
        className={`${progressClass({ progress })} ${siteProgressVariants({
          variant,
        })}`}
      ></Section>
    </Section>
  );
};

export type SiteProgress = {
  variant?: 'light' | 'dark' | string;
  progress?: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

const siteProgressVariants = ({ variant }: SiteProgress) => {
  const DEFAULT = schema.components.site.components.progress.DEFAULT;
  const variants = schema.components.site.components.progress.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
