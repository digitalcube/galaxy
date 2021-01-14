import React, { FC } from 'react';

import { Hero, Layout, HeaderProps } from '@digitalcube/galaxy-views';

export const FrontPage: FC<{
  header: HeaderProps;
}> = ({ header }) => {
  return (
    <Layout header={header}>
      <Hero />
    </Layout>
  );
};
