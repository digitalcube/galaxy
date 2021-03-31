import React from 'react';
import { fakerTeam } from '@galaxy/core';
import { Team } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Team,
  title: `Shifter/Dashboard/Patterns/Teams/Team`,
};

export const Example = () => {
  return <Team {...fakerTeam as any} />;
};
