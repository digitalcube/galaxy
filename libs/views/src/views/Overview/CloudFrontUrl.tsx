import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading, Section } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const CloudFrontUrl: FC<CloudFrontUrl> = ({
  cloudfront,
  variant,
}: CloudFrontUrl) => {
  return (
    <Section className="space-y-2">
      <Heading className="font-strong">CloudFront</Heading>
      <Heading>{cloudfront}</Heading>
    </Section>
  );
};

export type CloudFrontUrl = {
  variant?: 'light' | 'dark' | string;
  cloudfront: string;
};

const cloudFrontUrlVariants = ({ variant }: CloudFrontUrl) => {
  const DEFAULT = schema.components.site.components.cloudfront.DEFAULT;
  const variants = schema.components.site.components.cloudfront.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
