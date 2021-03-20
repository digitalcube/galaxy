import React, { FC, ReactNode } from 'react';
import { Header } from '@galaxy/views';
import { Section } from '@galaxy/core';

export const Dashboard: FC<Dashboard> = ({
  children,
  header,
  main,
}: Dashboard) => {
  return (
    <Section className="bg-white min-h-screen">
      <Header {...header} />
      {children ? children : null}
      {main ? main : null}
    </Section>
  );
};

export type Dashboard = {
  header?: Header;
  children?: ReactNode;
  main?: ReactNode;
};
