import React from 'react';
import { Heading, Link, Card, Container, Content, Image, Grid } from '../index';

type Features = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
  nodes?: Feature[];
};

type Feature = {
  title?: string;
  excerpt?: string;
  href?: string;
  img?: string;
};

export const Feature = ({ img, title, excerpt }: Feature) => {
  return (
    <Card
      sx={{ textAlign: 'center', p: 4 }}
      img={<Image img={img} />}
      title={title}
      excerpt={excerpt}
    />
  );
};

export const FeaturesNodes = ({ nodes }: Features) => {
  if (!nodes) return null;
  const featureNodes = nodes.map((node: Card, i) => {
    const { title, img, excerpt } = node;
    return <Feature key={i} title={title} img={img} excerpt={excerpt} />;
  });

  return <Grid columns={[2, null, null, null, null, 4]}>{featureNodes}</Grid>;
};

export const Features = ({
  title,
  subtitle,
  nodes,
  href,
  buttonLabel,
}: Features) => {
  return (
    <Container
      as="section"
      size="4"
      sx={{
        py: 7,
      }}
    >
      <Container
        size="1"
        sx={{
          mb: 5,
        }}
      >
        <Content align="center">
          <Heading size="6">
            <b>{title}</b>
          </Heading>
          <Heading as="p" size="3">
            <b>{subtitle}</b>
          </Heading>
        </Content>
      </Container>
      <Container>
        <FeaturesNodes nodes={nodes} />
        <Content
          align="center"
          sx={{
            mt: 5,
          }}
        >
          <Link kind="primary" href={href}>
            {buttonLabel}
          </Link>
        </Content>
      </Container>
    </Container>
  );
};

Features.defaultProps = {
  title: `Sunt deserunt`,
  subtitle: `Et cillum non cupidatat non dolore nostrud ad nisi.`,
  href: `#!`,
  buttonLabel: `Nostrud nisi`,
  nodes: [
    {
      title: `Magic Link Logins`,
      excerpt: `You’ll never forget your WordPress password on Shifter because you’ll never have to.`,
      href: `#`,
      img: `https://www.getshifter.io/static/a5fe464c4339cf677b4496a7c7eb757d/9c44f/icon_feature-MagicLinks.png`,
    },
    {
      title: `Security Built-in`,
      excerpt: `Don’t spend another minute configuring security Plugins. We have you covered.`,
      href: `#`,
      img: `https://www.getshifter.io/static/a5fe464c4339cf677b4496a7c7eb757d/9c44f/icon_feature-MagicLinks.png`,
    },
    {
      title: `Integrated CDN`,
      excerpt: `Deliver fast static content to site visitors anywhere in the world with low latency.`,
      href: `#`,
      img: `https://www.getshifter.io/static/a5fe464c4339cf677b4496a7c7eb757d/9c44f/icon_feature-MagicLinks.png`,
    },
    {
      title: `Maintenance-free`,
      excerpt: `Never worry about security vulnerabilities from WordPress Core, themes, and outdated plugins.`,
      href: `#`,
      img: `https://www.getshifter.io/static/a5fe464c4339cf677b4496a7c7eb757d/9c44f/icon_feature-MagicLinks.png`,
    },
  ],
};
