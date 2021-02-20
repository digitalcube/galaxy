import React, { FC } from 'react';
import classNames from 'classnames';
import {
  Section,
  SiteName,
  SitePreview,
  Card,
} from '@galaxy/core';
import { ArtifactId, CloudFrontUrl } from '@galaxy/views';
import { schema } from './galaxy.config.js';

export const Overview: FC<Overview> = ({
  name,
  artifact,
  cloudfront,
  variant,
  img,
}: Overview) => {
  return (
    <Card className={`flex ${siteVariants({ variant })}`}>
      <SitePreview img={img} />
      <Section as="div" className="px-8">
        <Section className="space-y-4">
          <SiteName variant={variant} name={name} />
          <Section className="flex space-x-4" as="div">
            <ArtifactId variant={variant} artifact={`${artifact}`} />
            <CloudFrontUrl variant={variant} cloudfront={`${cloudfront}`} />
          </Section>
        </Section>
      </Section>
    </Card>
  );
};

export type Overview = {
  img?: string;
  name: string;
  team?: string;
  artifact: string;
  cloudfront: string;
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

Overview.defaultProps = {
  variant: 'light',
};

const siteVariants = ({ variant }: Overview) => {
  const variants = schema.components.site.variants;
  const DEFAULT = schema.components.site.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};
