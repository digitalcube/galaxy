import React, { FC } from 'react';
import {
  ArtifactState,
  ArtifactCreationDate,
  ArtifactName,
  ArtifactPreview,
  ArtifactProgress,
  ArtifactOptions,
} from '@galaxy/shifter-dashboard';
import { ArchiveComponent } from 'schema-dts';
import { Section, Card, fakerArtifact, css } from '@galaxy/core';
import { artifactTheme } from './Artifact.galaxy';
const { artifact } = artifactTheme;

export const Artifact: FC<Artifact> = ({
  schema,
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
      <ArtifactPreview img={`${schema?.thumbnailUrl}`} />
      <Section as="div" className="flex-grow">
        <ArtifactProgress progress={progress} variant={variant} />
        <Section className="p-4 space-y-4">
          <Section className="flex" as="div">
            <Section className="flex-auto">
              <ArtifactName variant={variant} name={`${schema?.name}`} />
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
  schema?: ArchiveComponent;
  variant?: string;
  state?: 'running' | 'stopped' | string;
  progress?: 0 | 1 | 2 | 3 | 4 | 5 | null;
  date?: ArtifactCreationDate;
  variants?: typeof artifact;
};

Artifact.defaultProps = {
  variants: artifact,
  schema: {
    '@type': 'ArchiveComponent',
    ...fakerArtifact,
  },
};
