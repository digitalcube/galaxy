import React, { FC } from 'react';
import { Section, fakerTeams } from '@galaxy/core';
import { Team, TeamsControls } from '@galaxy/shifter-dashboard';

export const Teams: FC<Teams> = ({ teams }) => {
  console.log(teams);
  if (!teams) return null;
  const allTeams = teams.map((site, i) => {
    const { name, url, state, img, team, progress } = site;
    return (
      <Team
        key={i}
        name={`${name}`}
        url={`${url}`}
        state={`${state}`}
        img={img}
        team={team}
        progress={progress}
      />
    );
  });

  return (
    <Section className="space-y-10 px-8">
      <TeamsControls />
      <Section className="space-y-4">{allTeams}</Section>
    </Section>
  );
};

export type Teams = {
  teams?: Team[];
};

Teams.defaultProps = {
  teams: fakerTeams
}
