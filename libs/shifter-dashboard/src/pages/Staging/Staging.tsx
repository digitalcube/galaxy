import React, { FC } from 'react';
import { Section, MenuItems } from '@galaxy/core';
import { fakerHeader } from '@galaxy/faker';

import { Dashboard, Aside, Main } from '@galaxy/views';

import { Deploys } from '../../views/Deploys/Deploys';

export const Staging: FC<Staging> = ({ items, name, state }) => {
  return (
    <Dashboard header={fakerHeader}>
      <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
        <Aside items={items} name={name} />
        <Main className="p-8 w-full border-l border-shifter-gray-200 space-y-8">
          <Deploys state={state} />
        </Main>
      </Section>
    </Dashboard>
  );
};

export type Staging = {
  items: MenuItems;
  name: string;
  state: string;
};
