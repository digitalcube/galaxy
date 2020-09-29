import React from 'react';
import { Layout } from '../../../components/Layout';
import { Posts } from '../../../components/Posts';
import { Container } from '../../../components/Container';
import { PageHeader } from '../../../components/PageHeader';
import { GetStarted } from '../../../components/GetStarted';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

type Showcase = {
  title?: string;
  subtitle?: string;
  nodes?: any;
  getStarted?: GetStarted;
  header?: Header;
  footer?: Footer;
};

export const Showcase = ({
  header,
  footer,
  title,
  subtitle,
  nodes,
  getStarted,
}: Showcase) => {
  return (
    <Layout {...header} {...footer}>
      <Container size="4">
        <PageHeader title={title} subtitle={subtitle} />
        <Posts variant="minimal" columns={[1, null, null, 2]} nodes={nodes} />
      </Container>
      <GetStarted {...getStarted} />
    </Layout>
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
