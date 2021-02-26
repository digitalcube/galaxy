import React, { FC } from 'react';
import classNames from 'classnames';
import { Section, Card } from '@galaxy/core';
import {
  ArtifactId,
  CloudFrontUrl,
  PublishDate,
  WpControls,
} from '@galaxy/views';
import { schema } from './galaxy.config.js';

export const Deploys: FC<Deploys> = ({
  artifact,
  cloudfront,
  variant,
  date,
}: Deploys) => {
  return (
    <Card className={`${deploysVariants({ variant })} space-y-4`}>
      <WpControls />
    </Card>
  );
};

export type Deploys = {
  name: string;
  artifact: string;
  cloudfront: string;
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
  date: string;
};

Deploys.defaultProps = {
  variant: 'light',
};

const deploysVariants = ({ variant }: Deploys) => {
  const variants = schema.components.deploys.variants;
  const DEFAULT = schema.components.deploys.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};
