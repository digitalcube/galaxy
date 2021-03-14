import React, { FC } from 'react';
import classNames from 'classnames';
import { Section, Button } from '@galaxy/core';
import { schema } from './galaxy.config.js';
import { PencilAlt } from 'heroicons-react';

export const ArtifactName: FC<ArtifactName> = ({
  name,
  variant,
}: ArtifactName) => {
  return (
    <Button variant="link" className="flex flex-row space-x-2 items-center">
      <span>{name}</span>
      <PencilAlt size={16} />
    </Button>
  );
};

export type ArtifactName = {
  variant?: string;
  name: string;
};

const artifactNameVariants = ({ variant }: ArtifactName) => {
  const DEFAULT = schema.components.artifact.components.name.DEFAULT;
  const variants = schema.components.artifact.components.name.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
