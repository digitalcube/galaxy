import React, { ReactNode } from 'react';
import { PostHeader } from '../../../components/PostHeader';
import { Categories } from '../../../components/Categories';
import { FeaturedImage } from '../../../components/FeaturedImage';
import { Container } from '../../../components/Container';
import { Content } from '../../../components/Content';
import { RecentPosts } from '../../../components/RecentPosts';

type Post = {
  title?: string;
  category?: string;
  img?: string;
  author?: string;
  date?: string;
  categories?: Categories;
  recentPosts?: RecentPosts;
  content?: ReactNode;
};

export const Post = ({
  title,
  category,
  author,
  date,
  categories,
  img,
  content,
  recentPosts,
}: Post) => {
  return (
    <>
      <Categories {...categories} />
      <Container size="4">
        <PostHeader
          title={title}
          category={category}
          author={author}
          date={date}
        />
        <FeaturedImage img={img} />
        <Container
          size="1"
          sx={{
            my: 4,
          }}
        >
          <Content>{content}</Content>
        </Container>
      </Container>
      <RecentPosts {...recentPosts} />
    </>
  );
};

Post.defaultProps = {
  title: `Velit a non Consectetur Sint Offica Sunt Commodo ad Proident`,
  category: `Proident`,
  author: `Magna Aliqua`,
  date: `Velit 4, 2049`,
  categories: {
    title: `Adipisicing`,
  },
  content: (
    <>
      <h4>
        Eiusmod laborum nulla elit Lorem nisi nisi officia est cupidatat.
        Commodo magna magna esse voluptate consectetur aliquip proident nulla
        consectetur nulla culpa aliquip exercitation. In velit velit do
        consectetur aute. Esse id consequat aute magna.
      </h4>

      <p>
        Non adipisicing non deserunt esse. Eu aliqua deserunt incididunt irure
        officia adipisicing adipisicing excepteur irure non aliqua fugiat
        exercitation laborum. Pariatur proident nulla tempor ea. Dolore dolor
        aute officia id laborum duis amet ea ut ex sint nostrud. Deserunt labore
        aute officia duis aliquip non cupidatat aliquip occaecat minim.
      </p>

      <p>
        Cillum consequat exercitation eu ea enim culpa magna nostrud id ipsum
        eiusmod eu est. Exercitation exercitation quis irure adipisicing sit
        laborum do officia qui non ad consequat magna. Quis ullamco irure
        laboris ullamco eiusmod mollit sunt velit reprehenderit deserunt minim
        occaecat aliqua.
      </p>
    </>
  ),
};
