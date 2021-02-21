import React, { FC } from 'react';
import classNames from 'classnames';
import { Section, Card } from '@galaxy/core';
import {
  SitePreview,
  ArtifactId,
  CloudFrontUrl,
  LastPublishDate,
} from '@galaxy/views';
import { schema } from './galaxy.config.js';

export const SiteOverview: FC<SiteOverview> = ({
  artifact,
  cloudfront,
  variant,
  img,
  date,
}: SiteOverview) => {
  return (
    <Card className={`flex ${overviewVariants({ variant })}`}>
      <SitePreview img={img} />
      <Section as="div" className="px-8">
        <Section className="space-y-4">
          <LastPublishDate date={date} />
          <Section className="flex space-x-4" as="div">
            <ArtifactId artifact={`${artifact}`} />
            <CloudFrontUrl cloudfront={`${cloudfront}`} />
          </Section>
        </Section>
      </Section>
    </Card>
  );
};

export type SiteOverview = {
  name: string;
  img?: string;
  team?: string;
  artifact: string;
  cloudfront: string;
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
  date: string;
};

SiteOverview.defaultProps = {
  variant: 'light',
};

const overviewVariants = ({ variant }: SiteOverview) => {
  const variants = schema.components.overview.variants;
  const DEFAULT = schema.components.overview.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};
