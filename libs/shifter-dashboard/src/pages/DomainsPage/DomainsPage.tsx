import React, { FC, ReactNode } from 'react';
import { Section, PanelProps } from '@galaxy/core';
import { fakerHeader } from '@galaxy/faker';
import { Aside, Dashboard, Main } from '@galaxy/views';
import { CreateDomain, Site, Domains, Domain } from '@galaxy/shifter-dashboard';

/**
 * @deprecated
 */
export const DomainsPage: FC<DomainsPage> = ({
  name,
  items,
  title,
  actions,
  domains,
}) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={`${name}`} />
        <Main schema="dashboard" actions={actions} title={`${title}`}>
          <Domains domains={domains} />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type DomainsPage = {
  items?: any;
  title?: PanelProps;
  actions?: ReactNode;
  name: Site;
  domains: Domain[];
};

DomainsPage.defaultProps = {
  actions: CreateDomain,
};
