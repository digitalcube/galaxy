import React, { FC } from 'react';
import { Sites, Header, Dashboard } from '@galaxy/views';
import { fakerHeader, fakerSites } from '@galaxy/core';

export const TeamsPage: FC<TeamsPage> = ({ sites, header }) => {
  return (
    <Dashboard header={header}>
      <Sites sites={sites} />
    </Dashboard>
  );
};

export type TeamsPage = {
  sites?: Sites[];
  header?: Header;
};

TeamsPage.defaultProps = {
  header: fakerHeader,
  sites: fakerSites,
};
