import React, { FC } from 'react';
import { CreateDomain } from '@galaxy/shifter-dashboard';
export const PageCreateDomain: FC = () => {
  return <CreateDomain />;
};

export type PageCreateDomainProps = {
  title: string;
};