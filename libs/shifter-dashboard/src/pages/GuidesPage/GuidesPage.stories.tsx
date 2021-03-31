import React from 'react';
import { fakerHeader, fakerTeams } from '@galaxy/faker';
import { GuidesPage } from './GuidesPage';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: GuidesPage,
  title: `Shifter/Dashboard/Pages`,
};

export const Guides = () => {
  return <GuidesPage {...{
    header: fakerHeader,
    teams: fakerTeams,
  } as any} />;
};
