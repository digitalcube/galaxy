import React, { FC } from 'react';
import { Button, Heading } from '@galaxy/core';
import { PencilAlt } from 'heroicons-react';

export const ArtifactName: FC<ArtifactName> = ({ name }: ArtifactName) => {
  return (
    <Button variant="link" className="flex flex-row space-x-2 items-center">
      <Heading fontWeight="regular" text={name} />
      <PencilAlt size={16} />
    </Button>
  );
};

export type ArtifactName = {
  variant?: string;
  name?: string;
};