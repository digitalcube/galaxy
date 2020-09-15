import React from 'react';
import {
  Heading,
  Button,
  Spacer,
  NodeList,
  Card,
  Container,
  Content,
  Image,
  Text,
  Grid,
  Col,
} from '../index';

type Showcase = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
  nodes?: Card[];
};

export const CaseStudy = ({ img, title, excerpt }: Card) => {
  return (
    <Card img={<Image>{img}</Image>}>
      <Heading size="sm">{title}</Heading>
      <Text>{title}</Text>
    </Card>
  );
};

export const ShowcaseNodes = ({ nodes = [] }: Showcase) => {
  const showcaseNodes = nodes.map((node: Card, i) => {
    const { title, img, excerpt } = node;
    return {
      node: <CaseStudy key={i} title={title} img={img} excerpt={excerpt} />,
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
      href: `#`,
      img: (
        <img
          src="https://www.getshifter.io/static/5b8d04811ce4850fad82e16214795926/39f27/soracom.jpg"
          alt=""
        />
      ),
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      href: `#`,
      img: (
        <img
          src="https://www.getshifter.io/static/1f94269f0d484cd3750314acef23695d/39f27/screenshot-vu.jpg"
          alt=""
        />
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
