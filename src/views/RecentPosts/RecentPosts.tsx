import React, { FC, ReactNode } from 'react';
import { Posts } from '../Posts';
import { Heading } from '../../components/Heading';
import { Container } from '../../components/Container';
import { Content } from '../../components/Content';

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
        py: 7,
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

RecentPosts.defaultProps = {
  title: `Eu in aliqua do ipsum.`,
  nodes: [
    {
      author: `Cillum Sunt`,
      date: `Jan 1, 2049`,
      href: `#!`,
      img: `post-featured-image.png`,
      title: `Introducing Pickup Philly, an open-source business directory built on the Jamstack`,
      category: `Events`,
    },
    {
      author: `Cupidatat Proident`,
      date: `Jan 1, 2049`,
      href: `#!`,
      img: `post-featured-image-1.png`,
      title: `Explaining the Difference Between Shifter Static and Shifter Headless`,
      category: `Blog`,
    },
    {
      author: `Reprehenderit Officia`,
      date: `Jan 1, 2049`,
      href: `#!`,
      img: `post-featured-image-2.png`,
      title: `Upgrade your business with a purpose-built form and Shifter Static integration`,
      category: `Announcement`,
    },
    {
      author: `Labore Proident`,
      date: `Jan 1, 2049`,
      href: `#!`,
      img: `post-featured-image.png`,

      category: `Announcement`,
      title: `Upgrade your business with a purpose-built form and Shifter Static integration`,
    },
  ],
};
