import React, { ReactNode } from 'react';
import {
  Header,
  Footer,
  Categories,
  NavLink,
  RecentPosts,
  GetStarted,
} from '../index';

type Layout = {
  children?: ReactNode;
  postType?: string;
  header?: Header;
  getStarted?: GetStarted;
  categories?: Categories;
};

export const Layout = ({
  children,
  header,
  postType,
  categories,
  getStarted,
}: Layout) => {
  if (postType === `showcase`) {
    return (
      <>
        <Header {...header} />
        {children ? children : null}
        <GetStarted {...getStarted} />
        <Footer />
      </>
    );
  }

  if (postType === `post`) {
    return (
      <>
        <Header {...header} />
        <Categories {...categories} />
        {children ? children : null}
        <RecentPosts />
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
