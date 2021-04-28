import React, { FC } from 'react';
import { Header, Main, Banner } from '@galaxy/views';
import { PostList } from '@galaxy/core';

export const FrontPage: FC<FrontPage> = ({posts}) => {
  return (
    <>
      <Header />
      <Main>
        <Banner />
        <PostList schema="ProductCollection" posts={posts} />
      </Main>
    </>
  );
};

export type FrontPage = {
  posts?: FrontPage[];
  schema?: string;
};
