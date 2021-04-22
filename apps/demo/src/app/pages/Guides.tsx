import React, { FC } from 'react';
import { Main } from '@galaxy/views';

import { Guides } from '@galaxy/shifter-dashboard';
import { fakerGuides } from '@galaxy/faker';
const useDummyProps = () => {
  return {
    guides: fakerGuides,
  };
};
export const PageGuides: FC = () => {
  const { guides } = useDummyProps();
  return (
    <Main title="Guides">
      <Guides guides={guides} />
    </Main>
  );
};

export type PageGuidesProps = {};
