import React, { FC } from 'react';
import { Section, Panel, fakerHeader } from '@galaxy/core';

import {
  SiteState,
  Site,
  SiteOverview,
  SiteProgress,
  Dashboard,
  Aside,
  Main,
} from '@galaxy/views';

import { Deploys } from '@galaxy/shifter-dashboard';

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
  variant,
}) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={`${name}`} />
        <Main>
          <SiteOverview
            cloudfront={`${cloudfront}`}
            state={`${state}`}
            img={`${img}`}
            artifact={`${artifact}`}
            date={`${date}`}
            items={items}
            name={`${name}`}
            progress={progress}
            team={team}
            variant={variant}
          />
          <Deploys
            cloudfront={`${cloudfront}`}
            state={`${state}`}
            img={`${img}`}
            artifact={`${artifact}`}
            date={`${date}`}
            items={items}
            name={`${name}`}
            progress={progress}
            team={team}
            variant={variant}
          />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type Home = {
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
};
