import React, { FC } from 'react';
import { Heading, Section } from '@galaxy/core';

export const ArtifactId: FC<ArtifactId> = ({ artifact }: ArtifactId) => {
  return (
    <Section className="space-y-2">
      <Heading className="font-strong" text="Artifact ID" />
      <Heading text={artifact} />
    </Section>
  );
};

export type ArtifactId = {
  artifact: string;
};
