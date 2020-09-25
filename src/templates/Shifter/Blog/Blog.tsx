import React from 'react';
import { Layout, Posts, Container } from '../../../components/index';

type Blog = {
  nodes?: any;
};

export const Blog = ({ nodes }: Blog) => {
  return (
    <Layout postType="showcase">
      <Container size="4">
        <Posts variant="blog" columns={[1, null, 2, 3]} nodes={nodes} />
      </Container>
    </Layout>
  );
};

Blog.defaultProps = {
  nodes: [
    {
      title: `Magna fugiat ullamco ad in in est`,
      category: `Nulla fugiat`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Occaecat sint veniam nisi magna ipsum pariatur`,
      category: `Excepteur`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Soracom`,
      category: `Excepteur`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      category: `Excepteur`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Soracom`,
      category: `Nulla fugiat`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      href: `https://example.com`,
      category: `Nulla fugiat`,
      img: `post-featured-image.png`,
    },
    {
      title: `Soracom`,
      category: `Excepteur`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      category: `Excepteur`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Soracom`,
      category: `Excepteur`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      category: `Excepteur`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
  ],
};
