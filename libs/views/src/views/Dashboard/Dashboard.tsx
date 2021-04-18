import React, { FC, ReactNode } from 'react';
import { Header, Search } from '@galaxy/views';
import { Section, Menu, Avatar } from '@galaxy/core';

export const Dashboard: FC<Dashboard> = ({
  children,
  header,
  main,
}: Dashboard) => {
  return (
    <Section className="bg-white min-h-screen">
      <Header
        {...header}
        main={<Search variant="ghost" />}
        aside={
          <>
            <Menu items={header?.items} />
            <Avatar {...header?.avatar} />
          </>
        }
      />
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
