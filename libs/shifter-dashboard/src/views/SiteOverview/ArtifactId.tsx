import React, { FC } from 'react';
import { Heading, Section, Link } from '@galaxy/core';
import { FaCopy } from 'react-icons/fa';

export const ArtifactId: FC<ArtifactId> = ({ artifact }: ArtifactId) => {
  return (
    <Section className="space-x-2">
      <Heading className="inline" fontSize={2} fontWeight="strong" text="ID:" />
      <Link href={artifact}>
        <Heading
          className="inline"
          variant="link"
          fontSize={2}
          text={artifact}
        />
        <FaCopy className="text-shifter-purple-primary h-7 w-7" />
      </Link>
    </Section>
  );
};

export type ArtifactId = {
  artifact: string;
};
