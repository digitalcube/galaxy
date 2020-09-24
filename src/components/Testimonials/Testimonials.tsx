import React, { FC } from 'react';
import {
  Container,
  Heading,
  Content,
  Slider,
  Text,
  Link,
  Avatar,
} from '../index';

type Testimonials = {
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
      <Slider nodes={nodes} />
    </Container>
  );
};

Testimonials.defaultProps = {
  title: `Esse reprehenderit incididunt in deserunt enim nostrud tempor proident exercitation duis dolore ullamco proident.`,
  nodes: [
    {
      node: (
        <Quote
          img="user-avatar.png"
          quote="Proident irure anim non non labore adipisicing."
          author="FooBarBaz"
          handle="@ExampleFooBarBaz"
        />
      ),
    },
    {
      node: (
        <Quote
          img="user-avatar.png"
          quote="Proident irure anim non non labore adipisicing."
          author="FooBarBaz"
          handle="@ExampleFooBarBaz"
        />
      ),
    },
    {
      node: (
        <Quote
          img="user-avatar.png"
          quote="Proident irure anim non non labore adipisicing."
          author="FooBarBaz"
          handle="@ExampleFooBarBaz"
        />
      ),
    },
    {
      node: (
        <Quote
          img="user-avatar.png"
          quote="Proident irure anim non non labore adipisicing."
          author="FooBarBaz"
          handle="@ExampleFooBarBaz"
        />
      ),
    },
    {
      node: (
        <Quote
          img="user-avatar.png"
          quote="Proident irure anim non non labore adipisicing."
          author="FooBarBaz"
          handle="@ExampleFooBarBaz"
        />
      ),
    },
    {
      node: (
        <Quote
          img="user-avatar.png"
          quote="Proident irure anim non non labore adipisicing."
          author="FooBarBaz"
          handle="@ExampleFooBarBaz"
        />
      ),
    },
  ],
};
