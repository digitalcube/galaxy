import React, { FC } from 'react';
import {
  ArtifactState,
  ArtifactCreationDate,
  ArtifactName,
  ArtifactPreview,
  ArtifactProgress,
  ArtifactOptions,
} from '@galaxy/views';
import { Section, Card, css } from '@galaxy/core';
import { artifactTheme } from './Artifact.galaxy';
const { artifact } = artifactTheme;

export const Artifact: FC<Artifact> = ({
  name,
  variant,
  img,
  state,
  progress,
  date,
  variants,
}: Artifact) => {
  const artifactCss = css({ variants: variants });
  return (
    <Card variant="primary" className={`${artifactCss}`}>
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
    </Card>
  );
};

export type Artifact = {
  img?: string;
  name?: string;
  variant?: string;
  state?: 'running' | 'stopped' | string;
  progress?: 0 | 1 | 2 | 3 | 4 | 5 | null;
  date?: ArtifactCreationDate;
  variants?: typeof artifact;
};

Artifact.defaultProps = {
  variants: artifact,
};
