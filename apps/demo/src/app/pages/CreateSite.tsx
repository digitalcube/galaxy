import React, { FC } from 'react';
import { CreateSite } from '@galaxy/shifter-dashboard';
export const PageCreateSite: FC = () => {
  return <CreateSite />;
};

export type PageCreateSiteProps = {
  title: string;
};