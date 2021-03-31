import React, { FC } from 'react';
import { Section } from '@galaxy/core';
import { Team, TeamsControls } from '@galaxy/shifter-dashboard';

export const Teams: FC<Teams> = ({ teams }) => {
  if (!teams) return null;
  return (
    <Section className="space-y-10 px-8">
      <TeamsControls />
      <Section className="space-y-4">
        {teams.map((team, i) => (
            <Team
              key={i}
              {...team}
            />
          )
        )}
      </Section>
    </Section>
  );
};

export type Teams = {
  teams?: Team[];
};