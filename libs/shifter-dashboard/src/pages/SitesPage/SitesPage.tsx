import React, { FC } from 'react';
import { Header, Dashboard } from '@galaxy/views';
import { Sites } from '@galaxy/shifter-dashboard';
import { fakerHeader, fakerSites } from '@galaxy/core';

export const SitesPage: FC<SitesPage> = ({ sites, header }) => {
  return <Dashboard header={header} main={<Sites sites={sites} />} />;
};

export type SitesPage = {
  sites?: Sites[];
  header?: Header;
};

SitesPage.defaultProps = {
  header: fakerHeader,
  sites: fakerSites,
};
