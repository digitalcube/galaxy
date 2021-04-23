import React, { FC } from 'react';
import { CreateTeam } from '@galaxy/shifter-dashboard';
export const PageCreateTeam: FC = () => {
  return <CreateTeam />;
};

export type PageCreateTeamProps = {
  title: string;
};
