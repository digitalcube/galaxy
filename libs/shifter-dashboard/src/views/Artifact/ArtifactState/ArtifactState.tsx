import React, { FC } from 'react';
import { Badge, css } from '@galaxy/core';
import { artifactStateTheme } from './ArtifactState.galaxy';
const { artifactState } = artifactStateTheme;

export const ArtifactState: FC<ArtifactState> = ({
  state,
  className,
  title,
  variants,
  variant,
}: ArtifactState) => {
  if (state === 'scheduled') {
    variant = 'success';
    title = 'Scheduled';
  }

  if (state === 'published') {
    variant = 'active';
    title = 'Published';
  }

  if (state === 'deploying') {
    variant = 'warning';
    title = 'Deploying';
  }

  if (state === 'ready') {
    variant = 'active';
    title = 'Ready';
  }

  if (state === 'building') {
    variant = 'success';
    title = 'Building';
  }

  if (state === 'failed') {
    variant = 'danger';
    title = 'Failed';
  }

  title = title ? title : state;

  const artifactStateCss = css({
    variant: variant,
    variants: variants,
  });

  return (
    <Badge
      className={`${artifactStateCss} ${className}`}
      variant={`${variant}`}
      label={title}
    />
  );
};

export type ArtifactState = {
  state?: 'generating' | 'starting' | 'stopping' | 'running' | string;
  title?: string;
  className?: string;
  variant?: string;
  variants?: any;
};

ArtifactState.defaultProps = {
  variants: artifactState,
  state: 'pending',
};
