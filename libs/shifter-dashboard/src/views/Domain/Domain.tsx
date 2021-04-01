import React, { FC } from 'react';
import { Section, Heading, Card } from '@galaxy/core';
import { DomainState, DomainOptions } from '@galaxy/shifter-dashboard';

export const Domain: FC<Domain> = ({ url, state }: Domain) => {
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
  url: string;
  state: 'running' | 'stopped' | string;
};

Domain.defaultProps = {
  url: 'https://foo.bar.baz/',
};
