import React, { FC } from 'react';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Content } from '../../components/Content';
import { Slider } from '../../components/Slider';
import { Text } from '../../components/Text';
import { Link } from '../../components/Link';
import { Avatar } from '../../components/Avatar';

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
        slidesPerView={2}
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
    {
      img: 'user-avatar.png',
      quote:
        'DigitalCube Launches Shifter, Serverless Hosting for WordPress. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
  ],
};
