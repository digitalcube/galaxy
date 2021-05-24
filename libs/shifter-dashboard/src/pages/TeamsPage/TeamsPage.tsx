import React, { FC } from 'react';
import { HeaderProps, Dashboard } from '@galaxy/views';
import { Team, Teams } from '@galaxy/shifter-dashboard';

export const TeamsPage: FC<TeamsPage> = ({ teams, header }) => {
  return <Dashboard header={header} main={<Teams teams={teams} />} />;
};

export type TeamsPage = {
  teams?: Team[];
  header?: HeaderProps;
};