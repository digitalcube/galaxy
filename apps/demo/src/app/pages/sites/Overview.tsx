import React, { FC } from 'react';
import { MenuItems } from '@galaxy/core';
import { fakerArtifacts, fakerHome } from '@galaxy/faker';
import { Main } from '@galaxy/views';

import {
  Deploys,
  SiteOverview,
  ProgressValue,
} from '@galaxy/shifter-dashboard';

const usePageOverview = () => {
  return (fakerHome as any) as PageOverviewProps;
};

export const PageOverview: FC = () => {
  const {
    name,
    cloudfront: publishedSiteURL,
    img,
    state,
    progress,
    artifact,
    date,
    team,
    siteId,
  } = usePageOverview();
  return (
    <Main title="Overview">
      <SiteOverview
        publishedSiteURL={publishedSiteURL}
        img={img}
        artifact={artifact}
        date={date}
        name={name}
        progress={progress}
        team={team}
        siteId={`${siteId}`}
      />
      <Deploys state={state} artifacts={fakerArtifacts} siteId={`${siteId}`} />
    </Main>
  );
};

export type PageOverviewProps = {
  artifact: string;
  cloudfront: string;
  date: string;
  img: string;
  items: MenuItems;
  name: string;
  progress: ProgressValue;
  state: string;
  team?: string;
  siteId?: string;
};
