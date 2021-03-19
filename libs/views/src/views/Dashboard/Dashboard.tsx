import React, { FC, ReactNode } from 'react';
import { Header } from '@galaxy/views';
import { Section } from '@galaxy/core';

export const Dashboard: FC<Dashboard> = ({
  children,
  header
}: Dashboard) => {
  return (
    <Section className="bg-white h-screen">
      <Header {...header} />
      {children ? children : null}
    </Section>
  );
};

export type Dashboard = {
  header?: Header;
  children: ReactNode;
};
