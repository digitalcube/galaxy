import React, { FC } from 'react';
import { Section, fakerHeader, MenuItems } from '@galaxy/core';
import { Aside, Dashboard, Main } from '@galaxy/views';
import { Site, Container } from '@galaxy/shifter-dashboard';

export const Dev: FC<Dev> = ({ items, name, container }) => {
  return (
    <Dashboard
      header={fakerHeader}
      main={
        <Section className="md:flex min-h-screen border-t border-shifter-gray-200">
          <Aside items={items} name={name} />
          <Main>
            <Container {...container} />
          </Main>
        </Section>
      }
    />
  );
};

export type Dev = {
  items: MenuItems;
  name: string;
  container: Container;
};
