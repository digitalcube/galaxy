import React from 'react';
import { fakerTeam } from '@galaxy/core';
import { Team } from '@galaxy/views';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Team,
  title: `Shifter/Dashboard/Patterns/Team`,
};

export const Example = () => {
  return <Team {...fakerTeam} />;
};
