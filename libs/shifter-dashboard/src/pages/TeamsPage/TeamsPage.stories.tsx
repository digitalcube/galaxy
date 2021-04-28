import React from 'react';
import { TeamsPage } from './TeamsPage';
import { fakerTeams, fakerHeader } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: TeamsPage,
  title: `Shifter/Dashboard/Pages`,
};

export const Teams = () => {
  return <TeamsPage {...{
    header: fakerHeader,
    teams: fakerTeams,
  } as any}/>;
};
