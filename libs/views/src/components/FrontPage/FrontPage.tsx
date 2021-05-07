import React, { FC } from 'react';
import { Header, Main, Banner, Footer } from '@galaxy/views';
import { PostList, Menu } from '@galaxy/core';
import { fakerSwagStoreHeader, swagStoreCategories } from '@galaxy/faker';

export const FrontPage: FC<FrontPage> = ({ posts }) => {
  document.body.classList.add('bg-white');
  return (
    <>
      <Header
        className="container mx-auto mb-8 mt-10"
        mainClassName="justify-end"
        main={
          <Menu
            className="flex items-center space-x-8"
            {...fakerSwagStoreHeader}
          />
        }
      />
      <Main className="container mx-auto">
        <Banner />
        <Menu
          className="flex justify-center my-14 space-x-8"
          {...swagStoreCategories}
        />
        <PostList schema="ProductCollection" posts={posts} className="mb-8" />
      </Main>
      <Footer
        mainClassName="space-x-8 py-12 text-size-3 text-white"
        className="pb-8"
        main={
          <>
            <Menu
              alignment="vertical"
              className="flex justify-center space-y-4"
              {...swagStoreCategories}
            />
            <Menu
              alignment="vertical"
              className="flex justify-center space-y-4"
              {...swagStoreCategories}
            />
          </>
        }
      />
    </>
  );
};

export type FrontPage = {
  posts?: FrontPage[];
  schema?: string;
};
