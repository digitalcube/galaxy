import React, { FC, ReactNode } from 'react';
import { Header } from '@galaxy/views';
import { Section } from '@galaxy/core';

export const Dashboard: FC<Dashboard> = ({
  children,
  items,
  avatar,
}: Dashboard) => {
  return (
    <Section className="bg-white">
      <Header items={items} avatar={avatar} />
      {children ? children : null}
    </Section>
  );
};

export type Dashboard = {
  avatar: Header;
  items: Header;
  children: ReactNode;
};
