import React, { FC } from 'react';
import { Header, Dashboard } from '@galaxy/views';
import { fakerHeader, fakerTeams } from '@galaxy/core';
import { Teams } from '@galaxy/shifter-dashboard';

export const GuidesPage: FC<GuidesPage> = ({ teams, header }) => {
  return <Dashboard header={header} main={<Teams teams={teams} />} />;
};

export type GuidesPage = {
  teams?: Teams[];
  header?: Header;
};

GuidesPage.defaultProps = {
  header: fakerHeader,
  teams: fakerTeams,
};
