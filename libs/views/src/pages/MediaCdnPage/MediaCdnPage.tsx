import React, { FC } from 'react';
import { Section, Panel, fakerHeader } from '@galaxy/core';

import {
  SiteState,
  Site,
  SiteProgress,
  Dashboard,
  Container,
  MediaCdn,
  Aside,
  Main,
} from '@galaxy/views';

export const MediaCdnPage: FC<MediaCdnPage> = ({ items, name, mediaCdn }) => {
  return (
    <Dashboard {...fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Main>
          <MediaCdn {...mediaCdn} />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type MediaCdnPage = {
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
};
