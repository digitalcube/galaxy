import React, { ReactNode } from 'react';
import { Header, Galaxy, GetStarted, Footer } from '../index';

type Layout = {
  children?: ReactNode;
};

export const Layout = ({ children }: Layout) => {
  return (
    <Galaxy>
      <Header />
      {children ? children : null}
      <GetStarted />
      <Footer />
    </Galaxy>
  );
};
