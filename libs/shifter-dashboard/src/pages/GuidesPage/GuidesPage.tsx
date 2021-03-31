import React, { FC } from 'react';
import { Header, Dashboard } from '@galaxy/views';
import { Teams, Team } from '@galaxy/shifter-dashboard';

export const GuidesPage: FC<GuidesPage> = ({ teams, header }) => {
  return <Dashboard header={header} main={<Teams teams={teams} />} />;
};

export type GuidesPage = {
  teams?: Team[];
  header?: Header;
};
