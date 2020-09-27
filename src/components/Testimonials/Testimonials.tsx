import React, { FC } from 'react';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Content } from '../Content';
import { Slider } from '../Slider';
import { Text } from '../Text';
import { Link } from '../Link';
import { Avatar } from '../Avatar';

export type Testimonials = {
  nodes?: any;
  title?: string;
};

type Quote = {
  img?: string;
  quote?: string;
  author?: string;
  handle?: string;
};

const Quote = ({ img, quote, author, handle }: Quote) => {
  return (
    <Content align="center">
      <Text>{quote}</Text>
      <Avatar size="1" img={img} />
      <Text>
        <b>{author}</b>
      </Text>
      <Link href="#">
        <Heading size="0" as="h3">
          {handle}
        </Heading>
      </Link>
    </Content>
  );
};

export const Testimonials: FC<Testimonials> = ({
  title,
  nodes,
}: Testimonials) => {
  const quotes = nodes.map((node: Quote) => {
    return {
      node: <Quote {...node} />,
    };
  });

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
        </Content>
      </Container>
      <Slider nodes={quotes} />
    </Container>
  );
};

Testimonials.defaultProps = {
  title: `Esse reprehenderit incididunt in deserunt enim nostrud tempor proident exercitation duis dolore ullamco proident.`,
  nodes: [
    {
      img: 'user-avatar.png',
      quote: 'Proident irure anim non non labore adipisicing.',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote: 'Proident irure anim non non labore adipisicing.',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote: 'Proident irure anim non non labore adipisicing.',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote: 'Proident irure anim non non labore adipisicing.',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote: 'Proident irure anim non non labore adipisicing.',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
  ],
};
