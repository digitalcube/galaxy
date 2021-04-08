import React, { FC } from 'react';
import { Section, MenuItems } from '@galaxy/core';
import {fakerHeader} from '@galaxy/faker';
import { Dashboard, Aside, Main } from '@galaxy/views';
import { SiteSettings } from '@galaxy/shifter-dashboard';

export const SettingsPage: FC<SettingsPage> = ({ items, name }) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Main title="Site Settings">
          <SiteSettings />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type SettingsPage = {
  name: string;
  items: MenuItems
};
