import React, { FC } from 'react';
import {
  ArtifactState,
  ArtifactCreationDate,
  ArtifactName,
  ArtifactPreview,
} from '@galaxy/shifter-dashboard';
import { OptionsMenu } from '@galaxy/views';
import { Section, Card, Progress, css } from '@galaxy/core';
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
  options,
}) => {
  const artifactCss = css({ variants: variants });
  return (
    <Card variant="primary" className={`${artifactCss}`}>
      <Progress className="absolute w-full top-0 right-0" progress={progress} />
      <ArtifactPreview img={img} />
      <Section as="div" className="flex-grow justify-between flex flex-col">
        <Section className="px-4 py-2">
          <Section className="flex items-center" as="div">
            <Section className="flex-auto">
              <ArtifactName variant={variant} name={name} />
              <ArtifactCreationDate date={date} />
            </Section>
            <Section as="span" className="flex items-center space-x-4">
              <ArtifactState state={state} />
              <OptionsMenu
                menu={[
                  { label: 'Publish', href: '#' },
                  { label: 'Delete', href: '#' },
                  { label: 'More Details', href: '#' },
                ]}
              />
            </Section>
          </Section>
        </Section>
      </Section>
    </Card>
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
  options?: any;
};

Artifact.defaultProps = {
  variants: artifact,
};
