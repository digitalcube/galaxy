import React, { FC } from 'react';
import { TeamsSort, TeamsCreate } from '@galaxy/views';
import { Section } from '@galaxy/core';

export const TeamsControls: FC = () => {
  return (
    <Section className="flex flex-row space-x-6 justify-between">
      <TeamsSort />
      <TeamsCreate />
    </Section>
  );
};