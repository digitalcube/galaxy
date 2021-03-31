import React, { FC } from 'react';
import { Heading, Section, Php } from '@galaxy/core';

export const PhpVersion: FC<PhpVersion> = ({ title =  'PHP version', version }: PhpVersion) => {
  if (!version) return null;
  return (
    <Section className="space-x-2 flex flex-row items-center">
      <Php />
      <Heading variant="primary" text={`${title} ${version}`} />
    </Section>
  );
};

export type PhpVersion = {
  title?: string;
  version?: string;
};
