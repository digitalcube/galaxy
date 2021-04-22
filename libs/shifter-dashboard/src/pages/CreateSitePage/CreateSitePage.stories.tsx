import React from 'react';
import { fakerGuides, fakerHeader, fakerTeams } from '@galaxy/faker';
import { CreateSitePage } from './CreateSitePage';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: CreateSitePage,
  title: `Shifter/Dashboard/Pages/Create`,
};

export const Site = () => {
  return <CreateSitePage {...{
    header: fakerHeader,
    guides: fakerGuides,
  } as any} />;
};
