import React from 'react';
import { Heading, Link, Shape, Container, Content } from '@galaxy/core';
import { Posts } from '../../views/Posts';

export type Features = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
  nodes?: Posts;
  kind?: string;
  columns?: any;
};

export const Features = ({
  title,
  subtitle,
  nodes,
  href,
  buttonLabel,
  kind,
  columns,
}: Features) => {
  return (
    <Container
      as="section"
      size="4"
      sx={{
        py: 7,
        px: '5%',
      }}
    >
      <Container
        size="1"
        sx={{
          mb: 5,
        }}
      >
        <Shape shape="triangle">
          <Content align="center">
            <Heading size="6">
              <b>{title}</b>
            </Heading>
            <Heading as="p" size="3">
              {subtitle}
            </Heading>
          </Content>
        </Shape>
      </Container>
      <Container>
        <Posts
          variant={kind}
          columns={columns}
          sx={{
            textAlign: 'center',
          }}
          nodes={nodes}
        />
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
  columns: [1, null, null, null, 2, 4],
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
