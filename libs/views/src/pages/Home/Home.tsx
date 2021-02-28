import React, { FC } from 'react';
import {
  Section,
  Panel,
  fakerHeader,
} from '@galaxy/core';

import {
  SiteState,
  Site,
  SiteOverview,
  SiteProgress,
  Deploys,
  Dashboard,
  Aside,
} from '@galaxy/views';

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
    <Dashboard {...fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Panel className="flex-1 md:border-l">
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
        </Panel>
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
