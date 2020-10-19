import React, { FC } from 'react';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Content } from '../../components/Content';
import { Image } from '../../components/Image';
import { Slider } from '../../components/Slider';

export type Logos = {
  nodes?: any;
  title?: string;
};

export const Logos: FC<Logos> = ({ title, nodes }: Logos) => {
  if (!nodes) return null;

  const logos = nodes.map((node: Logo) => {
    return {
      node: <Logo {...node} />,
    };
  });

  return (
    <Container
      size="4"
      as="section"
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
        slidesPerView={5}
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
        nodes={logos}
      />
    </Container>
  );
};

type Logo = {
  alt?: string;
  img?: string;
};

export const Logo: FC<Logo> = ({ alt, img }) => {
  if (!img) return null;
  return (
    <Image
      sx={{
        display: 'flex',
        m: '0 auto',
      }}
      img={img}
      alt={alt}
    />
  );
};
