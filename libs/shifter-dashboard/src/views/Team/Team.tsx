import React, { FC } from 'react';
import { TeamMembers, TeamName, TeamManage } from '@galaxy/shifter-dashboard';
import { Card, css } from '@galaxy/core';
import { teamTheme } from './Team.galaxy';
const { team } = teamTheme;

export const Team: FC<Team> = ({ name, team, teamMembers }: Team) => {
  const teamCss = css({ variants: team });
  return (
    <Card
      variant="primary"
      className={`${teamCss}`}
      mainClassName="flex flex-grow flex-row justify-between space-x-4 items-center"
      main={
        <>
          <TeamName name={name} className="flex-grow" />
          <TeamMembers {...teamMembers} />
          <TeamManage />
        </>
      }
    />
  );
};

export type Team = {
  name: string;
  team?: string;
  teamMembers: TeamMembers;
};

Team.defaultProps = {
  name: 'name',
  team: 'team',
};
