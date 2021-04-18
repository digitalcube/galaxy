import React, { FC } from 'react';
import { Main } from '@galaxy/views';
import { fakerGuides } from '@galaxy/faker';
import { CreateSite } from '@galaxy/shifter-dashboard';
const useDummyProps = () => {
  return {
    guides: fakerGuides,
  };
};
export const PageCreate: FC = () => {
  const { guides } = useDummyProps();
  return <Main title="Create a new site"><CreateSite /></Main>;
};

export type PageCreateProps = {
  title: string;
};