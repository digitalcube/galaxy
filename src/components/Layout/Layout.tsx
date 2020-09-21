import React, { ReactNode } from 'react';
import { Header, Galaxy, GetStarted, Footer } from '../index';

type Layout = {
  children?: ReactNode;
  header?: object;
};

export const Layout = ({ children, header }: Layout) => {
  return (
    <Galaxy>
      <Header {...header} />
      {children ? children : null}
      <GetStarted />
      <Footer />
    </Galaxy>
  );
};
