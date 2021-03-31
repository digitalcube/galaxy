import React, { FC } from 'react';
import { MenuItems } from '@galaxy/core';
import {fakerArtifacts, fakerHome} from '@galaxy/faker'
import { Main } from '@galaxy/views';

import {
  Deploys,
  SiteOverview,
  ProgressValue
} from '@galaxy/shifter-dashboard';

const useDummyProps = () => {
    return {
        state: 'running',
        artifacts: fakerArtifacts,
    }
}

export const PageStaging: FC = () => {
    const {
        artifacts,
        state,
      } = useDummyProps()
  return (
    <Main>
      <Deploys artifacts={artifacts} state={state} />
    </Main>
  );
};

export type PageStagingProps = {
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
