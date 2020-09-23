import React, { ReactNode } from 'react';
import { Header, Galaxy, Footer } from '../index';

type Layout = {
  children?: ReactNode;
  header?: object;
};

export const Layout = ({ children, header }: Layout) => {
  return (
    <Galaxy>
      <Header {...header} />
      {children ? children : null}
      <Footer />
    </Galaxy>
  );
};
