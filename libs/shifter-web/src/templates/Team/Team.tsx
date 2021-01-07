import React from 'react';
import { Team as TeamComponent, PageHeader } from '@galaxy/views';

type Team = {
  nodes?: any;
  title?: string;
  subtitle?: string;
};

export const Team = ({ nodes, title, subtitle }: Team) => {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <TeamComponent nodes={nodes} />
    </>
  );
};
