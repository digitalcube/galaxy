import React from 'react';
import { Container } from '@galaxy/core';
import { Posts } from '../../../views/Posts';
import { PageHeader } from '../../../views/PageHeader';

type Showcase = {
  title?: string;
  subtitle?: string;
  nodes?: any;
};

export const Showcase = ({ title, subtitle, nodes }: Showcase) => {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      <Container
        as="section"
        size="4"
        sx={{
          px: '5%',
        }}
      >
        <Posts
          variant="blog"
          columns={[1, null, null, null, 2]}
          sx={{ img: { alignSelf: 'flex-start' } }}
          nodes={nodes}
        />
      </Container>
    </>
  );
};

Showcase.defaultProps = {
  title: `Velit a non`,
  subtitle: `Est cupidatat sunt est sint reprehenderit eiusmod exercitation in tempor.`,
  nodes: [
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `https://www.getshifter.io/static/5b8d04811ce4850fad82e16214795926/39f27/soracom.jpg`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `https://www.getshifter.io/static/1f94269f0d484cd3750314acef23695d/39f27/screenshot-vu.jpg`,
    },
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `https://www.getshifter.io/static/5b8d04811ce4850fad82e16214795926/39f27/soracom.jpg`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `https://www.getshifter.io/static/1f94269f0d484cd3750314acef23695d/39f27/screenshot-vu.jpg`,
    },
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `https://www.getshifter.io/static/5b8d04811ce4850fad82e16214795926/39f27/soracom.jpg`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `https://www.getshifter.io/static/1f94269f0d484cd3750314acef23695d/39f27/screenshot-vu.jpg`,
    },
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `https://www.getshifter.io/static/5b8d04811ce4850fad82e16214795926/39f27/soracom.jpg`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `https://www.getshifter.io/static/1f94269f0d484cd3750314acef23695d/39f27/screenshot-vu.jpg`,
    },
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `https://www.getshifter.io/static/5b8d04811ce4850fad82e16214795926/39f27/soracom.jpg`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `https://www.getshifter.io/static/1f94269f0d484cd3750314acef23695d/39f27/screenshot-vu.jpg`,
    },
  ],
};
