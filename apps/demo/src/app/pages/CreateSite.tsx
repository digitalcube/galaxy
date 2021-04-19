import React, { FC } from 'react';
import { Main } from '@galaxy/views';
import { CreateSite } from '@galaxy/shifter-dashboard';
export const PageCreateSite: FC = () => {
  return <Main title="Create a new site"><CreateSite /></Main>;
};

export type PageCreateSiteProps = {
  title: string;
};