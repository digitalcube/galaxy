import React, { FC, ReactNode } from 'react';
import { Posts, Heading, Container, Content } from '../index';

export type RecentPosts = {
  title?: string;
  children?: ReactNode;
  nodes?: object;
};

export const RecentPosts: FC<RecentPosts> = ({ title, nodes }: RecentPosts) => {
  if (!nodes) return null;
  return (
    <Container
      as="section"
      size="4"
      sx={{
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Content>
        <Heading as="h3" size="5">
          {title}
        </Heading>
        <Posts columns={[2, null, null, null, 3]} nodes={nodes} />
      </Content>
    </Container>
  );
};

RecentPosts.defaultProps = {
  title: `Eu in aliqua do ipsum.`,
  nodes: [
    {
      title: `Duis Adipisicing`,
      href: `#!`,
    },
    {
      title: `Consequat`,
      href: `#!`,
    },
    {
      title: `Et Tempor`,
      href: `#!`,
    },
    {
      title: `Cupidatat`,
      href: `#!`,
    },
  ],
};
