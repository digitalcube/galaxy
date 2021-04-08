import React from 'react';
import { Teams } from '@galaxy/shifter-dashboard';
import { fakerTeams } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Teams,
  title: `Shifter/Dashboard/Patterns/Teams`,
};

export const Default = () => {
  return <Teams teams={fakerTeams as any} />;
};
