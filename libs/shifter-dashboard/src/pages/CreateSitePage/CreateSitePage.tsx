import React, { FC } from 'react';
import { HeaderProps, Dashboard } from '@galaxy/views';
import { CreateSite, CreateSiteProps } from '@galaxy/shifter-dashboard';

export const CreateSitePage: FC<CreateSitePage> = ({ header }) => {
  return (
  <Dashboard header={header}>
    <CreateSite />
  </Dashboard>
  );
};

export type CreateSitePage = CreateSiteProps & {
  header?: HeaderProps;
};
