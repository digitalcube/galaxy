import React, { FC } from 'react';
import {
  ArtifactState,
  ArtifactCreationDate,
  ArtifactName,
  ArtifactPreview,
  ArtifactProgress,
  ArtifactOptions,
} from '@galaxy/shifter-dashboard';
import { Section, Card, css } from '@galaxy/core';
import { artifactTheme } from './Artifact.galaxy';
const { artifact } = artifactTheme;

export const Artifact: FC<ArtifactProps> = ({
  name,
  variant,
  img,
  state,
  progress,
  date,
  variants,
}) => {
  const artifactCss = css({ variants: variants });
  return (
    <Card
      variant="primary"
      mainClassName={`${artifactCss}`}
      main={
        <>
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
        </>
      }
    />
  );
};

export type ArtifactProps = {
  img?: string;
  name?: string;
  state?: 'running' | 'stopped' | string;
  progress?: 0 | 1 | 2 | 3 | 4 | 5 | null;
  date?: string;
  variants?: any;
  variant?: string;
};

Artifact.defaultProps = {
  variants: artifact,
};
