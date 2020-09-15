import React from 'react';
import {
  Heading,
  Button,
  Spacer,
  NodeList,
  Container,
  Content,
  Image,
  Grid,
  Col,
  Post,
  Link,
} from '../index';

type Showcase = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
  nodes?: Post[];
};

export const ShowcaseNodes = ({ nodes = [] }: Showcase) => {
  const showcaseNodes = nodes.map((node: Post, i) => {
    const { title, img, excerpt, href } = node;
    return {
      node: (
        <Post key={i} href={href} title={title} img={img} excerpt={excerpt} />
      ),
    };
  });

  return <NodeList md="2" nodes={showcaseNodes} />;
};

export const Showcase = ({
  title = `Get Inspired`,
  subtitle = `See how our customers are already building static sites with Shifter.`,
  buttonLabel = `View the Showcase`,
  href = `#`,
  nodes = [
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: (
        <Link href={`https://example.com`}>
          <Image>
            <img
              src="https://www.getshifter.io/static/5b8d04811ce4850fad82e16214795926/39f27/soracom.jpg"
              alt=""
            />
          </Image>
        </Link>
      ),
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: (
        <Link href={`https://example.com`}>
          <Image>
            <img
              src="https://www.getshifter.io/static/1f94269f0d484cd3750314acef23695d/39f27/screenshot-vu.jpg"
              alt=""
            />
          </Image>
        </Link>
      ),
    },
  ],
}: Showcase) => {
  return (
    <Spacer size={3}>
      <Container>
        <Grid md={3}>
          <Col sm={1}>
            <Content>
              <Heading as="h2" size="lg">
                {title}
              </Heading>
              <Heading as="h2" size="sm">
                {subtitle}
              </Heading>
              <Button outline kind="primary" href={href}>
                {buttonLabel}
              </Button>
            </Content>
          </Col>
          <Col sm={2}>
            <ShowcaseNodes nodes={nodes} />
          </Col>
        </Grid>
      </Container>
    </Spacer>
  );
};