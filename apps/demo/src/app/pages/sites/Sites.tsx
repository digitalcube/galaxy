import React, { FC } from 'react';
import { Sites, Site } from '@galaxy/shifter-dashboard';
import { fakerSites } from '@galaxy/faker';
import { Main } from '@galaxy/views';

const sites = fakerSites as Site[];
export const PageSites: FC = () => {
  return (
    <Main title="Sites">
      <Sites sites={sites} />
    </Main>
  );
};
