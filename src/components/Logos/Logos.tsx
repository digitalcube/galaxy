import React, { FC } from 'react';
import { Container, Heading, Content, Image, Node, Slider } from '../index';

type Logos = {
  nodes?: Node[];
  title?: string;
};

export const Logos: FC<Logos> = ({ title, nodes }: Logos) => {
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
        nodes={nodes}
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
      node: (
        <Logo
          img="https://www.getshifter.io/static/ffe74e144da991b2e626b7a0a78bd3e2/3fc3b/logo-lixil.png"
          alt="LIXIL"
        />
      ),
    },
    {
      node: (
        <Logo
          img="https://www.getshifter.io/static/a2658d8f3ead05a877311f79474f169a/3fc3b/logo-docomo.png"
          alt="NTT docomo"
        />
      ),
    },
    {
      node: (
        <Logo
          img="https://www.getshifter.io/static/3e210d8d40d591c5f417f42a0ac9d296/3fc3b/logo-mikihouse.png"
          alt="MIKI HOUSE"
        />
      ),
    },
    {
      node: (
        <Logo
          img="https://www.getshifter.io/static/8976ea03ac4454c575d0d1a47e34d5dc/3fc3b/logo-vu.png"
          alt="University Amsterdam"
        />
      ),
    },
    {
      node: (
        <Logo
          img="https://www.getshifter.io/static/ddc39223e6bd875a213e792560bf26e5/3fc3b/logo-hennge.png"
          alt="HENNGE"
        />
      ),
    },
    {
      node: (
        <Logo
          img="https://www.getshifter.io/static/3ebe60dc5f227bc436af5e71b8c6327f/3fc3b/logo-internetsociety.png"
          alt="Internet Society"
        />
      ),
    },
    {
      node: (
        <Logo
          img="https://www.getshifter.io/static/ba6263244c43d10585bdf0215e35886b/3fc3b/logo-soracom.png"
          alt="Soracom"
        />
      ),
    },
    {
      node: (
        <Logo
          img="https://www.getshifter.io/static/ddc39223e6bd875a213e792560bf26e5/3fc3b/logo-hennge.png"
          alt="HENNGE"
        />
      ),
    },
  ],
};
