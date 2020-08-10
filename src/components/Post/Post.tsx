import React from 'react';
import { Card } from './../Card/index';
import { Date } from './../Date';

export type Post = {
  content?: {
    title?: string;
    subtitle?: string;
    excerpt?: string;
    img?: React.ReactNode;
  };
};

export const Post: React.FC<Post> = ({
  content = {
    title: ``,
    subtitle: ``,
    excerpt: ``,
    img: null,
  },
}: Post) => {
  console.log(content);
  const { title, subtitle, excerpt, img } = content;
  return (
    <Card
      content={{
        header: {
          title: title,
          subtitle: subtitle,
          excerpt: excerpt,
        },
        image: {
          img: img,
        },
      }}
    />
  );
};
