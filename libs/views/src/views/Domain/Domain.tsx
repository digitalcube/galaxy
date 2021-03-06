import React, { FC } from 'react';
import { Section, Heading } from '@galaxy/core';
import { DomainState, DomainOptions } from '@galaxy/views';
// import { schema } from './galaxy.config.js';

export const Domain: FC<Domain> = ({ url, variant, state }: Domain) => {
  return (
    <Section className="flex flex-row justify-between items-center">
      <Heading>{url}</Heading>
      <Section as="span" className="space-x-2 flex items-center">
        <DomainState title={state} />
        <DomainOptions />
      </Section>
    </Section>
  );
};

export type Domain = {
  img?: string;
  name: string;
  team?: string;
  url: string;
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

Domain.defaultProps = {
  variant: 'light',
};
