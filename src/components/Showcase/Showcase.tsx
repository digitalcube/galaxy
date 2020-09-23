import React from 'react';
import {
  Heading,
  Link,
  Container,
  Content,
  Image,
  Post,
  Grid,
  Posts,
} from '../index';

type Showcase = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
  nodes?: Post[];
};

export const Showcase = ({
  title,
  subtitle,
  buttonLabel,
  href,
  nodes,
}: Showcase) => {
  return (
    <Container
      as="section"
      sx={{
        py: 6,
      }}
    >
      <Grid columns={[1, null, null, 2]}>
        <Content>
          <Heading as="h2" size="6">
            {title}
          </Heading>
          <Heading as="h2" size="4">
            {subtitle}
          </Heading>
          <Link kind="primary" href={href}>
            {buttonLabel}
          </Link>
        </Content>
        <Posts columns={[2]} nodes={nodes} />
      </Grid>
    </Container>
  );
};

Showcase.defaultProps = {
  title: `Get Inspired`,
  subtitle: `See how our customers are already building static sites with Shifter.`,
  buttonLabel: `View the Showcase`,
  href: `#`,
  nodes: [
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: (
        <Link href="https://example.com">
          <Image img="https://www.getshifter.io/static/5b8d04811ce4850fad82e16214795926/39f27/soracom.jpg" />
        </Link>
      ),
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: (
        <Link href="https://example.com">
          <Image img="https://www.getshifter.io/static/1f94269f0d484cd3750314acef23695d/39f27/screenshot-vu.jpg" />
        </Link>
      ),
    },
  ],
};
