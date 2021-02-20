import React, { FC } from 'react';
import { Heading, Section } from '@galaxy/core';

export const ArtifactId: FC<ArtifactId> = ({ artifact }: ArtifactId) => {
  return (
    <Section className="space-y-2">
      <Heading className="font-strong">Artifact ID</Heading>
      <Heading>{artifact}</Heading>
    </Section>
  );
};

export type ArtifactId = {
  artifact: string;
};
