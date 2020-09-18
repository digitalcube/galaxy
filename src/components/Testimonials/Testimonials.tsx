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

type Quote = {};

const Quote = ({}: Quote) => {
  return (
    <Content align="center">
      <Text>
        This looks very good. Direction of travel imho for WordPress
        architecture
      </Text>
      <Avatar
        width="25%"
        img={`https://www.getshifter.io/static/2d0c850166d901b54e69b68f4b3393cf/df94f/Samky52L_400x400.webp`}
      />
      <Text>
        <b>Serverless</b>
      </Text>
      <Link href="#">
        <Heading size="0" as="h3">
          @serverless
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
  title = `Discover what the people are saying about Shifter.`,
  nodes = nodesDefault,
}: Testimonials) => {
  return (
    <Spacer as="section" size={3}>
      <Container size="sm">
        <Content align="center">
          <Heading size="6">{title}</Heading>
        </Content>
      </Container>
      <Spacer size={3} />
      <Slider nodes={nodes} />
    </Spacer>
  );
};
