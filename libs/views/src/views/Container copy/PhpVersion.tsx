import React, { FC } from 'react';
import { Heading, Section, Php } from '@galaxy/core';

export const PhpVersion: FC<PhpVersion> = ({ title, version }: PhpVersion) => {
  if (!version) return null;
  return (
    <Section className="space-x-2 flex flex-row items-center">
      <Php />
      <Heading variant="primary">
        {title} {version}
      </Heading>
    </Section>
  );
};

export type PhpVersion = {
  title?: string;
  version: string;
};

PhpVersion.defaultProps = {
  title: 'PHP version',
};
