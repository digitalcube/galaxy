import React, { FC } from 'react';
import { Section, fakerHeader, fakerSiteWebhooks } from '@galaxy/core';

import { Dashboard, Container, Aside, Main } from '@galaxy/views';

import {
  SiteState,
  Site,
  SiteProgress,
  Webhooks,
} from '@galaxy/shifter-dashboard';

export const WebhooksPage: FC<WebhooksPage> = ({ items, name }) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={`${name}`} />
        <Main>
          <Webhooks webhooks={fakerSiteWebhooks} />
        </Main>
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
