import React, { FC } from 'react';
import { HeaderProps, Dashboard } from '@galaxy/views';
import { CreateSite } from '../../views';

export const CreateSitePage: FC<CreateSitePage> = ({ header }) => {
  return (
  <Dashboard header={header}>
    <CreateSite />
  </Dashboard>
  );
};

export type CreateSitePage = CreateSite & {
  header?: HeaderProps;
};
