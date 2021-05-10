import React, { FC } from 'react';
import { Heading, Section, Link } from '@galaxy/core';
import { FaCopy } from 'react-icons/fa';

export const ArtifactId: FC<ArtifactId> = ({ artifact }: ArtifactId) => {
  return (
    <Section className="space-x-2 flex items-center">
      <Heading fontSize={2} fontWeight="strong" text="ID:" />
      <Link className="flex space-x-2 items-center" href={artifact}>
        <Heading variant="link" fontSize={2} text={artifact} />
        <FaCopy className="text-shifter-purple-primary text-size-2" />
      </Link>
    </Section>
  );
};

export type ArtifactId = {
  artifact: string;
};
