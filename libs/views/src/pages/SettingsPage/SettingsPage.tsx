import React, { FC } from 'react';
import {
  Section,
  fakerHeader,
  fakerSiteControls,
} from '@galaxy/core';

import {
  Site,
  Main,
  Dashboard,
  Aside,
  Controls,
} from '@galaxy/views';

export const SettingsPage: FC<SettingsPage> = ({
  items,
  name,
}) => {
  return (
    <Dashboard {...fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Main>
          <Controls controls={fakerSiteControls} />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type SettingsPage = {
  items: Site;
  name: Site;
};
