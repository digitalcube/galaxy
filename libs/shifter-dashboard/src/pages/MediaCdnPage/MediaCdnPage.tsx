import React, { FC } from 'react';
import { Section, fakerHeader, MenuItems } from '@galaxy/core';
import { Aside, Main, Dashboard } from '@galaxy/views';
import {
  MediaCdn,
} from '@galaxy/shifter-dashboard';

/**
 * @deprecated
 */
export const MediaCdnPage: FC<MediaCdnPage> = ({ items, name, mediaCdn }) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={`${name}`} />
        <Main>
          <MediaCdn {...mediaCdn} />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type MediaCdnPage = {
  mediaCdn: any;
  items: MenuItems;
  name: string;
};
