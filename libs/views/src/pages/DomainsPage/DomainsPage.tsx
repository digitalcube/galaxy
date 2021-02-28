import React, { FC } from 'react';
import { Section, Panel, fakerHeader, Card } from '@galaxy/core';
import { Aside, Site, Dashboard, Domains } from '@galaxy/views';

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
        <Panel
          className="flex-1 md:border-l mb-6"
          title={`${title}`}
          actions={actions}
        >
          <Section className="space-y-4">
            <Card>Steps to connect your domain</Card>
            <Domains domains={domains} />
          </Section>
        </Panel>
      </Section>
    </Dashboard>
  );
};

export type DomainsPage = {
  items?: any;
  title?: Panel;
  actions?: Panel;
  name: Site;
  domains: Domains;
};
