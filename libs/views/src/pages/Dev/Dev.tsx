import React, { FC } from 'react';
import { Section, fakerHeader } from '@galaxy/core';
import { Aside, Dashboard, Main } from '@galaxy/views';
import {
  SiteState,
  WpControls,
  Site,
  SiteProgress,
  Container,
  WpVersion,
} from '@galaxy/shifter-dashboard';

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
