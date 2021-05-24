import React, { FC } from 'react';
import { HeaderProps, Dashboard } from '@galaxy/views';
import { Guides } from '../../views';

export const GuidesPage: FC<GuidesPage> = ({ guides, header }) => {
  return (
  <Dashboard header={header} main={<Guides guides={guides} />} />
  );
};

export type GuidesPage = Guides & {
  header?: HeaderProps;
};
