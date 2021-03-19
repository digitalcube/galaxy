import React, { FC } from 'react';
import { UserGroup } from 'heroicons-react';
import { Heading, Section } from '@galaxy/core';

export const SiteTeam: FC<SiteTeam> = ({ team }: SiteTeam) => {
  if (team === 'undefined') return null;
  return (
    <Section className="flex items-center space-x-2">
      <UserGroup size={16} />
      <Heading text={team} />
    </Section>
  );
};

export type SiteTeam = {
  team?: string;
};
