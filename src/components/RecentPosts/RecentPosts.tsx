import React, { FC, ReactNode } from 'react';
import { Posts, Heading, Container, Content, Grid } from '../index';

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
          <b>{title}</b>
        </Heading>
        <Posts
          sx={{
            '& > :first-child': {
              gridRow: '1 / 4',
              gridColumn: 2,
            },
            '& > :not(:first-child)': {
              variant: 'cards.row',
            },
          }}
          columns={['2fr 1fr']}
          nodes={nodes}
        />
      </Content>
    </Container>
  );
};

RecentPosts.defaultProps = {
  title: `Eu in aliqua do ipsum.`,
  nodes: [
    {
      img: `post-featured-image.png`,
      title: `Esse quis nostrud commodo in nostrud mollit`,
      href: `#!`,
      author: `Cillum Sunt`,
      date: `Jan 1, 2049`,
    },
    {
      title: `In commodo aliqua voluptate et sint magna`,
      href: `#!`,
      author: `Cupidatat Proident`,
      date: `Jan 1, 2049`,
    },
    {
      title: `Est officia minim ad mollit ea elit sint aliqua`,
      href: `#!`,
      author: `Reprehenderit Officia`,
      date: `Jan 1, 2049`,
    },
    {
      title: `Adipisicing ea ea anim cillum ipsum culpa quis sit officia magna`,
      href: `#!`,
      author: `Labore Proident`,
      date: `Jan 1, 2049`,
    },
  ],
};
