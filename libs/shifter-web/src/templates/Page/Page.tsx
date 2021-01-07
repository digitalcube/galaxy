import React, { FC } from 'react';
import { PostHeader } from '@galaxy/views';
import { Container, Content } from '@galaxy/core';
export type PageProps = {
  title?: string;
  subtitle?: string;
  content?: string;
};

export const Page: FC<PageProps> = ({ title, subtitle, content }) => {
  return (
    <Container size="4">
        <PostHeader title={title} subtitle={subtitle} />
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
