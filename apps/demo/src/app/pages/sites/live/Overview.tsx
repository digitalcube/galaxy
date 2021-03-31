import React, { FC } from 'react';
import { MenuItems } from '@galaxy/core';
import {fakerHome} from '@galaxy/faker'
import { Main } from '@galaxy/views';

import {
  Deploys,
  SiteOverview,
  ProgressValue
} from '@galaxy/shifter-dashboard';

const usePageOverview = () => {
    return fakerHome as any as PageLiveOverviewProps
}

export const PageLiveOverview: FC = () => {
    const {
        name,
        cloudfront: publishedSiteURL,
        img,
        progress,
        artifact,
        date,
        team,
      } = usePageOverview()
  return (
    <Main title="Live">
      <SiteOverview
            publishedSiteURL={publishedSiteURL}
            img={img}
            artifact={artifact}
            date={date}
            name={name}
            progress={progress}
            team={team}
          />
          </Main>
  );
};

export type PageLiveOverviewProps = {
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
