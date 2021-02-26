import React, { FC } from 'react';
import classNames from 'classnames';
import { Section, Card } from '@galaxy/core';
import {
  ArtifactId,
  CloudFrontUrl,
  PublishDate,
  Team,
} from '@galaxy/views';
import { schema } from './galaxy.config.js';

export const WpControls: FC<WpControls> = ({
  artifact,
  cloudfront,
  variant,
  img,
  date,
  team,
}: WpControls) => {
  return (
    <Card className={`${wpControlsVariants({ variant })} pb-0 px-0`}>
      <div className="flex px-3 py-6">
        <Section as="div" className="px-8">
          <Section className="space-y-4">
            <CloudFrontUrl cloudfront={`${cloudfront}`} />
            <Section className="flex space-x-4" as="div">
              <PublishDate date={date} />
              <ArtifactId artifact={`${artifact}`} />
            </Section>
          </Section>
        </Section>
      </div>
      <Team team={`${team}`} />
    </Card>
  );
};

export type WpControls = {
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

WpControls.defaultProps = {
  variant: 'light',
};

const wpControlsVariants = ({ variant }: WpControls) => {
  const variants = schema.components.wpControls.variants;
  const DEFAULT = schema.components.wpControls.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};
