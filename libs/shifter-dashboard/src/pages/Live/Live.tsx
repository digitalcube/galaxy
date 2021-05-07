import React, { FC } from 'react';
import { Section, MenuItems } from '@galaxy/core';
import { fakerHeader } from '@galaxy/faker';
import { Dashboard, Aside, Main } from '@galaxy/views';
import { SiteOverview, Site } from '@galaxy/shifter-dashboard';
import { ProgressValue } from '../../views';

/**
 * @deprecated
 */
export const Live: FC<Live> = ({
  name,
  publishedSiteURL,
  artifact,
  img,
  date,
  team,
  items,
  progress,
  siteId,
}) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={`${name}`} />
        <Main>
          <SiteOverview
          siteId={siteId}
            name={name}
            artifact={artifact}
            publishedSiteURL={publishedSiteURL}
            img={img}
            date={date}
            progress={progress}
            team={team}
          />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type Live = {
  siteId: string;
  name: string;
  img?: string;
  team?: string;
  artifact: string;
  publishedSiteURL: string;
  progress: ProgressValue;
  date: string;
  items: MenuItems;
};
