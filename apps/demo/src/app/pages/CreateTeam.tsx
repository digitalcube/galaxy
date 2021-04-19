import React, { FC } from 'react';
import { Main } from '@galaxy/views';
import { CreateTeam } from '@galaxy/shifter-dashboard';
export const PageCreateTeam: FC = () => {
  return (
    <Main title="Create a new team">
      <CreateTeam />
    </Main>
  );
};

export type PageCreateTeamProps = {
  title: string;
};
