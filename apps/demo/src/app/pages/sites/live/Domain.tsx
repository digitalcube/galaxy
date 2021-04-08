import React, { FC } from 'react';
import { Card } from '@galaxy/core';
import { Main } from '@galaxy/views';
import { AddDomain, Domain, Domains } from '@galaxy/shifter-dashboard';
import { fakerSiteDomains } from '@galaxy/faker';

const useDummyProps = (): PageDomainProps => {
  return {
    domains: fakerSiteDomains
  }
}
export const PageDomain: FC = () => {
  const {domains} = useDummyProps()
  return (
    <Main actions={<AddDomain />} title="Domain">
        <Card>Steps to connect your domain</Card>
        <Domains domains={domains} />
      </Main>
  );
};

export type PageDomainProps = {
  domains: Domain[];
};