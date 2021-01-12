import React, { FC } from 'react';
import { PostHeader, FeaturedImage } from '@galaxy/views';
import { Container, Content } from '@galaxy/core';

export type PostProps = {
  title?: string;
  category?: string;
  img?: string;
  author?: string;
  date?: string;
  content?: string;
};

export const Post: FC<PostProps> = ({
  title,
  category,
  author,
  date,
  img,
  content,
}) => {
  return (
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
        <Content
          sx={{
            a: {
              color: 'primary',
            },
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: content ? content : `` }} />
        </Content>
      </Container>
    </Container>
  );
};
