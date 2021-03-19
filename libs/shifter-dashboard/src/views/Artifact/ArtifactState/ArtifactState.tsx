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
  if (state === 'running') {
    variant = 'success';
  }

  if (state === 'generating') {
    variant = 'active';
  }

  if (state === 'pending') {
    variant = 'warning';
  }

  if (state === 'verified') {
    variant = 'verified';
  }

  if (state === 'failed') {
    variant = 'danger';
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
