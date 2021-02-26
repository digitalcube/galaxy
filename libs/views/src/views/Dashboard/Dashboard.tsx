import React, { FC, ReactNode } from 'react';
import { Header } from '@galaxy/views';

export const Dashboard: FC<Dashboard> = ({
  children,
  items,
  avatar,
}: Dashboard) => {
  return (
    <>
      <Header items={items} avatar={avatar} />
      {children ? children : null}
    </>
  );
};

export type Dashboard = {
  avatar: Header;
  items: Header;
  children: ReactNode;
};
