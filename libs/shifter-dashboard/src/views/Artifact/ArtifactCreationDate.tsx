import React, { FC } from 'react';
import { Heading, publishedDate, Section } from '@galaxy/core';

export const ArtifactCreationDate: FC<ArtifactCreationDate> = ({
  date,
  label,
}: ArtifactCreationDate) => {
  if (!date) return null;
  return (
    <Section className="space-y-2">
      {label ? <Heading className="sr-only" text={label} /> : null}
      <Heading text={publishedDate({ date })} />
    </Section>
  );
};

export type ArtifactCreationDate = {
  date?: string;
  label?: string;
};

ArtifactCreationDate.defaultProps = {
  label: `Creation date`,
};
