import React, { FC } from 'react';
import { Heading, Section, WordPress } from '@galaxy/core';

export const WpVersion: FC<WpVersion> = ({ title, version }: WpVersion) => {
  if (!version) return null;
  return (
    <Section className="space-x-2 flex flex-row items-center">
      <WordPress />
      <Heading variant="primary" text={`${title} ${version}`} />
    </Section>
  );
};

export type WpVersion = {
  title?: string;
  version: string;
};

WpVersion.defaultProps = {
  title: 'WordPress version',
};
