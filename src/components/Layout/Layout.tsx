import React, { ReactNode } from 'react';
import { Header, Footer, Categories, NavLink } from '../index';

type Layout = {
  children?: ReactNode;
  header?: object;
  postType?: string;
  categories?: {
    title?: string;
    nodes?: NavLink[];
  };
};

export const Layout = ({ children, header, postType, categories }: Layout) => {
  if (postType === `post`) {
    return (
      <>
        <Header {...header} />
        <Categories {...categories} />
        {children ? children : null}
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header {...header} />
      {children ? children : null}
      <Footer />
    </>
  );
};
