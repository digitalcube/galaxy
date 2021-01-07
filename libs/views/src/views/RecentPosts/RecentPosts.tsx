import React, { FC, ReactNode } from 'react';
import { Posts } from '../Posts';
import { Heading, Container, Content } from '@galaxy/core';

export type RecentPostsProps = {
  title?: string;
  nodes?: object;
};

export const RecentPosts: FC<RecentPostsProps> = ({ title = 'Recent Posts', nodes }) => {
  if (!nodes) return null;
  return (
    <Container
      as="section"
      size="4"
      sx={{
        py: 7,
        px: '5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Content>
        <Heading as="h3" size="5">
          <b>{title}</b>
        </Heading>
        <Posts
          variant="blog"
          sx={{
            '& > :first-child': {
              gridRow: [null, null, null, null, '1 / 4'],
              gridColumn: [null, null, null, null, 2],
            },
            '& > :not(:first-child)': {
              variant: [null, null, null, null, 'cards.row'],
            },
          }}
          columns={[1, null, null, null, '2fr 1fr']}
          nodes={nodes}
        />
      </Content>
    </Container>
  );
};
