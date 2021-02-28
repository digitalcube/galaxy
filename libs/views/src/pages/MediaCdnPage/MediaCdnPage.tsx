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
  MediaCdn,
} from '@galaxy/views';

export const MediaCdnPage: FC<MediaCdnPage> = ({
  items,
  name,
}) => {
  return (
    <Dashboard {...fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Panel className="flex-1 md:border-l">
          <MediaCdn />
        </Panel>
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
