import React, { FC } from 'react';
import { Main } from '@galaxy/views';

import { Teams } from '@galaxy/shifter-dashboard';
import { fakerTeams } from '@galaxy/faker';
const useDummyProps = () => {
  return {
    teams: fakerTeams,
  };
};
export const PageTeams: FC = () => {
  const { teams } = useDummyProps();
  return <Main title="Teams"><Teams teams={teams as any} /></Main>;
};

export type PageTeamsProps = {};
