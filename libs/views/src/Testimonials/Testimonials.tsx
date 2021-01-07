import React, { FC } from 'react';
import {
  Container,
  Heading,
  Content,
  Slider,
  Text,
  Link,
  Avatar,
} from '@galaxy/core';

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
    <Content
      align="center"
      sx={{
        px: '20%',
      }}
    >
      <Text>
        <div dangerouslySetInnerHTML={{ __html: quote ? quote : `` }} />
      </Text>
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
        px: '5%',
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
      <Slider
        slidesPerView={1}
        centeredSlides={false}
        nodes={quotes}
        sx={{
          position: 'relative',
          '::before,::after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '20%',
            zIndex: 2,
          },
          '::before': {
            left: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(250, 250, 250, 1), rgba(250, 250, 250, 0))',
          },
          '::after': {
            right: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(250, 250, 250, 0), rgba(250, 250, 250, 1))',
          },
        }}
      />
    </Container>
  );
};

Testimonials.defaultProps = {
  title: `Esse reprehenderit incididunt in deserunt enim nostrud tempor proident exercitation duis dolore ullamco proident.`,
  nodes: [
    {
      img: 'user-avatar.png',
      quote:
        'Amet sint velit aliquip aute ex enim cupidatat ex Nulla nostrud proident minim do labore ipsum mollit eu voluptate. Cillum magna quis culpa in et ea laborum eiusmod reprehenderit tempor ea labore. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote:
        'Ullamco aute nulla amet commodo magna.. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote:
        'Aute ea eiusmod eu consectetur velit cillum dolore quis voluptate eu eiusmod.. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote:
        'DigitalCube Launches Shifter, Serverless Hosting for WordPress. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote:
        'DigitalCube Launches Shifter, Serverless Hosting for WordPress. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
  ],
};
