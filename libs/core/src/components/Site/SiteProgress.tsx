import React, { FC } from 'react';
import classNames from 'classnames';
import { Section, fakerProgress } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const SiteProgress: FC<SiteProgress> = ({
  variant,
  progress,
}: SiteProgress) => {
  return (
    <Section as="div" className="bg-shifter-gray-200">
      <Section as="div" className={`${fakerProgress()} ${siteProgressVariants({ variant })}`}>
      </Section>
    </Section>
  );
};

export type SiteProgress = {
  variant?: 'light' | 'dark' | string;
  progress?: number;
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
