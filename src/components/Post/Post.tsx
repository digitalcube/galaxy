import React from 'react';
import { Card } from './../Card/index';
import { Date } from './../Date';

export type Post = {
  content?: {
    title?: string;
    subtitle?: React.ReactNode;
    excerpt?: string;
    author?: string;
    date?: string;
    img?: React.ReactNode;
    link?: string;
  };
  theme?: string;
};

export const Post: React.FC<Post> = ({
  content = {
    title: ``,
    subtitle: ``,
    excerpt: ``,
    date: ``,
    author: ``,
    link: ``,
    img: ``,
  },
  theme = ``,
}: Post) => {
  const { title, img, date, link, author } = content;
  return (
    <Card
      theme={theme}
      content={{
        header: {
          title: title,
          subtitle: <Date>{date}</Date>,
          link: link,
        },
        image: {
          img: img,
          link: link,
        },
      }}
    />
  );
};
