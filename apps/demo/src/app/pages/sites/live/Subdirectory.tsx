import React, { FC } from 'react';
import { MenuItems, ProgressProps } from '@galaxy/core';
import {  fakerDeploySettings } from '@galaxy/faker';
import { Main } from '@galaxy/views';
import { Subdirectory } from '@galaxy/shifter-dashboard';

export const PageLiveSubdirectory: FC = () => {
  return (
    <Main
      schema="dashboard"
      title="Overview"
    >
      <Subdirectory {...fakerDeploySettings.subDirectory} />
    </Main>
  );
};

export type PageLiveSubdirectoryProps = {
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
