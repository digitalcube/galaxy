import React from 'react';
import { CreateTeam } from '@galaxy/shifter-dashboard';
import { fakerTeams } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: CreateTeam,
  title: `Shifter/Dashboard/Patterns/CreateTeam`,
};

export const Default = () => {
  return <CreateTeam teams={fakerTeams as any} />;
};
