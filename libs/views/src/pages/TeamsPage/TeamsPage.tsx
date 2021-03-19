import React, { FC } from 'react';
import { Header, Dashboard } from '@galaxy/views';
import { fakerHeader, fakerTeams } from '@galaxy/core';
import { Teams } from '@galaxy/shifter-dashboard';

export const TeamsPage: FC<TeamsPage> = ({ teams, header }) => {
  return (
    <Dashboard header={header} main={<Teams teams={teams} />}>
      <Teams teams={teams} />
    </Dashboard>
  );
};

export type TeamsPage = {
  teams?: Teams[];
  header?: Header;
};

TeamsPage.defaultProps = {
  header: fakerHeader,
  teams: fakerTeams,
};
