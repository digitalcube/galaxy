import React, { FC } from 'react';
import { Heading, Section, Link } from '@galaxy/core';
import { FaCopy } from 'react-icons/fa';

export const ArtifactId: FC<ArtifactId> = ({ artifact }: ArtifactId) => {
  return (
    <Section className="space-x-2 flex items-center">
      <Heading className="inline" fontSize={2} fontWeight="strong" text="ID:" />
      <Link href={artifact}>
        <Heading
          className="inline"
          variant="link"
          fontSize={2}
          text={artifact}
        />
        <FaCopy className="inline text-shifter-purple-primary text-size-2" />
      </Link>
    </Section>
  );
};

export type ArtifactId = {
  artifact: string;
};
