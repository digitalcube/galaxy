import React, { FC } from 'react';
import { Heading, publishedDate } from '@galaxy/core';

export const ArtifactCreationDate: FC<ArtifactCreationDate> = ({
  date,
  label,
}: ArtifactCreationDate) => {
  if (!date) return null;
  return (
    <>
      {label ? <Heading className="sr-only" text={label} /> : null}
      <Heading fontSize={2} text={publishedDate({ date })} />
    </>
  );
};

export type ArtifactCreationDate = {
  date?: string;
  label?: string;
};

ArtifactCreationDate.defaultProps = {
  label: `Creation date`,
};
