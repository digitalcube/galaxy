import React, { FC } from 'react';
import { Sites, Header, Dashboard } from '@galaxy/views';
import { fakerHeader } from '@galaxy/core';

export const SitesPage: FC<SitesPage> = ({ sites, header }) => {
  return (
    <Dashboard header={fakerHeader}>
      <Sites sites={sites} />
    </Dashboard>
  );
};

export type SitesPage = {
  sites?: Sites;
  header?: Header;
};
