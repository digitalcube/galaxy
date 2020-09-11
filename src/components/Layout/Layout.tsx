import React, { ReactNode } from 'react';
import { Header, Galaxy } from '../index';

type Layout = {
  children?: ReactNode;
};

export const Layout = ({ children }: Layout) => {
  return (
    <Galaxy>
      <Header />
      {children ? children : null}
    </Galaxy>
  );
};
