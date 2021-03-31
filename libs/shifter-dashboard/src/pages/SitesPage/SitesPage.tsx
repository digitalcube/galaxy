import React, { FC } from 'react';
import { Header, Dashboard } from '@galaxy/views';
import { Sites, Site } from '@galaxy/shifter-dashboard';

export const SitesPage: FC<SitesPage> = ({ sites, header }) => {
  return <Dashboard header={header} main={<Sites sites={sites} />} />;
};

export type SitesPage = {
  sites: Site[];
  header?: Header;
};