import React, { FC } from 'react';
import { Heading, publishedDate, Section } from '@galaxy/core';

export const ArtifactCreationDate: FC<ArtifactCreationDate> = ({ date, label }: ArtifactCreationDate) => {
  return (
    <Section className="space-y-2">
      {label ? <Heading className="sr-only">{label}</Heading> : null}
      <Heading>{publishedDate({ date })}</Heading>
    </Section>
  );
};

export type ArtifactCreationDate = {
  date: string;
  label?: string;
};

ArtifactCreationDate.defaultProps = {
  label: `Creation date`,
};
