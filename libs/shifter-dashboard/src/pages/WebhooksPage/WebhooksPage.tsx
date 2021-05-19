import React, { FC } from 'react';
import { Section, MenuItems } from '@galaxy/core';
import { fakerSiteWebhooks, fakerHeader } from '@galaxy/faker';

import { Dashboard, Aside, Main } from '@galaxy/views';

import { Webhooks } from '../../views';

/**
 * @deprecated
 */
export const WebhooksPage: FC<WebhooksPage> = ({ items, name }) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Main className="p-8 w-full border-l border-shifter-gray-200 space-y-8">
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
