import React, { FC } from 'react';
import { Heading, Section } from '@galaxy/core';
import { FaWordpress } from 'react-icons/fa';

export const WpVersion: FC<WpVersion> = ({ title = 'WordPress version', version }) => {
  if (!version) return null;
  return (
    <Section className="space-x-2 flex flex-row items-center">
      <FaWordpress />
      <Heading variant="primary" text={`${title} ${version}`} />
    </Section>
  );
};

export type WpVersion = {
  title?: string;
  version?: string;
};