import React from 'react';
import { CreateSite } from '@galaxy/shifter-dashboard';
import { fakerTeams } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: CreateSite,
  title: `Shifter/Dashboard/Patterns/CreateSite`,
};

export const Default = () => {
  return <CreateSite teams={fakerTeams as any} />;
};
