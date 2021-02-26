import React, { FC } from 'react';
import { UserGroup } from 'heroicons-react';
import { Heading, Section } from '@galaxy/core';

export const Team: FC<Team> = ({ team }: Team) => {
  if (team === 'undefined') return null;
  return (
    <Section className="border-t border-shifter-gray-200 px-3 py-4">
      <Section className="flex items-center space-x-2">
        <UserGroup size={16} />
        <Heading>{team}</Heading>
      </Section>
    </Section>
  );
};

export type Team = {
  team?: string;
};
