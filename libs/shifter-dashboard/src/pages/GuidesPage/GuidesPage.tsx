import React, { FC } from 'react';
import { Header, Dashboard } from '@galaxy/views';
import { Guides } from '../../views';

export const GuidesPage: FC<GuidesPage> = ({ guides, header }) => {
  return (
  <Dashboard header={header}>
    <Guides guides={guides} />
  </Dashboard>
  );
};

export type GuidesPage = Guides & {
  header?: Header;
};
