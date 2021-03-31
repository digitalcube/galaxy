import React, { FC } from 'react';
import { Section, fakerHeader, fakerSiteWebhooks, MenuItems } from '@galaxy/core';

import { Dashboard,  Aside, Main } from '@galaxy/views';

import {
  Webhooks,
} from '../../views';

export const WebhooksPage: FC<WebhooksPage> = ({ items, name }) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Main>
          <Webhooks webhooks={fakerSiteWebhooks} />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type WebhooksPage = {
  items: MenuItems;
  name: string;
};
