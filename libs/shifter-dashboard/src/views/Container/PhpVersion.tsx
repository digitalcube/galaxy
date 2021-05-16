import React, { FC } from 'react';
import { Heading, Section } from '@galaxy/core';
import { DiPhp } from 'react-icons/di';

export const PhpVersion: FC<PhpVersion> = ({ title =  'PHP version', version }: PhpVersion) => {
  if (!version) return null;
  return (
    <Section className="space-x-2 flex flex-row items-center">
      <DiPhp />
      <Heading variant="primary" text={`${title} ${version}`} />
    </Section>
  );
};

export type PhpVersion = {
  title?: string;
  version?: string;
};
