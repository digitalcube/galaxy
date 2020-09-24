import React from 'react';

import { Layout, PostHeader, Categories } from '../../../components/index';

type Post = {
  title?: string;
  category?: string;
  author?: string;
  date?: string;
  categories?: Categories;
};

export const Post = ({ title, category, author, date, categories }: Post) => {
  return (
    <Layout postType="post" categories={{ ...categories }}>
      <PostHeader
        title={title}
        category={category}
        author={author}
        date={date}
      />
    </Layout>
  );
};

Post.defaultProps = {
  title: `Ad Consectetur`,
  category: `Proident`,
  author: `Magna Aliqua`,
  date: `Velit 4, 2049`,
  postType: `post`,
  categories: {
    title: `Adipisicing`,
  },
};
