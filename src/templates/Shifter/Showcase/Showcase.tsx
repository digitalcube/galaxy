import React from 'react';
import { Posts } from '../../../views/Posts';
import { Container } from '../../../components/Container';
import { PageHeader } from '../../../views/PageHeader';

type Showcase = {
  title?: string;
  subtitle?: string;
  nodes?: any;
};

export const Showcase = ({ title, subtitle, nodes }: Showcase) => {
  return (
    <>
      <Container size="4">
        <PageHeader title={title} subtitle={subtitle} />
        <Posts variant="minimal" columns={[1, null, null, 2]} nodes={nodes} />
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
