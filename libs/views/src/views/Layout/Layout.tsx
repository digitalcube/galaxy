import React, { ReactNode } from 'react';
import { Header, HeaderProps } from '../Header';
import { Footer } from '../Footer';

export type Layout = {
  children?: ReactNode;
  header: HeaderProps;
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
