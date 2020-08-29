import React, { ReactNode } from 'react';
import { Heading, Container, Grid, Col, Content, Spacer, Text } from '../index';

type Benefits = {
  title?: string;
  subtitle?: string;
  img?: ReactNode;
  nodes?: Node[];
};

type Node = {
  content: {
    title: string;
    excerpt: string;
  };
};

const nodeList = ({ nodes = [] }: Benefits) => {
  if (!nodes) return;
  const i = nodes.map((item: Node) => {
    if (!item.content) return;
    const { content } = item;
    const { title, excerpt } = content;
    return (
      <Col>
        <Content>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text>{excerpt}</Text>
        </Content>
      </Col>
    );
  });
  return i;
};

export const Benefits = ({ title, subtitle, img, nodes = [] }: Benefits) => {
  return (
    <section>
      <Container>
        <Container size="md" align="left">
          <Spacer size="lg">
            <Content>
              <Heading as="h2" size="lg">
                {title}
              </Heading>
              <Heading as="h2" size="sm">
                {subtitle}
              </Heading>
            </Content>
          </Spacer>
        </Container>
      </Container>
      <Container>
        <Grid md="2">
          <Grid md="2">{nodeList({ nodes: nodes })}</Grid>
          {img}
        </Grid>
      </Container>
    </section>
  );
};
