import React, { ReactNode } from 'react';
import {
  Heading,
  Container,
  Grid,
  Col,
  Content,
  Spacer,
  Animation,
} from '../index';

type Benefits = {
  title?: string;
  subtitle?: ReactNode;
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
    if (!item.content) return null;
    const { content } = item;
    const { title, excerpt } = content;
    return (
      <Col>
        <Content>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Heading as="p" size="xs">
            {excerpt}
          </Heading>
        </Content>
      </Col>
    );
  });
  return i;
};

export const Benefits = ({
  title = `One Click Setup`,
  subtitle = `Create a new site or migrate an existing WordPress site in minutes.`,
  img = <Animation animation="singleClick" />,
  nodes = [
    {
      content: {
        title: `Easy installation`,
        excerpt: `Create a new WordPress site right from the Shifter Dashboard, no uploading required.`,
      },
    },
    {
      content: {
        title: `Collaborate`,
        excerpt: `Work with others and share access to your Shifter account using our team features.`,
      },
    },
    {
      content: {
        title: `Maintenance-free`,
        excerpt: `Shifter manages WordPress core so you're always up to date and plugins never vulnerable.`,
      },
    },
    {
      content: {
        title: `No coding required`,
        excerpt: `Easy for non-developers to get started using WordPress themes or page builders.`,
      },
    },
  ],
}: Benefits) => {
  return (
    <section>
      <Spacer size="md">
        <Container>
          <Container size="md" align="left">
            <Content>
              <Heading as="h2" size="lg">
                {title}
              </Heading>
              <Heading as="h3" size="xs">
                {subtitle}
              </Heading>
            </Content>
          </Container>
        </Container>
        <Spacer size="md" />
        <Container>
          <Grid md="2">
            <Grid md="2">{nodeList({ nodes: nodes })}</Grid>
            {img}
          </Grid>
        </Container>
      </Spacer>
    </section>
  );
};
