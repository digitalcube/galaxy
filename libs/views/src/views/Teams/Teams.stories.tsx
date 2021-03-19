import React from 'react';
import { Teams } from '@galaxy/views';
import { fakerTeams } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Teams,
  title: `Shifter/Dashboard/Patterns/Teams`,
};

export const Default = () => {
  return <Teams teams={fakerTeams} />;
};
