import React, { FC } from 'react';
import { Section, fakerHeader, MenuItems } from '@galaxy/core';

import { Dashboard, Main } from '@galaxy/views';
import {
  Aside,
  Deploys,
  SiteOverview,
  ProgressValue,
} from '@galaxy/shifter-dashboard';

/**
 * @deprecated
 */
export const Home: FC<Home> = ({
  items,
  name,
  cloudfront,
  img,
  state,
  progress,
  artifact,
  date,
  team,
}) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={`${name}`} />
        <Main>
          <SiteOverview
            publishedSiteURL={cloudfront}
            img={img}
            artifact={artifact}
            date={date}
            name={name}
            progress={progress}
            team={team}
          />
          <Deploys
            state={`${state}`}
          />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type Home = {
  artifact: string;
  cloudfront: string;
  date: string;
  img: string;
  items: MenuItems;
  name: string;
  progress: ProgressValue;
  state: string;
  team?: string;
};
