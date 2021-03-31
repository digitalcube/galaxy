import React, { FC, ReactNode } from 'react';
import { Panel, Card } from '@galaxy/core';
import { Main } from '@galaxy/views';
import { AddDomain, Domain, Domains } from '@galaxy/shifter-dashboard';

export const PageDomain: FC<PageDomainProps> = ({
  domains,
}) => {
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