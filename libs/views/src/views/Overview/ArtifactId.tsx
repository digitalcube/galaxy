import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading, Section } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const ArtifactId: FC<ArtifactId> = ({
  artifact,
  variant,
}: ArtifactId) => {
  return (
    <Section className="space-y-2">
      <Heading className="font-strong">Artifact ID</Heading>
      <Heading>{artifact}</Heading>
    </Section>
  );
};

export type ArtifactId = {
  variant?: 'light' | 'dark' | string;
  artifact: string;
};

const artifactIdVariants = ({ variant }: ArtifactId) => {
  const DEFAULT = schema.components.site.components.artifact.DEFAULT;
  const variants = schema.components.site.components.artifact.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
