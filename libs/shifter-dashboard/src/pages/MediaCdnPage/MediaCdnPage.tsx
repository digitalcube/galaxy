import React, { FC } from 'react';
import { Section, MenuItems } from '@galaxy/core';
import { fakerHeader } from '@galaxy/faker';
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
        <Main className="p-8 w-full border-l border-shifter-gray-200 space-y-8">
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
