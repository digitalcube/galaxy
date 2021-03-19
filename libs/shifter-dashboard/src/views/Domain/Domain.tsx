import React, { FC } from 'react';
import { Section, Heading, Card } from '@galaxy/core';
import { DomainState, DomainOptions } from '@galaxy/shifter-dashboard';

export const Domain: FC<Domain> = ({ url, variant, state }: Domain) => {
  return (
    <Card
      mainClassName="flex flex-row justify-between items-center"
      main={
        <>
          <Heading text={url} />
          <Section as="span" className="space-x-2 flex items-center">
            <DomainState title={state} state={state} />
            <DomainOptions />
          </Section>
        </>
      }
    ></Card>
  );
};

export type Domain = {
  img?: string;
  name: string;
  team?: string;
  url: string;
  variant?: string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

Domain.defaultProps = {
  url: 'https://foo.bar.baz/',
};
