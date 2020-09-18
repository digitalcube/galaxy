import React, { FC } from 'react';
import {
  Container,
  Spacer,
  Heading,
  Content,
  Image,
  Node,
  Slider,
} from '../index';
import { components } from '../../styles';

type Logos = {
  nodes?: Node[];
  content?: {
    title?: string;
  };
};

const nodesDefault = [
  {
    node: (
      <Image>
        <img
          src="https://www.getshifter.io/static/ffe74e144da991b2e626b7a0a78bd3e2/3fc3b/logo-lixil.png"
          alt="LIXIL"
        />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img
          src="https://www.getshifter.io/static/a2658d8f3ead05a877311f79474f169a/3fc3b/logo-docomo.png"
          alt="NTT docomo"
        />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img
          src="https://www.getshifter.io/static/3e210d8d40d591c5f417f42a0ac9d296/3fc3b/logo-mikihouse.png"
          alt="MIKI HOUSE"
        />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img
          src="https://www.getshifter.io/static/8976ea03ac4454c575d0d1a47e34d5dc/3fc3b/logo-vu.png"
          alt="University Amsterdam"
        />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img
          src="https://www.getshifter.io/static/ddc39223e6bd875a213e792560bf26e5/3fc3b/logo-hennge.png"
          alt="HENNGE"
        />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img
          src="https://www.getshifter.io/static/3ebe60dc5f227bc436af5e71b8c6327f/3fc3b/logo-internetsociety.png"
          alt="Internet Society"
        />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img
          src="https://www.getshifter.io/static/ba6263244c43d10585bdf0215e35886b/3fc3b/logo-soracom.png"
          alt="Soracom"
        />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img
          src="https://www.getshifter.io/static/ddc39223e6bd875a213e792560bf26e5/3fc3b/logo-hennge.png"
          alt="HENNGE"
        />
      </Image>
    ),
  },
];

export const Logos: FC<Logos> = ({
  content = {
    title: `Some of the world's leading businesses, thinkers, and creatives call Shifter home. `,
  },
  nodes = nodesDefault,
}: Logos) => {
  const { title } = content;
  return (
    <Spacer as="section" size={3}>
      <Container size="md">
        <Content align="center">
          <Heading size="6">
            <b>{title}</b>
          </Heading>
        </Content>
      </Container>
      <Spacer size={3} />
      <Slider nodes={nodes} />
    </Spacer>
  );
};
