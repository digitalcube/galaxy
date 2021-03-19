import React, { FC } from 'react';
import {
  Section,
  Button,
  Heading,
  Menu,
  Panel,
  fakerHeader,
} from '@galaxy/core';

import {
  SiteState,
  Site,
  SiteProgress,
  Dashboard,
  Container,
  WpVersion,
  WpControls,
  Aside,
  Main,
} from '@galaxy/views';

export const Dev: FC<Dev> = ({ items, name, container, wpControls }) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={`${name}`} />
        <Main>
          <WpControls {...wpControls} />
          <Container {...container} />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type Dev = {
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
  wpVersion: WpVersion;
  container: Container;
  wpControls: WpControls;
};
