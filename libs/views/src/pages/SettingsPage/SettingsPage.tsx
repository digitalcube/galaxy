import React, { FC } from 'react';
import {
  Section,
  fakerHeader,
} from '@galaxy/core';

import {
  SiteState,
  Site,
  SiteProgress,
  Deploys,
  Dashboard,
  Aside,
  Main,
} from '@galaxy/views';

export const SettingsPage: FC<SettingsPage> = ({
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
        <Main>
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

export type SettingsPage = {
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
