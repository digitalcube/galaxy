import React, { FC } from 'react';
import { MenuItems, ProgressProps } from '@galaxy/core';
import { fakerHome } from '@galaxy/faker';
import { Main } from '@galaxy/views';
import { SiteOverview } from '@galaxy/shifter-dashboard';

const usePageOverview = () => {
  return (fakerHome as any) as PageLiveOverviewProps;
};

export const PageLiveOverview: FC = () => {
  const {
    name,
    cloudfront: publishedSiteURL,
    img,
    progress,
    artifact,
    date,
    team,
    siteId,
  } = usePageOverview();
  return (
    <Main
      schema="dashboard"
      title="Overview"
    >
      <SiteOverview
        siteId={siteId}
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
  progress: ProgressProps;
  state: string;
  team?: string;
  siteId: string;
};
