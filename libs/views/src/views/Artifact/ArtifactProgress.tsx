import React, { FC } from 'react';
import classNames from 'classnames';
import { Section, progressClass } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const ArtifactProgress: FC<ArtifactProgress> = ({
  variant,
  progress,
}: ArtifactProgress) => {
  if (!progress) return null;
  return (
    <Section as="div" className="bg-shifter-gray-200">
      <Section
        as="div"
        className={`${progressClass({ progress })} ${artifactProgressVariants({
          variant,
        })}`}
      ></Section>
    </Section>
  );
};

export type ArtifactProgress = {
  variant?: string;
  progress?: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

ArtifactProgress.defaultProps = {
  progress: null,
};

const artifactProgressVariants = ({ variant }: ArtifactProgress) => {
  const DEFAULT = schema.components.artifact.components.progress.DEFAULT;
  const variants = schema.components.artifact.components.progress.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
