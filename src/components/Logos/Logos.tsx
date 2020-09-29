import React, { FC } from 'react';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Content } from '../Content';
import { Image } from '../Image';
import { Slider } from '../Slider';

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

Logos.defaultProps = {
  title: `Some of the world's leading businesses, thinkers, and creatives call Shifter home. `,
  nodes: [
    {
      img: `https://www.getshifter.io/static/ffe74e144da991b2e626b7a0a78bd3e2/3fc3b/logo-lixil.png`,
      alt: `LIXIL`,
    },
    {
      img: `https://www.getshifter.io/static/ffe74e144da991b2e626b7a0a78bd3e2/3fc3b/logo-lixil.png`,
      alt: `LIXIL`,
    },
    {
      img: `https://www.getshifter.io/static/ffe74e144da991b2e626b7a0a78bd3e2/3fc3b/logo-lixil.png`,
      alt: `LIXIL`,
    },
    {
      img: `https://www.getshifter.io/static/ffe74e144da991b2e626b7a0a78bd3e2/3fc3b/logo-lixil.png`,
      alt: `LIXIL`,
    },
    {
      img: `https://www.getshifter.io/static/ffe74e144da991b2e626b7a0a78bd3e2/3fc3b/logo-lixil.png`,
      alt: `LIXIL`,
    },
    {
      img: `https://www.getshifter.io/static/ffe74e144da991b2e626b7a0a78bd3e2/3fc3b/logo-lixil.png`,
      alt: `LIXIL`,
    },
  ],
};
