import React, { ReactNode } from 'react';
import { Heading, Container, Grid, Content, Spacer, Animation } from '../index';

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
  const i = nodes.map((item: Node, i) => {
    if (!item.content) return null;
    const { content } = item;
    const { title, excerpt } = content;
    return (
      <Content key={i}>
        <Heading as="h3" size="5">
          <b>{title}</b>
        </Heading>
        <Heading as="p" size="3">
          {excerpt}
        </Heading>
      </Content>
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
      <Spacer size={3}>
        <Container>
          <Container size="1" align="left">
            <Content>
              <Heading as="h2" size="6">
                <b>{title}</b>
              </Heading>
              <Heading as="h3" size="3">
                {subtitle}
              </Heading>
            </Content>
          </Container>
        </Container>
        <Spacer size={3} />
        <Container>
          <Grid columns={2}>
            <Grid columns={2}>{nodeList({ nodes: nodes })}</Grid>
            {img}
          </Grid>
        </Container>
      </Spacer>
    </section>
  );
};
