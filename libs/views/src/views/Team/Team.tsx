import React, { FC } from 'react';
import { TeamMembers, TeamName, TeamManage } from '@galaxy/views';
import { Card, css } from '@galaxy/core';
import { teamTheme } from './Team.galaxy';
const { team } = teamTheme;

export const Team: FC<Team> = ({ name, team, teamMembers }: Team) => {
  const teamCss = css({ variants: team });
  return (
    <Card
      variant="primary"
      className={`${teamCss}`}
      mainClassName="flex flex-grow flex-row justify-between space-x-4"
      main={
        <>
          <TeamName name={name} />
          <TeamMembers members={teamMembers} />
          <TeamManage />
        </>
      }
    />
  );
};

export type Team = {
  img?: string;
  name: string;
  team?: string;
  url: string;
  variant?: string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
  teamMembers: TeamMembers;
  variants: typeof team;
};

Team.defaultProps = {
  name: 'name',
  url: 'url',
  team: 'team',
  variant: 'primary',
  img: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
  progress: 1,
  variants: team,
};
