import React, { FC } from 'react';
import { Section, progressClass, css } from '@galaxy/core';
import { artifactProgressTheme } from './ArtifactProgress.galaxy';
const { artifactProgress } = artifactProgressTheme;

export const ArtifactProgress: FC<ArtifactProgress> = ({
  variant,
  progress,
  variants,
}: ArtifactProgress) => {
  if (!progress) return null;
  const artifactProgressCss = css({ variants: variants });
  return (
    <Section as="div" className="bg-shifter-gray-200">
      <Section
        as="div"
        className={`${progressClass({ progress })} ${artifactProgressCss}`}
      ></Section>
    </Section>
  );
};

export type ArtifactProgress = {
  variants?: any;
  variant?: string;
  progress?: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

ArtifactProgress.defaultProps = {
  progress: null,
  variants: artifactProgress,
};
