import React, { FC } from 'react';
import styled from 'styled-components';
import {
  Container,
  Spacer,
  Heading,
  Content,
  Image,
  Node,
  Slider,
  Text,
  Header,
  Link,
  Avatar,
} from '../index';
import { components } from '../../styles';

type Testimonials = {
  nodes?: Node[];
  title?: string;
};

type Quote = {
  img?: string;
  quote?: string;
  author?: string;
  handle?: string;
};

const Quote = ({
  img = 'avatar.png',
  quote = `Proident irure anim non non labore adipisicing.`,
  author = 'FooBarBaz',
  handle = `@ExampleFooBarBaz`,
}: Quote) => {
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

const nodesDefault = [
  {
    node: <Quote />,
  },
  {
    node: <Quote />,
  },
  {
    node: <Quote />,
  },
  {
    node: <Quote />,
  },
  {
    node: <Quote />,
  },
  {
    node: <Quote />,
  },
  {
    node: <Quote />,
  },
  {
    node: <Quote />,
  },
];

export const Testimonials: FC<Testimonials> = ({
  title = `Dolor dolor exercitation nisi sunt cillum est fugiat eiusmod nisi incididunt dolore duis elit.`,
  nodes = nodesDefault,
}: Testimonials) => {
  return (
    <Spacer as="section" size={3}>
      <Container size="md">
        <Content align="center">
          <Heading size="6">{title}</Heading>
        </Content>
      </Container>
      <Spacer size={3} />
      <Slider nodes={nodes} />
    </Spacer>
  );
};
