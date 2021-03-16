import React, { FC } from 'react';
import { Section, fakerHeader } from '@galaxy/core';

import { Dashboard, Aside, Main, SiteSettings } from '@galaxy/views';

export const SettingsPage: FC<SettingsPage> = ({
  items,
  name,
  cloudfront,
  img,
  state,
  progress,
  artifact,
  date,
  team,
  variant,
}) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Main>
          <SiteSettings />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type SettingsPage = {
  variants?: any;
  variant?: any;
};
