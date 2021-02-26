import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const ArtifactState: FC<ArtifactState> = ({
  state,
  variant,
  className,
}: ArtifactState) => {
  return (
    <Heading
      className={`${artifactStateVariants({ variant, state })} ${className}`}
    >
      {state}
    </Heading>
  );
};

export type ArtifactState = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

const artifactStateVariants = ({ variant, state }: ArtifactState) => {
  const DEFAULT = schema.components.artifact.components.state.DEFAULT;
  const variants = schema.components.artifact.components.state.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light.state.running}`]: !state || state === 'running',
    [`${variants.light.state.stopped}`]: state === 'stopped',
    [`${variants.light.state.generating}`]: state === 'generating',
    [`${variants.light.state.starting}`]: state === 'starting',
  };

  return classNames(classes);
};
