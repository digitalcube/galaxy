import React, { FC } from 'react';
import {
  Section,
  Panel,
  fakerHeader,
  fakerSiteWebhooks,
} from '@galaxy/core';

import {
  SiteState,
  Site,
  SiteProgress,
  Dashboard,
  Container,
  Webhooks,
  Aside,
} from '@galaxy/views';

export const WebhooksPage: FC<WebhooksPage> = ({ items, name }) => {
  return (
    <Dashboard {...fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Panel className="flex-1 md:border-l">
          <Webhooks webhooks={fakerSiteWebhooks} />
        </Panel>
      </Section>
    </Dashboard>
  );
};

export type WebhooksPage = {
  artifact: Site;
  cloudfront: Site;
  date: Site;
  img: Site;
  items: Site;
  name: Site;
  progress: SiteProgress;
  state: SiteState;
  team?: Site;
  variant?: Site;
  container: Container;
};
