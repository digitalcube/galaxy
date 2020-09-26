import React, { ReactNode } from 'react';
import { Header, Footer } from '../index';

export type Layout = {
  children?: ReactNode;
  header?: Header;
  footer?: Footer;
};

export const Layout = ({ children, header, footer }: Layout) => {
  return (
    <>
      <Header {...header} />
      {children ? children : null}
      <Footer {...footer} />
    </>
  );
};
