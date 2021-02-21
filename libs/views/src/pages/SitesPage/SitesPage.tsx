import React, { FC } from 'react';
import { Sites, Header } from '@galaxy/views';

export const SitesPage: FC<SitesPage> = ({ sites, header }) => {
  return (
    <>
      <Header {...header} />
      <Sites sites={sites} />
    </>
  );
};

export type SitesPage = {
  sites?: Sites;
  header?: Header;
};
