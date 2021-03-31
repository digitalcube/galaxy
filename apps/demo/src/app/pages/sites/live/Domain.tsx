import React, { FC, ReactNode } from 'react';
import { Panel, Card } from '@galaxy/core';
import { Main } from '@galaxy/views';
import { AddDomain, Domain, Domains } from '@galaxy/shifter-dashboard';

export const PageDomain: FC<PageDomainProps> = ({
  title,
  domains,
}) => {
  return (
    <Main actions={<AddDomain />} title={`${title}`}>
        <Card>Steps to connect your domain</Card>
        <Domains domains={domains} />
      </Main>
  );
};

export type PageDomainProps = {
  title?: Panel;
  actions?: ReactNode;
  domains: Domain[];
};