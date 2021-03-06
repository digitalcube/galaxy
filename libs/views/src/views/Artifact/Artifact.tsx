import React, { FC } from 'react';
import classNames from 'classnames';
import {
  ArtifactState,
  ArtifactCreationDate,
  ArtifactName,
  ArtifactPreview,
  ArtifactProgress,
  ArtifactOptions,
} from '@galaxy/views';
import { Section } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const Artifact: FC<Artifact> = ({
  name,
  url,
  variant,
  img,
  state,
  progress,
  date,
}: Artifact) => {
  return (
    <Section className={artifactVariants({ variant })}>
      <ArtifactPreview img={img} />
      <Section as="div" className="flex-grow">
        <ArtifactProgress progress={progress} variant={variant} />
        <Section className="p-4 space-y-4">
          <Section className="flex" as="div">
            <Section className="flex-auto">
              <ArtifactName variant={variant} name={name} />
            </Section>
            <Section as="span" className="space-x-2 flex items-center">
              <ArtifactState state={state} />
              <ArtifactOptions />
            </Section>
          </Section>
          <Section as="div">
            <ArtifactCreationDate date={date} />
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export type Artifact = {
  img?: string;
  name: string;
  url: string;
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
  date: ArtifactCreationDate;
};

Artifact.defaultProps = {
  variant: 'light',
};

const artifactVariants = ({ variant }: Artifact) => {
  const variants = schema.components.artifact.variants;
  const DEFAULT = schema.components.artifact.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};
