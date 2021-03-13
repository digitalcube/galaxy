import React, { FC } from 'react';
import { UserGroup } from 'heroicons-react';
import { Heading, Section } from '@galaxy/core';

export const Team: FC<Team> = ({ team }: Team) => {
  if (team === 'undefined') return null;
  return (
    <Section className="flex items-center space-x-2">
      <UserGroup size={16} />
      <Heading text={team} />
    </Section>
  );
};

export type Team = {
  team?: string;
};
