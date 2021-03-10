import React, { FC, ReactNode } from 'react';
import { Section, Panel, fakerHeader, Card } from '@galaxy/core';
import { Aside, Site, Dashboard, Domains, Main } from '@galaxy/views';
import { AddDomain } from '../../views';

export const DomainsPage: FC<DomainsPage> = ({
  name,
  items,
  title,
  actions,
  domains,
}) => {
  return (
    <Dashboard {...fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Main actions={actions} title={title}>
          <Card>Steps to connect your domain</Card>
          <Domains domains={domains} />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type DomainsPage = {
  items?: any;
  title?: Panel;
  actions?: ReactNode;
  name: Site;
  domains: Domains;
};

DomainsPage.defaultProps = {
  actions: <AddDomain />,
};
